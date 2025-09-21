export interface User {
  id: string;
  username: string;
  email?: string;
  avatar?: string;
  createdAt: Date;
  lastPlayed?: Date;
  isOnline: boolean;
}

export interface PlayerStats {
  userId: string;
  totalGamesPlayed: number;
  totalScore: number;
  bestScore: number;
  averageScore: number;
  winRate: number;
  totalPlayTime: number; // in secondsfpasz
  level: number;
  experience: number;
  achievements: Achievement[];
  preferences: UserPreferences;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export interface UserPreferences {
  theme: string;
  difficulty: string;
  soundEnabled: boolean;
  musicEnabled: boolean;
  showTutorial: boolean;
  customSettings?: Record<string, unknown>;
}

export interface GameSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  score: number;
  duration: number; // in seconds
  difficulty: string;
  isCompleted: boolean;
  isCompetition: boolean;
  competitionId?: string;
  replayData?: ReplayData;
}

export interface ReplayData {
  actions: GameAction[];
  timestamps: number[];
  config: Record<string, unknown>;
  seed?: number; // for deterministic replays
}

export interface GameAction {
  type: "jump" | "start" | "pause" | "resume" | "end";
  timestamp: number;
  data?: Record<string, unknown>;
}

export interface ReplayAction {
  type: "jump" | "start" | "pause" | "resume" | "end" | "score" | "collision";
  timestamp: number;
  data?: Record<string, unknown>;
}
