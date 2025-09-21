"use client";

import { useReducer, useCallback, useEffect, useRef } from "react";
import { GameState, GameAction, Bird, Pipe } from "@/types/game";
import { useSound } from "./useSound";
import { useGameConfig } from "@/contexts/GameConfigContext";

export function useGame() {
  const { config } = useGameConfig();

  const initialBird: Bird = {
    position: { x: 80, y: 250 },
    velocity: { x: 0, y: 0 },
    rotation: 0,
    size: config.physics.birdSize,
  };

  const initialState: GameState = {
    isPlaying: false,
    isGameOver: false,
    score: 0,
    highScore: 0,
    bird: initialBird,
    pipes: [],
    gravity: config.physics.gravity,
    jumpForce: config.physics.jumpForce,
    pipeSpeed: config.pipes.speed,
    pipeGap: config.pipes.gap,
    pipeWidth: config.pipes.width,
    pipeSpawnRate: config.pipes.spawnRate,
    gameWidth: config.dimensions.width,
    gameHeight: config.dimensions.height,
  };

  function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
      case "START_GAME":
        return {
          ...state,
          isPlaying: true,
          isGameOver: false,
          score: 0,
          bird: initialBird,
          pipes: [],
        };

      case "JUMP":
        if (!state.isPlaying || state.isGameOver) return state;
        return {
          ...state,
          bird: {
            ...state.bird,
            velocity: { ...state.bird.velocity, y: state.jumpForce },
          },
        };

      case "UPDATE_GAME":
        if (!state.isPlaying || state.isGameOver) return state;

        const newBird = {
          ...state.bird,
          velocity: {
            ...state.bird.velocity,
            y: state.bird.velocity.y + state.gravity,
          },
          position: {
            ...state.bird.position,
            y: state.bird.position.y + state.bird.velocity.y,
          },
          rotation: Math.min(
            Math.max(
              state.bird.velocity.y * config.physics.birdRotationMultiplier,
              -30
            ),
            30
          ),
        };

        const newPipes = state.pipes
          .map((pipe) => ({
            ...pipe,
            x: pipe.x - state.pipeSpeed,
          }))
          .filter((pipe) => pipe.x > -state.pipeWidth);

        const updatedPipes = newPipes.map((pipe) => ({
          ...pipe,
          passed:
            pipe.x + state.pipeWidth < state.bird.position.x || pipe.passed,
        }));

        const newScore =
          state.score +
          updatedPipes.filter(
            (pipe) =>
              pipe.x + state.pipeWidth < state.bird.position.x && !pipe.passed
          ).length;

        const shouldSpawnPipe =
          state.pipes.length === 0 ||
          state.pipes[state.pipes.length - 1].x <
            state.gameWidth - state.pipeSpawnRate;

        if (shouldSpawnPipe) {
          const pipeHeight =
            Math.random() *
              (state.gameHeight -
                state.pipeGap -
                config.pipes.minHeight -
                config.pipes.maxHeight) +
            config.pipes.minHeight;
          const newPipe: Pipe = {
            id: Date.now().toString(),
            x: state.gameWidth,
            topHeight: pipeHeight,
            bottomHeight: state.gameHeight - pipeHeight - state.pipeGap,
            gap: state.pipeWidth,
            passed: false,
          };
          newPipes.push(newPipe);
        }

        const isCollision = checkCollision(newBird, newPipes, state);

        return {
          ...state,
          bird: newBird,
          pipes: newPipes,
          score: newScore,
          isGameOver: isCollision,
          highScore: isCollision
            ? Math.max(state.highScore, newScore)
            : state.highScore,
        };

      case "GAME_OVER":
        return {
          ...state,
          isPlaying: false,
          isGameOver: true,
          highScore: Math.max(state.highScore, state.score),
        };

      case "RESET_GAME":
        return {
          ...state,
          isPlaying: false,
          isGameOver: false,
          score: 0,
          bird: initialBird,
          pipes: [],
        };

      default:
        return state;
    }
  }

  function checkCollision(
    bird: Bird,
    pipes: Pipe[],
    state: GameState
  ): boolean {
    if (bird.position.y < 0 || bird.position.y + bird.size > state.gameHeight) {
      return true;
    }

    for (const pipe of pipes) {
      if (
        bird.position.x < pipe.x + pipe.gap &&
        bird.position.x + bird.size > pipe.x &&
        (bird.position.y < pipe.topHeight ||
          bird.position.y + bird.size > pipe.topHeight + state.pipeGap)
      ) {
        return true;
      }
    }

    return false;
  }

  const [state, dispatch] = useReducer(gameReducer, initialState);
  const gameLoopRef = useRef<number | undefined>(undefined);
  const { playJump, playScore, playGameOver } = useSound();
  const lastScoreRef = useRef(0);

  const startGame = useCallback(() => {
    dispatch({ type: "START_GAME" });
  }, []);

  const jump = useCallback(() => {
    playJump();
    dispatch({ type: "JUMP" });
  }, [playJump]);

  const resetGame = useCallback(() => {
    dispatch({ type: "RESET_GAME" });
  }, []);

  useEffect(() => {
    if (state.isPlaying && !state.isGameOver) {
      const gameLoop = () => {
        dispatch({ type: "UPDATE_GAME" });
        if (state.isPlaying && !state.isGameOver) {
          gameLoopRef.current = requestAnimationFrame(gameLoop);
        }
      };
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [state.isPlaying, state.isGameOver]);

  useEffect(() => {
    if (state.isGameOver) {
      playGameOver();
      dispatch({ type: "GAME_OVER" });
    }
  }, [state.isGameOver, playGameOver]);

  useEffect(() => {
    if (state.score > lastScoreRef.current) {
      playScore();
      lastScoreRef.current = state.score;
    }
  }, [state.score, playScore]);

  return {
    state,
    startGame,
    jump,
    resetGame,
  };
}
