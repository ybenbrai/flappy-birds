"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  User,
  PlayerStats,
  UserPreferences,
  GameSession,
  Achievement,
} from "@/types/user";

interface UserContextType {
  user: User | null;
  playerStats: PlayerStats | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // User management
  login: (username: string, email?: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<void>;

  // Stats management
  updateStats: (session: GameSession) => Promise<void>;
  getLeaderboard: (
    type: "global" | "friends" | "competition",
    competitionId?: string
  ) => Promise<PlayerStats[]>;

  // Preferences
  updatePreferences: (preferences: Partial<UserPreferences>) => Promise<void>;

  // Session management
  startSession: (competitionId?: string) => string;
  endSession: (sessionId: string, score: number) => Promise<void>;

  // Achievements
  checkAchievements: (session: GameSession) => Promise<Achievement[]>;
  unlockAchievement: (achievementId: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("flappy-bird-user");
    const savedStats = localStorage.getItem("flappy-bird-stats");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedStats) {
      setPlayerStats(JSON.parse(savedStats));
    }
  }, []);

  const login = useCallback(async (username: string, email?: string) => {
    setIsLoading(true);
    try {
      const newUser: User = {
        id: crypto.randomUUID(),
        username,
        email,
        createdAt: new Date(),
        isOnline: true,
      };

      const defaultStats: PlayerStats = {
        userId: newUser.id,
        totalGamesPlayed: 0,
        totalScore: 0,
        bestScore: 0,
        averageScore: 0,
        winRate: 0,
        totalPlayTime: 0,
        level: 1,
        experience: 0,
        achievements: [],
        preferences: {
          theme: "classic",
          difficulty: "normal",
          soundEnabled: true,
          musicEnabled: true,
          showTutorial: true,
        },
      };

      setUser(newUser);
      setPlayerStats(defaultStats);

      localStorage.setItem("flappy-bird-user", JSON.stringify(newUser));
      localStorage.setItem("flappy-bird-stats", JSON.stringify(defaultStats));
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setPlayerStats(null);
    localStorage.removeItem("flappy-bird-user");
    localStorage.removeItem("flappy-bird-stats");
  }, []);

  const updateProfile = useCallback(
    async (updates: Partial<User>) => {
      if (!user) return;

      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem("flappy-bird-user", JSON.stringify(updatedUser));
    },
    [user]
  );

  const updateStats = useCallback(
    async (session: GameSession) => {
      if (!playerStats) return;

      const newStats = { ...playerStats };
      newStats.totalGamesPlayed += 1;
      newStats.totalScore += session.score;
      newStats.bestScore = Math.max(newStats.bestScore, session.score);
      newStats.averageScore = newStats.totalScore / newStats.totalGamesPlayed;
      newStats.totalPlayTime += session.duration;

      // Calculate experience and level
      const experienceGained =
        Math.floor(session.score / 10) + Math.floor(session.duration / 10);
      newStats.experience += experienceGained;

      const newLevel = Math.floor(newStats.experience / 1000) + 1;
      if (newLevel > newStats.level) {
        newStats.level = newLevel;
      }

      setPlayerStats(newStats);
      localStorage.setItem("flappy-bird-stats", JSON.stringify(newStats));
    },
    [playerStats]
  );

  const getLeaderboard = useCallback(
    async (
      type: "global" | "friends" | "competition",
      competitionId?: string
    ) => {
      // This would typically make an API call
      // For now, return mock data
      return [];
    },
    []
  );

  const updatePreferences = useCallback(
    async (preferences: Partial<UserPreferences>) => {
      if (!playerStats) return;

      const updatedStats = {
        ...playerStats,
        preferences: { ...playerStats.preferences, ...preferences },
      };

      setPlayerStats(updatedStats);
      localStorage.setItem("flappy-bird-stats", JSON.stringify(updatedStats));
    },
    [playerStats]
  );

  const startSession = useCallback((competitionId?: string) => {
    const sessionId = crypto.randomUUID();
    // Store session start time
    sessionStorage.setItem(
      "current-session",
      JSON.stringify({
        id: sessionId,
        startTime: new Date(),
        competitionId,
      })
    );
    return sessionId;
  }, []);

  const endSession = useCallback(
    async (sessionId: string, score: number) => {
      const sessionData = sessionStorage.getItem("current-session");
      if (!sessionData) return;

      const { startTime, competitionId } = JSON.parse(sessionData);
      const duration = Math.floor(
        (Date.now() - new Date(startTime).getTime()) / 1000
      );

      const session: GameSession = {
        id: sessionId,
        userId: user?.id || "",
        startTime: new Date(startTime),
        endTime: new Date(),
        score,
        duration,
        difficulty: playerStats?.preferences.difficulty || "normal",
        isCompleted: true,
        isCompetition: !!competitionId,
        competitionId,
      };

      await updateStats(session);
      sessionStorage.removeItem("current-session");
    },
    [user, playerStats, updateStats]
  );

  const checkAchievements = useCallback(async () => {
    // This would check for new achievements based on the session
    // For now, return empty array
    return [];
  }, []);

  const unlockAchievement = useCallback(async (achievementId: string) => {
    // This would unlock an achievement
    console.log("Achievement unlocked:", achievementId);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        playerStats,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        updateProfile,
        updateStats,
        getLeaderboard,
        updatePreferences,
        startSession,
        endSession,
        checkAchievements,
        unlockAchievement,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
