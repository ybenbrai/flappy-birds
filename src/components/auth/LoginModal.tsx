"use client";

import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/Button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login, isLoading } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    try {
      await login(username.trim(), email.trim() || undefined);
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {isRegistering ? "Create Account" : "Welcome Back"}
          </h2>
          <Button onClick={onClose} variant="secondary" size="sm">
            ✕
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username *</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {isRegistering && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <div className="flex space-x-2">
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              disabled={isLoading || !username.trim()}
            >
              {isLoading
                ? "Loading..."
                : isRegistering
                ? "Create Account"
                : "Play Now"}
            </Button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              {isRegistering
                ? "Already have an account? Sign in"
                : "New player? Create an account"}
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold mb-2">What you get:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Track your progress and statistics</li>
            <li>• Unlock new difficulty levels</li>
            <li>• Compete in tournaments</li>
            <li>• Save your best replays</li>
            <li>• Earn achievements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
