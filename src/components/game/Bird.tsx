"use client";

import { Bird as BirdType } from "@/types/game";
import { useGameConfig } from "@/contexts/GameConfigContext";

interface BirdProps {
  bird: BirdType;
}

export default function Bird({ bird }: BirdProps) {
  const { config } = useGameConfig();

  return (
    <div
      className="absolute z-10 transition-transform duration-75"
      style={{
        left: `${bird.position.x}px`,
        top: `${bird.position.y}px`,
        width: `${bird.size}px`,
        height: `${bird.size}px`,
        transform: `rotate(${bird.rotation}deg)`,
      }}
    >
      <div
        className="w-full h-full rounded-full relative shadow-lg"
        style={{
          backgroundColor: config.visual.birdColor,
          border: `2px solid ${config.visual.birdBorderColor}`,
        }}
      >
        <div
          className="absolute top-1 left-2 w-2 h-2 rounded-full"
          style={{ backgroundColor: config.visual.birdEyeColor }}
        ></div>
        <div
          className="absolute top-1 right-2 w-2 h-2 rounded-full"
          style={{ backgroundColor: config.visual.birdEyeColor }}
        ></div>
        <div className="absolute top-2 left-1 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-2 right-1 w-1 h-1 bg-black rounded-full"></div>
        <div
          className="absolute bottom-2 left-3 w-3 h-2 rounded-full"
          style={{ backgroundColor: config.visual.birdBeakColor }}
        ></div>
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
          style={{ backgroundColor: config.visual.birdColor, opacity: 0.8 }}
        ></div>
      </div>
    </div>
  );
}
