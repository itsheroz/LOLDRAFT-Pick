# LoL Draft Simulator

A lightweight, static web app that simulates League of Legends draft-pick flows for **Ranked** and **Tournament** modes. It emphasizes **correct pick/ban order**, **complete champion roster with icons**, and a **turn timer** with Pause/Resume/Reset. Champion data and images are loaded from Riot **Data Dragon**.

> **Scope:** Frontend only. No server/database required. Deployable as a static site (by **Vercel**).

---

## Demo

- [**LoL Draft Simulator**](https://lol-draftpick-simulator.vercel.app/)

---

## Features

- **Two Draft Modes**
  - **Ranked Draft:** Blind-ban phase followed by alternating picks.
  - **Tournament Draft:** Split phases (Ban1 → Pick1 → Ban2 → Pick2) with the correct team starting each phase.
- **Full Champion Roster**
  - Pulled from Riot **Data Dragon**, always up to date with champion names and icons.
  - Search-by-name. Role assignment is intentionally omitted (the ML model may infer it later).
- **Pick/Ban Integrity**
  - Prevent duplicate picks and bans.
  - Disable already-banned/picked champions in the grid.
- **Turn Timer**
  - 30s per turn (configurable), **Pause/Resume/Reset** controls.
  - Optional **auto-skip** when the timer runs out.
- **UX Enhancements**
  - Highlights the **current slot** (whose turn it is).
  - Event log (e.g., `Blue bans Ahri`, `Red picks Xayah`).
  - Keyboard shortcuts: **Space** (pause/resume), **Enter** (confirm/skip), **Esc** (reset).

---

## Why This Tech Stack?

- **Vite (Vanilla JS)**
  - ⚡ Fast dev server, instant HMR, modern ESM by default.
  - 🧩 Zero lock-in to a framework; perfect for a small teaching/demo project.
  - 📦 Simple static output (`dist/`)—works seamlessly with Vercel.
- **Static Hosting (Vercel)**
  - 🚀 1-click deployments from GitHub.
  - 🔁 Auto-deploy on push to `main`.
- **Riot Data Dragon**
  - ✅ No API key required; public CDN for champions and images.
  - 🔄 Easy to keep data fresh by fetching the latest **versions.json**.
- **(Optional) ESLint + Prettier**
  - 🧹 Consistent style and quick feedback for beginners and teams.

> If you later need routing, SSR, or more pages, migrating to **Next.js** is straightforward. For now, Vanilla + Vite keeps the learning curve low.

---

## Project Structure

```bash
.
├─ public/
│  └─ data/
│     └─ champion_stats_by_role_API.csv   # optional; your precomputed stats
├─ src/
│  ├─ main.js       # app entry; loads champions, sets up state & UI
│  ├─ style.css     # primary styles
│  ├─ core/         # (optional) state machine, timer, sequences
│  └─ ui/           # (optional) render helpers, components
├─ index.html
├─ package.json
└─ vite.config.js   # (optional)
