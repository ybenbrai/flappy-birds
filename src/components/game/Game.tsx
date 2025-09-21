"use client";

import { useEffect } from "react";
import { useGame } from "@/hooks/useGame";
import Bird from "./Bird";
import Pipe from "./Pipe";
import Background from "./Background";
import GameUI from "@/components/game/GameUI";

export default function Game() {
  const { state, startGame, jump, resetGame } = useGame();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (!state.isPlaying && !state.isGameOver) {
          startGame();
        } else if (state.isPlaying && !state.isGameOver) {
          jump();
        } else if (state.isGameOver) {
          resetGame();
        }
      }
    };

    const handleClick = () => {
      if (!state.isPlaying && !state.isGameOver) {
        startGame();
      } else if (state.isPlaying && !state.isGameOver) {
        jump();
      } else if (state.isGameOver) {
        resetGame();
      }
    };

    const handleTouch = (event: TouchEvent) => {
      event.preventDefault();
      if (!state.isPlaying && !state.isGameOver) {
        startGame();
      } else if (state.isPlaying && !state.isGameOver) {
        jump();
      } else if (state.isGameOver) {
        resetGame();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [state.isPlaying, state.isGameOver, startGame, jump, resetGame]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="relative overflow-hidden rounded-lg border-4 border-gray-800 shadow-2xl">
        <div
          className="relative"
          style={{
            width: `${state.gameWidth}px`,
            height: `${state.gameHeight}px`,
          }}
        >
          <Background
            gameWidth={state.gameWidth}
            gameHeight={state.gameHeight}
          />

          {state.pipes.map((pipe) => (
            <Pipe key={pipe.id} pipe={pipe} gameHeight={state.gameHeight} />
          ))}

          <Bird bird={state.bird} />

          <GameUI
            isPlaying={state.isPlaying}
            isGameOver={state.isGameOver}
            score={state.score}
            highScore={state.highScore}
            onStart={startGame}
            onReset={resetGame}
          />
        </div>
      </div>
    </div>
  );
}
