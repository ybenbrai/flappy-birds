"use client";

import { Button } from "@/components/ui/Button";
import { useGameConfig } from "@/contexts/GameConfigContext";

interface GameUIProps {
  isPlaying: boolean;
  isGameOver: boolean;
  score: number;
  highScore: number;
  onStart: () => void;
  onReset: () => void;
}

export default function GameUI({
  isPlaying,
  isGameOver,
  score,
  highScore,
  onStart,
  onReset,
}: GameUIProps) {
  const { config } = useGameConfig();

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {config.ui.showScore && (
        <div
          className="absolute top-4 left-4 font-bold"
          style={{
            color: config.ui.colors.score,
            fontSize: config.ui.fontSize.score
              .replace("text-", "")
              .replace("xl", "px")
              .replace("2xl", "px"),
          }}
        >
          {score}
        </div>
      )}

      {config.ui.showHighScore && (
        <div
          className="absolute top-4 right-4 font-bold"
          style={{
            color: config.ui.colors.score,
            fontSize: config.ui.fontSize.instruction
              .replace("text-", "")
              .replace("lg", "px"),
          }}
        >
          Best: {highScore}
        </div>
      )}

      {!isPlaying && !isGameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 pointer-events-auto">
          <div
            className="text-center mb-8"
            style={{ color: config.ui.colors.text }}
          >
            <h1
              className="font-bold mb-4"
              style={{
                color: config.ui.colors.title,
                fontSize: config.ui.fontSize.title
                  .replace("text-", "")
                  .replace("6xl", "px"),
              }}
            >
              Flappy Bird
            </h1>
            {config.ui.showInstructions && (
              <>
                <p
                  className="mb-2"
                  style={{
                    color: config.ui.colors.instruction,
                    fontSize: config.ui.fontSize.instruction
                      .replace("text-", "")
                      .replace("xl", "px"),
                  }}
                >
                  Press SPACE or Click to start
                </p>
                <p
                  className="opacity-75"
                  style={{
                    color: config.ui.colors.instruction,
                    fontSize: config.ui.fontSize.instruction
                      .replace("text-", "")
                      .replace("lg", "px"),
                  }}
                >
                  Avoid the pipes!
                </p>
              </>
            )}
          </div>
          <Button
            onClick={onStart}
            variant="primary"
            size="lg"
            className="pointer-events-auto"
          >
            Start Game
          </Button>
        </div>
      )}

      {isGameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 pointer-events-auto">
          <div className="text-center text-white mb-8">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Game Over!</h2>
            <p className="text-2xl mb-2">Score: {score}</p>
            <p className="text-lg mb-4">Best: {highScore}</p>
            <p className="text-lg opacity-75">
              Press SPACE or Click to restart
            </p>
          </div>
          <Button
            onClick={onReset}
            variant="primary"
            size="lg"
            className="pointer-events-auto"
          >
            Play Again
          </Button>
        </div>
      )}

      {isPlaying && !isGameOver && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center pointer-events-auto">
          <p className="text-lg opacity-75">Press SPACE or Click to jump</p>
        </div>
      )}
    </div>
  );
}
