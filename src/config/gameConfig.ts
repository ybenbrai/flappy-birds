export interface GameConfig {
  // Physics Settings
  physics: {
    gravity: number;
    jumpForce: number;
    birdSize: number;
    birdRotationMultiplier: number;
  };

  // Pipe Settings
  pipes: {
    speed: number;
    gap: number;
    width: number;
    spawnRate: number;
    minHeight: number;
    maxHeight: number;
  };

  // Game Dimensions
  dimensions: {
    width: number;
    height: number;
  };

  // Visual Settings
  visual: {
    birdColor: string;
    birdBorderColor: string;
    birdEyeColor: string;
    birdBeakColor: string;
    pipeColor: string;
    pipeBorderColor: string;
    pipeCapColor: string;
    skyGradientStart: string;
    skyGradientEnd: string;
    groundColor: string;
    groundBorderColor: string;
    cloudColor: string;
    cloudOpacity: number;
  };

  // Sound Settings
  sound: {
    enabled: boolean;
    jumpFrequency: number;
    jumpDuration: number;
    scoreFrequency: number;
    scoreDuration: number;
    gameOverFrequency: number;
    gameOverDuration: number;
    volume: number;
  };

  // Difficulty Settings
  difficulty: {
    name: string;
    description: string;
    gravityMultiplier: number;
    jumpForceMultiplier: number;
    pipeSpeedMultiplier: number;
    pipeGapMultiplier: number;
  };

  // UI Settings
  ui: {
    showInstructions: boolean;
    showScore: boolean;
    showHighScore: boolean;
    fontSize: {
      title: string;
      score: string;
      instruction: string;
    };
    colors: {
      text: string;
      title: string;
      score: string;
      instruction: string;
      button: string;
      buttonHover: string;
    };
  };
}

// Default Configuration
export const defaultGameConfig: GameConfig = {
  physics: {
    gravity: 0.21,
    jumpForce: -5,
    birdSize: 30,
    birdRotationMultiplier: 3,
  },

  pipes: {
    speed: 1.5,
    gap: 180,
    width: 50,
    spawnRate: 150,
    minHeight: 100,
    maxHeight: 300,
  },

  dimensions: {
    width: 400,
    height: 600,
  },

  visual: {
    birdColor: "#fbbf24", // yellow-400
    birdBorderColor: "#f97316", // orange-500
    birdEyeColor: "#ffffff",
    birdBeakColor: "#ea580c", // orange-600
    pipeColor: "#22c55e", // green-500
    pipeBorderColor: "#16a34a", // green-600
    pipeCapColor: "#15803d", // green-700
    skyGradientStart: "#60a5fa", // sky-400
    skyGradientEnd: "#2563eb", // sky-600
    groundColor: "#22c55e", // green-500
    groundBorderColor: "#16a34a", // green-600
    cloudColor: "#ffffff",
    cloudOpacity: 0.6,
  },

  sound: {
    enabled: true,
    jumpFrequency: 400,
    jumpDuration: 0.1,
    scoreFrequency: 800,
    scoreDuration: 0.2,
    gameOverFrequency: 200,
    gameOverDuration: 0.5,
    volume: 0.3,
  },

  difficulty: {
    name: "Easy",
    description: "Relaxed gameplay with slower pipes and wider gaps",
    gravityMultiplier: 1.0,
    jumpForceMultiplier: 1.0,
    pipeSpeedMultiplier: 1.0,
    pipeGapMultiplier: 1.0,
  },

  ui: {
    showInstructions: true,
    showScore: true,
    showHighScore: true,
    fontSize: {
      title: "text-6xl",
      score: "text-2xl",
      instruction: "text-lg",
    },
    colors: {
      text: "#ffffff",
      title: "#fbbf24", // yellow-400
      score: "#ffffff",
      instruction: "#ffffff",
      button: "#3b82f6", // blue-500
      buttonHover: "#2563eb", // blue-600
    },
  },
};

