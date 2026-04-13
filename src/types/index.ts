export type ChantMode = "voice" | "manual" | "text";

export interface UserProfile {
  id: string;
  name: string;
  photoUrl?: string;
  totalChants: number;
  currentStreak: number;
  bestStreak: number;
}

export interface MantraConfig {
  id: string;
  text: string;
  target: number;
}

export interface LeaderboardEntry {
  userId: string;
  userName: string;
  chants: number;
  rank: number;
}

export interface AnalyticsSnapshot {
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
  horizon3y: number;
  horizon5y: number;
  horizon10y: number;
  horizon50y: number;
  horizon100y: number;
}
