"use client";

import { useState } from "react";
import { useGameConfig } from "@/contexts/GameConfigContext";
import { Button } from "./Button";
import { difficultyLevels, themePresets } from "@/config/gameConfig";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const {
    config,
    updateConfig,
    setDifficulty,
    setTheme,
    resetToDefault,
    exportConfig,
    importConfig,
  } = useGameConfig();
  const [activeTab, setActiveTab] = useState<
    "physics" | "visual" | "sound" | "ui"
  >("physics");
  const [importText, setImportText] = useState("");

  if (!isOpen) return null;

  const handleImport = () => {
    if (importText.trim()) {
      importConfig(importText);
      setImportText("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Game Settings</h2>
          <Button onClick={onClose} variant="secondary" size="sm">
            ✕
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6">
          {[
            { id: "physics", label: "Physics" },
            { id: "visual", label: "Visual" },
            { id: "sound", label: "Sound" },
            { id: "ui", label: "UI" },
          ].map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              variant={activeTab === tab.id ? "primary" : "secondary"}
              size="sm"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Physics Settings */}
        {activeTab === "physics" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Physics Settings</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gravity
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.1"
                  value={config.physics.gravity}
                  onChange={(e) =>
                    updateConfig({
                      physics: {
                        ...config.physics,
                        gravity: parseFloat(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {config.physics.gravity}
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Jump Force
                </label>
                <input
                  type="range"
                  min="-12"
                  max="-2"
                  step="0.5"
                  value={config.physics.jumpForce}
                  onChange={(e) =>
                    updateConfig({
                      physics: {
                        ...config.physics,
                        jumpForce: parseFloat(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {config.physics.jumpForce}
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Bird Size
                </label>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={config.physics.birdSize}
                  onChange={(e) =>
                    updateConfig({
                      physics: {
                        ...config.physics,
                        birdSize: parseInt(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {config.physics.birdSize}px
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Pipe Speed
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="4.0"
                  step="0.1"
                  value={config.pipes.speed}
                  onChange={(e) =>
                    updateConfig({
                      pipes: {
                        ...config.pipes,
                        speed: parseFloat(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {config.pipes.speed}
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Pipe Gap
                </label>
                <input
                  type="range"
                  min="100"
                  max="250"
                  step="10"
                  value={config.pipes.gap}
                  onChange={(e) =>
                    updateConfig({
                      pipes: { ...config.pipes, gap: parseInt(e.target.value) },
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {config.pipes.gap}px
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Pipe Width
                </label>
                <input
                  type="range"
                  min="30"
                  max="80"
                  step="5"
                  value={config.pipes.width}
                  onChange={(e) =>
                    updateConfig({
                      pipes: {
                        ...config.pipes,
                        width: parseInt(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {config.pipes.width}px
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2">Difficulty Presets</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(difficultyLevels).map(([key, level]) => (
                  <Button
                    key={key}
                    onClick={() => setDifficulty(key)}
                    variant="secondary"
                    size="sm"
                    className="text-left"
                  >
                    <div>
                      <div className="font-medium">
                        {level.difficulty?.name}
                      </div>
                      <div className="text-xs opacity-75">
                        {level.difficulty?.description}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Visual Settings */}
        {activeTab === "visual" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visual Settings</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bird Color
                </label>
                <input
                  type="color"
                  value={config.visual.birdColor}
                  onChange={(e) =>
                    updateConfig({
                      visual: { ...config.visual, birdColor: e.target.value },
                    })
                  }
                  className="w-full h-10 rounded border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Pipe Color
                </label>
                <input
                  type="color"
                  value={config.visual.pipeColor}
                  onChange={(e) =>
                    updateConfig({
                      visual: { ...config.visual, pipeColor: e.target.value },
                    })
                  }
                  className="w-full h-10 rounded border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Sky Start
                </label>
                <input
                  type="color"
                  value={config.visual.skyGradientStart}
                  onChange={(e) =>
                    updateConfig({
                      visual: {
                        ...config.visual,
                        skyGradientStart: e.target.value,
                      },
                    })
                  }
                  className="w-full h-10 rounded border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Sky End
                </label>
                <input
                  type="color"
                  value={config.visual.skyGradientEnd}
                  onChange={(e) =>
                    updateConfig({
                      visual: {
                        ...config.visual,
                        skyGradientEnd: e.target.value,
                      },
                    })
                  }
                  className="w-full h-10 rounded border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Ground Color
                </label>
                <input
                  type="color"
                  value={config.visual.groundColor}
                  onChange={(e) =>
                    updateConfig({
                      visual: { ...config.visual, groundColor: e.target.value },
                    })
                  }
                  className="w-full h-10 rounded border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Cloud Opacity
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={config.visual.cloudOpacity}
                  onChange={(e) =>
                    updateConfig({
                      visual: {
                        ...config.visual,
                        cloudOpacity: parseFloat(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {config.visual.cloudOpacity}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2">Theme Presets</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(themePresets).map(([key, theme]) => (
                  <Button
                    key={key}
                    onClick={() => setTheme(key)}
                    variant="secondary"
                    size="sm"
                    className="capitalize"
                  >
                    {key}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sound Settings */}
        {activeTab === "sound" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sound Settings</h3>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="soundEnabled"
                checked={config.sound.enabled}
                onChange={(e) =>
                  updateConfig({
                    sound: { ...config.sound, enabled: e.target.checked },
                  })
                }
                className="rounded"
              />
              <label htmlFor="soundEnabled" className="text-sm font-medium">
                Enable Sound
              </label>
            </div>

            {config.sound.enabled && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Volume
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={config.sound.volume}
                    onChange={(e) =>
                      updateConfig({
                        sound: {
                          ...config.sound,
                          volume: parseFloat(e.target.value),
                        },
                      })
                    }
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">
                    {Math.round(config.sound.volume * 100)}%
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Jump Frequency
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="800"
                    step="50"
                    value={config.sound.jumpFrequency}
                    onChange={(e) =>
                      updateConfig({
                        sound: {
                          ...config.sound,
                          jumpFrequency: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">
                    {config.sound.jumpFrequency}Hz
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Score Frequency
                  </label>
                  <input
                    type="range"
                    min="400"
                    max="1200"
                    step="50"
                    value={config.sound.scoreFrequency}
                    onChange={(e) =>
                      updateConfig({
                        sound: {
                          ...config.sound,
                          scoreFrequency: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">
                    {config.sound.scoreFrequency}Hz
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Game Over Frequency
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="400"
                    step="25"
                    value={config.sound.gameOverFrequency}
                    onChange={(e) =>
                      updateConfig({
                        sound: {
                          ...config.sound,
                          gameOverFrequency: parseInt(e.target.value),
                        },
                      })
                    }
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">
                    {config.sound.gameOverFrequency}Hz
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* UI Settings */}
        {activeTab === "ui" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">UI Settings</h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="showInstructions"
                  checked={config.ui.showInstructions}
                  onChange={(e) =>
                    updateConfig({
                      ui: { ...config.ui, showInstructions: e.target.checked },
                    })
                  }
                  className="rounded"
                />
                <label
                  htmlFor="showInstructions"
                  className="text-sm font-medium"
                >
                  Show Instructions
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="showScore"
                  checked={config.ui.showScore}
                  onChange={(e) =>
                    updateConfig({
                      ui: { ...config.ui, showScore: e.target.checked },
                    })
                  }
                  className="rounded"
                />
                <label htmlFor="showScore" className="text-sm font-medium">
                  Show Score
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="showHighScore"
                  checked={config.ui.showHighScore}
                  onChange={(e) =>
                    updateConfig({
                      ui: { ...config.ui, showHighScore: e.target.checked },
                    })
                  }
                  className="rounded"
                />
                <label htmlFor="showHighScore" className="text-sm font-medium">
                  Show High Score
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Text Color
                </label>
                <input
                  type="color"
                  value={config.ui.colors.text}
                  onChange={(e) =>
                    updateConfig({
                      ui: {
                        ...config.ui,
                        colors: { ...config.ui.colors, text: e.target.value },
                      },
                    })
                  }
                  className="w-full h-10 rounded border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Title Color
                </label>
                <input
                  type="color"
                  value={config.ui.colors.title}
                  onChange={(e) =>
                    updateConfig({
                      ui: {
                        ...config.ui,
                        colors: { ...config.ui.colors, title: e.target.value },
                      },
                    })
                  }
                  className="w-full h-10 rounded border"
                />
              </div>
            </div>
          </div>
        )}

        {/* Import/Export */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4">
            Import/Export Configuration
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Export Configuration
              </label>
              <div className="flex space-x-2">
                <textarea
                  value={exportConfig()}
                  readOnly
                  className="flex-1 p-2 border rounded text-xs font-mono"
                  rows={6}
                />
                <Button
                  onClick={() => navigator.clipboard.writeText(exportConfig())}
                  variant="secondary"
                  size="sm"
                >
                  Copy
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Import Configuration
              </label>
              <div className="flex space-x-2">
                <textarea
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  placeholder="Paste configuration JSON here..."
                  className="flex-1 p-2 border rounded text-xs font-mono"
                  rows={4}
                />
                <Button
                  onClick={handleImport}
                  variant="primary"
                  size="sm"
                  disabled={!importText.trim()}
                >
                  Import
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 pt-4 border-t">
          <Button onClick={resetToDefault} variant="secondary">
            Reset to Default
          </Button>
          <Button onClick={onClose} variant="primary">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
