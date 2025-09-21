"use client";

import { useUser } from "@/contexts/UserContext";
import { Button } from "./Button";

interface UserProfileProps {
  onShowLogin: () => void;
}

export default function UserProfile({ onShowLogin }: UserProfileProps) {
  const { user, playerStats, logout, isAuthenticated } = useUser();

  if (!isAuthenticated || !user || !playerStats) {
    return (
      <div className="flex items-center space-x-2">
        <Button onClick={onShowLogin} variant="primary" size="sm">
          Login / Register
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      {/* User Info */}
      <div className="text-right">
        <div className="font-semibold text-white">{user.username}</div>
        <div className="text-sm text-gray-300">
          Level {playerStats.level} • {playerStats.experience} XP
        </div>
      </div>

      {/* Avatar */}
      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-800">
        {user.username.charAt(0).toUpperCase()}
      </div>

      {/* Stats */}
      <div className="text-sm text-gray-300">
        <div>Best: {playerStats.bestScore}</div>
        <div>Games: {playerStats.totalGamesPlayed}</div>
      </div>

      {/* Logout */}
      <Button onClick={logout} variant="secondary" size="sm">
        Logout
      </Button>
    </div>
  );
}
