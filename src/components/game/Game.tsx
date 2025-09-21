"use client";

import { useEffect, useState } from "react";
import { useGame } from "@/hooks/useGame";
import { useUser } from "@/contexts/UserContext";
import { useGameSession } from "@/hooks/useGameSession";
import Bird from "./Bird";
import Pipe from "./Pipe";
import Background from "./Background";
import GameUI from "./GameUI";
import SettingsPanel from "@/components/ui/SettingsPanel";
import UserProfile from "@/components/ui/UserProfile";
import LoginModal from "@/components/auth/LoginModal";
import { Button } from "@/components/ui/Button";

export default function Game() {
  const [showSettings, setShowSettings] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { state, startGame, pauseGame, resumeGame, jump, resetGame } =
    useGame();
  const { isAuthenticated } = useUser();
  const { startGameSession, endGameSession, addReplayAction } =
    useGameSession();

  // Handle game session management
  useEffect(() => {
    if (state.isPlaying && !state.sessionId && isAuthenticated) {
      startGameSession();
      addReplayAction({ type: "start", timestamp: 0 });
    }
  }, [
    state.isPlaying,
    state.sessionId,
    isAuthenticated,
    startGameSession,
    addReplayAction,
  ]);

  // Handle game over
  useEffect(() => {
    if (state.isGameOver && state.sessionId && isAuthenticated) {
      endGameSession(state.score);
      addReplayAction({ type: "collision", timestamp: 0 });
    }
  }, [
    state.isGameOver,
    state.sessionId,
    state.score,
    isAuthenticated,
    endGameSession,
    addReplayAction,
  ]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (!state.isPlaying && !state.isGameOver) {
          startGame();
        } else if (state.isPlaying && !state.isGameOver) {
          jump();
          addReplayAction({ type: "jump", timestamp: 0 });
        } else if (state.isGameOver) {
          resetGame();
        }
      } else if (event.code === "Escape") {
        if (state.isPlaying && !state.isGameOver) {
          if (state.isPaused) {
            resumeGame();
          } else {
            pauseGame();
          }
        }
      }
    };

    const handleClick = () => {
      if (!state.isPlaying && !state.isGameOver) {
        startGame();
      } else if (state.isPlaying && !state.isGameOver) {
        jump();
        addReplayAction({ type: "jump", timestamp: 0 });
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
        addReplayAction({ type: "jump", timestamp: 0 });
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
  }, [
    state.isPlaying,
    state.isGameOver,
    state.isPaused,
    startGame,
    jump,
    resetGame,
    pauseGame,
    resumeGame,
    addReplayAction,
  ]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="relative">
        {/* Top Bar with User Profile and Settings */}
        <div className="absolute -top-16 left-0 right-0 flex justify-between items-center z-30">
          <UserProfile onShowLogin={() => setShowLogin(true)} />
          <Button
            onClick={() => setShowSettings(true)}
            variant="secondary"
            size="sm"
          >
            ⚙️ Settings
          </Button>
        </div>

        {/* Game Container */}
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

            {/* Pause Overlay */}
            {state.isPaused && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                <div className="text-center text-white">
                  <h2 className="text-2xl font-bold mb-4">Game Paused</h2>
                  <p className="mb-4">Press ESC to resume</p>
                  <Button onClick={resumeGame} variant="primary">
                    Resume
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modals */}
        <SettingsPanel
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
        />

        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      </div>
    </div>
  );
}
