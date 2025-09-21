"use client";

import { useCallback } from "react";
import { useGameConfig } from "@/contexts/GameConfigContext";

export function useSound() {
  const { config } = useGameConfig();

  const playJump = useCallback(() => {
    if (typeof window === "undefined" || !config.sound.enabled) return;

    const audioContext = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(
      config.sound.jumpFrequency,
      audioContext.currentTime
    );
    oscillator.frequency.exponentialRampToValueAtTime(
      config.sound.jumpFrequency * 1.5,
      audioContext.currentTime + config.sound.jumpDuration
    );

    gainNode.gain.setValueAtTime(config.sound.volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + config.sound.jumpDuration
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + config.sound.jumpDuration);
  }, [config.sound]);

  const playScore = useCallback(() => {
    if (typeof window === "undefined" || !config.sound.enabled) return;

    const audioContext = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(
      config.sound.scoreFrequency,
      audioContext.currentTime
    );
    oscillator.frequency.exponentialRampToValueAtTime(
      config.sound.scoreFrequency * 1.25,
      audioContext.currentTime + config.sound.scoreDuration
    );

    gainNode.gain.setValueAtTime(config.sound.volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + config.sound.scoreDuration
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + config.sound.scoreDuration);
  }, [config.sound]);

  const playGameOver = useCallback(() => {
    if (typeof window === "undefined" || !config.sound.enabled) return;

    const audioContext = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(
      config.sound.gameOverFrequency,
      audioContext.currentTime
    );
    oscillator.frequency.exponentialRampToValueAtTime(
      config.sound.gameOverFrequency * 0.5,
      audioContext.currentTime + config.sound.gameOverDuration
    );

    gainNode.gain.setValueAtTime(config.sound.volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + config.sound.gameOverDuration
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + config.sound.gameOverDuration);
  }, [config.sound]);

  return {
    playJump,
    playScore,
    playGameOver,
  };
}