// Predefined Difficulty Levels
export const difficultyLevels: Record<string, Partial<GameConfig>> = {
  easy: {
    difficulty: {
      name: "Easy",
      description: "Perfect for beginners - slow and forgiving",
      gravityMultiplier: 0.8,
      jumpForceMultiplier: 1.2,
      pipeSpeedMultiplier: 0.7,
      pipeGapMultiplier: 1.3,
    },
    pipes: {
      speed: 1.0,
      gap: 200,
      width: 40,
      spawnRate: 180,
    },
  },

  normal: {
    difficulty: {
      name: "Normal",
      description: "Balanced gameplay - the classic Flappy Bird experience",
      gravityMultiplier: 1.0,
      jumpForceMultiplier: 1.0,
      pipeSpeedMultiplier: 1.0,
      pipeGapMultiplier: 1.0,
    },
    pipes: {
      speed: 1.5,
      gap: 180,
      width: 50,
      spawnRate: 150,
    },
  },

  hard: {
    difficulty: {
      name: "Hard",
      description: "Challenging - fast pipes and tight gaps",
      gravityMultiplier: 1.2,
      jumpForceMultiplier: 0.9,
      pipeSpeedMultiplier: 1.5,
      pipeGapMultiplier: 0.8,
    },
    pipes: {
      speed: 2.2,
      gap: 140,
      width: 60,
      spawnRate: 120,
    },
  },

  extreme: {
    difficulty: {
      name: "Extreme",
      description: "Insane difficulty - only for the most skilled players",
      gravityMultiplier: 1.5,
      jumpForceMultiplier: 0.8,
      pipeSpeedMultiplier: 2.0,
      pipeGapMultiplier: 0.6,
    },
    pipes: {
      speed: 3.0,
      gap: 120,
      width: 70,
      spawnRate: 100,
    },
  },
};

// Theme Presets
export const themePresets: Record<string, Partial<GameConfig>> = {
  classic: {
    visual: {
      birdColor: "#fbbf24",
      birdBorderColor: "#f97316",
      birdEyeColor: "#ffffff",
      birdBeakColor: "#ea580c",
      pipeColor: "#22c55e",
      pipeBorderColor: "#16a34a",
      pipeCapColor: "#15803d",
      skyGradientStart: "#60a5fa",
      skyGradientEnd: "#2563eb",
      groundColor: "#22c55e",
      groundBorderColor: "#16a34a",
      cloudColor: "#ffffff",
      cloudOpacity: 0.6,
    },
  },

  dark: {
    visual: {
      birdColor: "#fbbf24",
      birdBorderColor: "#f97316",
      birdEyeColor: "#ffffff",
      birdBeakColor: "#ea580c",
      pipeColor: "#374151",
      pipeBorderColor: "#1f2937",
      pipeCapColor: "#111827",
      skyGradientStart: "#1f2937",
      skyGradientEnd: "#111827",
      groundColor: "#374151",
      groundBorderColor: "#1f2937",
      cloudColor: "#6b7280",
      cloudOpacity: 0.8,
    },
  },

  neon: {
    visual: {
      birdColor: "#00ff88",
      birdBorderColor: "#00cc6a",
      birdEyeColor: "#ffffff",
      birdBeakColor: "#ff0080",
      pipeColor: "#ff0080",
      pipeBorderColor: "#cc0066",
      pipeCapColor: "#99004d",
      skyGradientStart: "#000000",
      skyGradientEnd: "#1a0033",
      groundColor: "#ff0080",
      groundBorderColor: "#cc0066",
      cloudColor: "#00ff88",
      cloudOpacity: 0.7,
    },
  },

  sunset: {
    visual: {
      birdColor: "#fbbf24",
      birdBorderColor: "#f97316",
      birdEyeColor: "#ffffff",
      birdBeakColor: "#ea580c",
      pipeColor: "#f59e0b",
      pipeBorderColor: "#d97706",
      pipeCapColor: "#b45309",
      skyGradientStart: "#fbbf24",
      skyGradientEnd: "#f97316",
      groundColor: "#f59e0b",
      groundBorderColor: "#d97706",
      cloudColor: "#ffffff",
      cloudOpacity: 0.8,
    },
  },
};

// Helper function to merge configurations
export function mergeConfigs(
  base: GameConfig,
  override: Partial<GameConfig>
): GameConfig {
  return {
    ...base,
    ...override,
    physics: { ...base.physics, ...override.physics },
    pipes: { ...base.pipes, ...override.pipes },
    dimensions: { ...base.dimensions, ...override.dimensions },
    visual: { ...base.visual, ...override.visual },
    sound: { ...base.sound, ...override.sound },
    difficulty: { ...base.difficulty, ...override.difficulty },
    ui: { ...base.ui, ...override.ui },
  };
}

// Helper function to apply difficulty multipliers
export function applyDifficultyMultipliers(config: GameConfig): GameConfig {
  const { difficulty } = config;

  return {
    ...config,
    physics: {
      ...config.physics,
      gravity: config.physics.gravity * difficulty.gravityMultiplier,
      jumpForce: config.physics.jumpForce * difficulty.jumpForceMultiplier,
    },
    pipes: {
      ...config.pipes,
      speed: config.pipes.speed * difficulty.pipeSpeedMultiplier,
      gap: config.pipes.gap * difficulty.pipeGapMultiplier,
    },
  };
}
