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
  isPlaying: boolean;
  isGameOver: boolean;
  score: number;
  highScore: number;
  bird: Bird;
  pipes: Pipe[];
  gravity: number;
  jumpForce: number;
  pipeSpeed: number;
  pipeGap: number;
  pipeWidth: number;
  pipeSpawnRate: number;
  gameWidth: number;
  gameHeight: number;
}

export type GameAction =
  | { type: "JUMP" }
  | { type: "START_GAME" }
  | { type: "RESET_GAME" }
  | { type: "UPDATE_GAME" }
  | { type: "GAME_OVER" };
