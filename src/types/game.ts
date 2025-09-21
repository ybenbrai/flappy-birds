export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface Pipe {
  id: string;
  x: number;
  topHeight: number;
  bottomHeight: number;
  gap: number;
  passed: boolean;
}

export interface Bird {
  position: Position;
  velocity: Velocity;
  rotation: number;
  size: number;
}

export interface GameState {
  // Core game state
  isPlaying: boolean;
  isGameOver: boolean;
  isPaused: boolean;
  isDebugMode: boolean;
  score: number;
  highScore: number;

  // Game objects
  bird: Bird;
  pipes: Pipe[];
  powerUps: PowerUp[];

  // Physics and configuration
  gravity: number;
  jumpForce: number;
  pipeSpeed: number;
  pipeGap: number;
  pipeWidth: number;
  pipeSpacing: number;
  pipeSpawnRate: number;
  gameWidth: number;
  gameHeight: number;

  // Session data
  sessionId?: string;
  startTime?: Date;
  duration: number;

  // Multiplayer/Competition
  isCompetition: boolean;
  competitionId?: string;
  isSpectating: boolean;

  // Replay data
  replayActions: ReplayAction[];
}

export interface PowerUp {
  id: string;
  type: PowerUpType;
  position: Position;
  size: number;
  duration: number;
  effect: PowerUpEffect;
  isActive: boolean;
  collectedAt?: Date;
}

export type PowerUpType =
  | "slow_motion"
  | "double_points"
  | "shield"
  | "magnet"
  | "size_reduce";

export interface PowerUpEffect {
  type: PowerUpType;
  multiplier?: number;
  duration: number;
  description: string;
}

export interface ReplayAction {
  type: "jump" | "powerup" | "score" | "collision";
  timestamp: number;
  data?: Record<string, unknown>;
}

export type GameAction =
  | { type: "JUMP" }
  | { type: "START_GAME" }
  | { type: "PAUSE_GAME" }
  | { type: "RESUME_GAME" }
  | { type: "RESET_GAME" }
  | { type: "UPDATE_GAME" }
  | { type: "GAME_OVER" }
  | { type: "POWERUP_COLLECTED"; powerUpId: string }
  | { type: "POWERUP_EXPIRED"; powerUpId: string }
  | { type: "SCORE_UPDATE"; points: number }
  | { type: "SESSION_START"; sessionId: string }
  | { type: "SESSION_END" }
  | { type: "TOGGLE_DEBUG_MODE" };
