export interface Competition {
  id: string;
  name: string;
  description: string;
  type: CompetitionType;
  status: CompetitionStatus;
  startTime: Date;
  endTime: Date;
  maxParticipants: number;
  currentParticipants: number;
  entryFee?: number;
  prizePool?: number;
  rules: CompetitionRules;
  leaderboard: LeaderboardEntry[];
  createdBy: string;
  createdAt: Date;
}

export type CompetitionType =
  | "daily"
  | "weekly"
  | "monthly"
  | "tournament"
  | "custom"
  | "private";

export type CompetitionStatus =
  | "upcoming"
  | "active"
  | "finished"
  | "cancelled";

export interface CompetitionRules {
  difficulty: string;
  timeLimit?: number; // in seconds
  maxAttempts?: number;
  customConfig?: Record<string, unknown>;
  allowedThemes?: string[];
  powerUps?: boolean;
  obstacles?: boolean;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  avatar?: string;
  score: number;
  rank: number;
  timePlayed: number;
  accuracy: number;
  submittedAt: Date;
  replayId?: string;
}

export interface CompetitionParticipation {
  id: string;
  competitionId: string;
  userId: string;
  joinedAt: Date;
  bestScore: number;
  attempts: number;
  isActive: boolean;
  lastPlayed?: Date;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  format: TournamentFormat;
  status: TournamentStatus;
  rounds: TournamentRound[];
  participants: TournamentParticipant[];
  prizeDistribution: PrizeDistribution[];
  startDate: Date;
  endDate: Date;
  registrationDeadline: Date;
  maxParticipants: number;
  entryFee: number;
  totalPrizePool: number;
}

export type TournamentFormat =
  | "single_elimination"
  | "double_elimination"
  | "round_robin"
  | "swiss";

export type TournamentStatus =
  | "registration"
  | "active"
  | "finished"
  | "cancelled";

export interface TournamentRound {
  id: string;
  roundNumber: number;
  name: string;
  startTime: Date;
  endTime: Date;
  matches: TournamentMatch[];
  isCompleted: boolean;
}

export interface TournamentMatch {
  id: string;
  roundId: string;
  participants: string[]; // userIds
  winner?: string;
  scores: Record<string, number>;
  startTime: Date;
  endTime?: Date;
  isCompleted: boolean;
  replayIds: Record<string, string>;
}

export interface TournamentParticipant {
  userId: string;
  username: string;
  avatar?: string;
  seed: number;
  isEliminated: boolean;
  currentRound: number;
  totalScore: number;
  wins: number;
  losses: number;
}

export interface PrizeDistribution {
  rank: number;
  percentage: number;
  amount: number;
  title: string;
}
