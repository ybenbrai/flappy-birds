import { GameConfig } from "@/config/gameConfig";

export interface DifficultyProgression {
  level: number;
  multiplier: number;
  description: string;
  unlockRequirements: {
    score?: number;
    experience?: number;
    gamesPlayed?: number;
  };
}

export const DIFFICULTY_PROGRESSION: DifficultyProgression[] = [
  {
    level: 1,
    multiplier: 1.0,
    description: "Beginner - Learn the basics",
    unlockRequirements: {},
  },
  {
    level: 2,
    multiplier: 1.1,
    description: "Novice - Slightly faster pipes",
    unlockRequirements: { score: 50, experience: 100 },
  },
  {
    level: 3,
    multiplier: 1.2,
    description: "Intermediate - Tighter gaps",
    unlockRequirements: { score: 100, experience: 300 },
  },
  {
    level: 4,
    multiplier: 1.3,
    description: "Advanced - Faster movement",
    unlockRequirements: { score: 200, experience: 600 },
  },
  {
    level: 5,
    multiplier: 1.5,
    description: "Expert - Much harder",
    unlockRequirements: { score: 400, experience: 1200 },
  },
  {
    level: 6,
    multiplier: 1.8,
    description: "Master - Extreme difficulty",
    unlockRequirements: { score: 800, experience: 2500 },
  },
  {
    level: 7,
    multiplier: 2.0,
    description: "Legendary - Only for the best",
    unlockRequirements: { score: 1500, experience: 5000 },
  },
];

export function getDifficultyForLevel(level: number): DifficultyProgression {
  return (
    DIFFICULTY_PROGRESSION.find((d) => d.level === level) ||
    DIFFICULTY_PROGRESSION[0]
  );
}

export function canUnlockLevel(
  level: number,
  stats: {
    bestScore: number;
    experience: number;
    gamesPlayed: number;
  }
): boolean {
  const difficulty = getDifficultyForLevel(level);
  const { unlockRequirements } = difficulty;

  return (
    (!unlockRequirements.score ||
      stats.bestScore >= unlockRequirements.score) &&
    (!unlockRequirements.experience ||
      stats.experience >= unlockRequirements.experience) &&
    (!unlockRequirements.gamesPlayed ||
      stats.gamesPlayed >= unlockRequirements.gamesPlayed)
  );
}

export function applyDifficultyScaling(
  config: GameConfig,
  level: number
): GameConfig {
  const difficulty = getDifficultyForLevel(level);
  const multiplier = difficulty.multiplier;

  return {
    ...config,
    physics: {
      ...config.physics,
      gravity: config.physics.gravity * multiplier,
      jumpForce: config.physics.jumpForce * (1 + (multiplier - 1) * 0.5), // Less aggressive jump scaling
    },
    pipes: {
      ...config.pipes,
      speed: config.pipes.speed * multiplier,
      gap: Math.max(config.pipes.gap * (1 - (multiplier - 1) * 0.2), 80), // Minimum gap of 80px
      width: config.pipes.width * (1 + (multiplier - 1) * 0.3),
      spawnRate: Math.max(
        config.pipes.spawnRate * (1 - (multiplier - 1) * 0.1),
        80
      ), // Minimum spawn rate
    },
  };
}

export function calculateScoreMultiplier(level: number): number {
  const difficulty = getDifficultyForLevel(level);
  return 1 + (difficulty.multiplier - 1) * 0.5; // Score bonus for higher difficulty
}

export function getNextUnlockableLevel(stats: {
  bestScore: number;
  experience: number;
  gamesPlayed: number;
}): number | null {
  for (let level = 2; level <= DIFFICULTY_PROGRESSION.length; level++) {
    if (canUnlockLevel(level, stats)) {
      return level;
    }
  }
  return null;
}
