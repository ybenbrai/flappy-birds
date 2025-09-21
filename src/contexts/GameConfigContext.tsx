"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import {
  GameConfig,
  defaultGameConfig,
  mergeConfigs,
  applyDifficultyMultipliers,
  difficultyLevels,
  themePresets,
} from "@/config/gameConfig";

interface GameConfigContextType {
  config: GameConfig;
  updateConfig: (updates: Partial<GameConfig>) => void;
  setDifficulty: (difficulty: string) => void;
  setTheme: (theme: string) => void;
  resetToDefault: () => void;
  exportConfig: () => string;
  importConfig: (configJson: string) => void;
}

const GameConfigContext = createContext<GameConfigContextType | undefined>(
  undefined
);

export function GameConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [config, setConfig] = useState<GameConfig>(() =>
    applyDifficultyMultipliers(defaultGameConfig)
  );

  const updateConfig = useCallback((updates: Partial<GameConfig>) => {
    setConfig((prev) => {
      const newConfig = mergeConfigs(prev, updates);
      return applyDifficultyMultipliers(newConfig);
    });
  }, []);

  const setDifficulty = useCallback(
    (difficulty: string) => {
      if (difficultyLevels[difficulty]) {
        updateConfig(difficultyLevels[difficulty]);
      }
    },
    [updateConfig]
  );

  const setTheme = useCallback(
    (theme: string) => {
      if (themePresets[theme]) {
        updateConfig(themePresets[theme]);
      }
    },
    [updateConfig]
  );

  const resetToDefault = useCallback(() => {
    setConfig(applyDifficultyMultipliers(defaultGameConfig));
  }, []);

  const exportConfig = useCallback(() => {
    return JSON.stringify(config, null, 2);
  }, [config]);

  const importConfig = useCallback((configJson: string) => {
    try {
      const importedConfig = JSON.parse(configJson);
      setConfig(applyDifficultyMultipliers(importedConfig));
    } catch (error) {
      console.error("Failed to import config:", error);
    }
  }, []);

  return (
    <GameConfigContext.Provider
      value={{
        config,
        updateConfig,
        setDifficulty,
        setTheme,
        resetToDefault,
        exportConfig,
        importConfig,
      }}
    >
      {children}
    </GameConfigContext.Provider>
  );
}

export function useGameConfig() {
  const context = useContext(GameConfigContext);
  if (context === undefined) {
    throw new Error("useGameConfig must be used within a GameConfigProvider");
  }
  return context;
}
