"use client";

import dynamic from "next/dynamic";
import { GameConfigProvider } from "@/contexts/GameConfigContext";

const Game = dynamic(() => import("./game/Game"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading Flappy Bird...</div>
    </div>
  ),
});

export default function ClientGame() {
  return (
    <GameConfigProvider>
      <Game />
    </GameConfigProvider>
  );
}
