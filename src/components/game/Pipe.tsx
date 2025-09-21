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
      className="absolute z-5"
      style={{
        left: `${pipe.x}px`,
        top: 0,
        width: `${pipe.gap}px`,
        height: `${gameHeight}px`,
      }}
    >
      <div
        className="relative shadow-lg"
        style={{
          height: `${pipe.topHeight}px`,
          width: `${pipe.gap}px`,
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
        className="relative shadow-lg"
        style={{
          height: `${pipe.bottomHeight}px`,
          width: `${pipe.gap}px`,
          position: "absolute",
          bottom: 0,
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
