"use client";

import { useState, useCallback, useEffect } from "react";
import { GameSession, ReplayAction } from "@/types/user";
import { useUser } from "@/contexts/UserContext";

export function useGameSession() {
  const { startSession, endSession, user } = useUser();
  const [currentSession, setCurrentSession] = useState<GameSession | null>(
    null
  );
  const [replayActions, setReplayActions] = useState<ReplayAction[]>([]);
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);

  const startGameSession = useCallback(
    (competitionId?: string) => {
      if (!user) return null;

      const sessionId = startSession(competitionId);
      const startTime = new Date();

      setSessionStartTime(startTime);
      setReplayActions([]);

      const session: GameSession = {
        id: sessionId,
        userId: user.id,
        startTime,
        score: 0,
        duration: 0,
        difficulty: "normal",
        isCompleted: false,
        isCompetition: !!competitionId,
        competitionId,
      };

      setCurrentSession(session);
      return sessionId;
    },
    [user, startSession]
  );

  const endGameSession = useCallback(
    async (score: number) => {
      if (!currentSession || !sessionStartTime) return;

      const duration = Math.floor(
        (Date.now() - sessionStartTime.getTime()) / 1000
      );

      const completedSession: GameSession = {
        ...currentSession,
        endTime: new Date(),
        score,
        duration,
        isCompleted: true,
        replayData: {
          actions: replayActions,
          timestamps: replayActions.map((action) => action.timestamp),
          config: {}, // Add game config here
        },
      };

      await endSession(currentSession.id, score);
      setCurrentSession(null);
      setSessionStartTime(null);
      setReplayActions([]);

      return completedSession;
    },
    [currentSession, sessionStartTime, replayActions, endSession]
  );

  const addReplayAction = useCallback(
    (action: ReplayAction) => {
      if (!sessionStartTime) return;

      const timestamp = Date.now() - sessionStartTime.getTime();
      const replayAction: ReplayAction = {
        ...action,
        timestamp,
      };

      setReplayActions((prev) => [...prev, replayAction]);
    },
    [sessionStartTime]
  );

  const pauseSession = useCallback(() => {
    // Handle session pause logic
    addReplayAction({ type: "pause", timestamp: 0 });
  }, [addReplayAction]);

  const resumeSession = useCallback(() => {
    // Handle session resume logic
    addReplayAction({ type: "resume", timestamp: 0 });
  }, [addReplayAction]);

  const updateScore = useCallback(
    (score: number) => {
      if (!currentSession) return;

      setCurrentSession((prev) => (prev ? { ...prev, score } : null));
      addReplayAction({ type: "score", timestamp: 0, data: { score } });
    },
    [currentSession, addReplayAction]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (currentSession && !currentSession.isCompleted) {
        endGameSession(currentSession.score);
      }
    };
  }, [currentSession, endGameSession]);

  return {
    currentSession,
    replayActions,
    startGameSession,
    endGameSession,
    addReplayAction,
    pauseSession,
    resumeSession,
    updateScore,
  };
}
