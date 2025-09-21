"use client";

import { Pipe as PipeType } from "@/types/game";
import { useGameConfig } from "@/contexts/GameConfigContext";

interface PipeProps {
  pipe: PipeType;
  gameHeight: number;
}

export default function Pipe({ pipe, gameHeight }: PipeProps) {
  const { config } = useGameConfig();

  return (
    <div
      className="absolute z-5 top-0 h-full"
      style={{
        left: `${(pipe.x / 400) * 100}%`,
        width: `${(pipe.gap / 400) * 100}%`,
      }}
    >
      <div
        className="relative shadow-lg w-full"
        style={{
          height: `${(pipe.topHeight / 600) * 100}%`,
          backgroundColor: config.visual.pipeColor,
          border: `2px solid ${config.visual.pipeBorderColor}`,
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-4"
          style={{ backgroundColor: config.visual.pipeCapColor }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-2"
          style={{ backgroundColor: config.visual.pipeCapColor, opacity: 0.8 }}
        ></div>
      </div>
      <div
        className="relative shadow-lg w-full absolute bottom-0"
        style={{
          height: `${(pipe.bottomHeight / 600) * 100}%`,
          backgroundColor: config.visual.pipeColor,
          border: `2px solid ${config.visual.pipeBorderColor}`,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-4"
          style={{ backgroundColor: config.visual.pipeCapColor }}
        ></div>
        <div
          className="absolute top-0 left-0 right-0 h-2"
          style={{ backgroundColor: config.visual.pipeCapColor, opacity: 0.8 }}
        ></div>
      </div>
    </div>
  );
}
