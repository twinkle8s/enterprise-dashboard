# 🚀 ORDER_CENTER: Enterprise Order Management Dashboard
> A secure, high-performance B2B order monitoring platform built with React, TS, and Redux Toolkit. This project focuses on demonstrating strict role-based authorization flow and modern front-end defensive testing architecture.

---

## 🛠️ Modern Tech Stack (現代化技術棧與基建)
*   **Build Tool & Runtime**: Vite (⚡ Ultra-fast HMR)
*   **Core Framework**: React 18+ & TypeScript (Strict type safety across data layers)
*   **Styling Architecture**: Tailwind CSS (Utility-first responsive design)
*   **State Management**: Redux Toolkit (RTK)
*   **Testing Suite**: Vitest (2026 modern testing framework) & React Testing Library (RTL)

---

## ✨ Implemented Core Architecture (已完成核心基建)

### 1. Unified State & Role-Based Access Control (RBAC)
*   **authSlice**: Implemented dynamic permission leveling (`Admin` / `User` / `Guest`). UI actions interactively toggle disabled/enabled states based on the active role context in real-time.
*   **dataSlice**: Manages core business KPIs including Total Orders, Unresolved Orders, and Automation Rate metrics.

### 2. Double-Layer Defensive Testing (雙重測試防禦網)
Powered by **Vitest**, verifying execution isolation across both logic and rendering bounds:
*   **Logic (Reducer) Testing**: Validates that pure function state transitions inside `dataSlice` remain 100% predictable.
*   **Component & Permission Testing**: Simulates `Admin` vs `User` roles within `AdminButton.test.tsx` to assert that privilege-restricted buttons lock or unlock correctly.

---

## 📋 Roadmap & Future Iterations (後續開發與優化藍圖)
*This system is actively evolving. The following features are prioritized in the upcoming pipeline:*

### [🏗️ Phase 1: Core Architecture & Testing Foundation] - *Completed*
- [x] Streamline Vite + React + TS + Tailwind development ecosystem.
- [x] Set up centralized state slices (`authSlice`, `dataSlice`) via Redux Toolkit.
- [x] Configure Vitest + RTL environment and pass initial unit/component tests.

### [📈 Phase 2: Data Dynamic Enrichment] - *In Progress*
- [ ] **Chart.js Dynamic Analytics**: Bind the `Real-time Order Trends` placeholder to reactive data streams managed by `dataSlice`.
- [ ] **Asynchronous API Simulation**: Integrate mock thunks to simulate network latency, triggering button `Loading...` spin indicators for 1.5 seconds with Toast alerts upon success.

### [🛡️ Phase 3: Routing & Advanced QA] - *Backlog*
- [ ] **React Router & Route Guards**: Implement client-side routing (`/overview`, `/maintenance`) and secure specific views with Admin-only navigation locks.
- [ ] **User-Event Integration Testing**: Expand `AdminButton.test.tsx` to simulate user dispatch interactions and assert downstream state shifts.
- [ ] **AI-Driven Refactoring**: Utilize Cursor/GitHub Copilot to inject optimization patterns and document telemetry logs.
