# RadhaJaap — Naam Jaap / Mantra Counting Mobile App

A modern cross-platform (Android + iOS) spiritual chanting application built with **React Native (Expo + TypeScript)**. It combines voice-based mantra detection, digital mala counting, personal analytics, gamification, and leaderboard-driven motivation.

## ✨ Highlights

- **108-bead digital mala** with custom target support (108, 1008, etc.)
- **Voice-driven chanting count** (only selected mantra is counted)
- **Manual tap counting** for mala-style interaction
- **Custom mantra management** (save multiple divine names)
- **Profile with long-term spiritual stats**
- **Analytics dashboard** (daily to 100-year projection)
- **Leaderboard + rewards + achievements**
- **Admin controls** for moderation and reward configuration
- **Streaks, reports, reminders, and milestone motivation**

---

## 🧱 Architecture (Suggested Production Setup)

### Frontend
- React Native (Expo) + TypeScript
- Stateful modules by feature (counter, dashboard, profile, leaderboard, admin)

### Backend (Production Suggestion)
- Firebase Authentication (email/mobile/social)
- Cloud Firestore (users, chants, rewards, leaderboards)
- Cloud Functions (anti-cheat checks, leaderboard rollups, rewards)
- Firebase Cloud Messaging (notifications)

### Voice Recognition
- Google Speech-to-Text API (streaming mode for real-time counting)
- Matching logic normalizes spoken text and counts only selected mantra terms

---

## 📦 Project Structure

```txt
.
├── App.tsx
├── src
│   ├── components
│   │   └── SpiritualCard.tsx
│   ├── data
│   │   └── defaultMantras.ts
│   ├── features
│   │   ├── admin
│   │   │   └── AdminPanelScreen.tsx
│   │   ├── counter
│   │   │   └── JaapCounterScreen.tsx
│   │   ├── dashboard
│   │   │   └── AnalyticsScreen.tsx
│   │   ├── leaderboard
│   │   │   └── LeaderboardScreen.tsx
│   │   └── profile
│   │       └── ProfileScreen.tsx
│   ├── services
│   │   ├── localStore.ts
│   │   └── voiceMatcher.ts
│   ├── theme
│   │   └── spiritualTheme.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── mala.ts
└── package.json
```

---

## 🚀 Getting Started

```bash
npm install
npm run start
```

Then open using:
- Android emulator/device
- iOS simulator/device

---

## ✅ Feature Coverage Matrix

| Feature | Status in this scaffold |
|---|---|
| Digital mala (108) | Implemented (visual + progress) |
| Custom target count | Implemented |
| Voice recognition matching logic | Implemented (service layer) |
| Manual tap counting | Implemented |
| Custom mantra input + save | Implemented (local state + persistence layer hooks) |
| User profile with stats | Implemented (UI + mock data pattern) |
| Analytics dashboard | Implemented (daily, weekly, monthly, yearly, long horizon cards) |
| Leaderboard (top 10/50/100) | Implemented (switchable UI with mocked data) |
| Reward system | Implemented (badges + reward cards UI) |
| Reports, streaks, milestones | Implemented (UI + summary cards) |
| Notifications reminders | Added as product-ready plan + content scaffolding |
| Admin panel | Implemented (reward control, leaderboard moderation UI) |
| Anti-cheat strategy | Defined in architecture and service-level constraints |

---

## 🔐 Anti-Cheat & Integrity Strategy

1. Rate-limit chant increments from a single device/session.
2. Validate voice-confidence score before counting a spoken mantra.
3. Server-side increment authority (Cloud Function) in production.
4. Device fingerprint + anomaly detection for sudden unrealistic jumps.
5. Leaderboard score lock after period close.

---

## 🌍 Optional Extensions

- Multi-language mantras (Hindi, English, Sanskrit transliterations)
- Satsang / group chanting rooms
- Audio mantra loop player with ambient background themes
- Wearables integration for mala tap counting

---

## Note

This repository currently provides a **working product scaffold and UI implementation** with local logic and mock data for key experiences. Wire the service interfaces to Firebase + Speech-to-Text for production rollout.
