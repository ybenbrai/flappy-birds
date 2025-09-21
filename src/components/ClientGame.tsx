"use client";

import dynamic from "next/dynamic";
import { GameConfigProvider } from "@/contexts/GameConfigContext";
import { UserProvider } from "@/contexts/UserContext";

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
    <UserProvider>
      <GameConfigProvider>
        <Game />
      </GameConfigProvider>
    </UserProvider>
  );
}
