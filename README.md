# ORDER_CENTER: Enterprise Order Management Dashboard

A secure, high-performance B2B order monitoring platform built with React, TS, and Redux Toolkit. This project focuses on demonstrating strict role-based authorization flow, enterprise-grade state architecture, and modern front-end defensive testing.

## Modern Tech Stack (現代化技術棧與基建)

- **Build Tool & Runtime**: Vite (Ultra-fast HMR)
- **Core Framework**: React 18+ & TypeScript (Strict type safety across data layers)
- **Styling Architecture**: Tailwind CSS (Utility-first responsive design)
- **State Management**: Redux Toolkit (RTK)
- **Testing Suite**: Vitest (2026 modern testing framework) & React Testing Library (RTL)

## Implemented Core Architecture (已完成核心基建)

1. **Unified State & Role-Based Access Control (RBAC)**
   - **authSlice**: Implemented dynamic permission leveling (`Admin` / `User` / `Guest`). UI actions interactively toggle disabled/enabled states based on the active role context in real-time.
   - **dataSlice**: Manages core business KPIs including Total Orders, Unresolved Orders, Automation Rate metrics, and asynchronous execution status.

2. **Asynchronous Business Logic & Typed Hooks**
   - **AsyncThunk Integration**: Encapsulated order auto-confirmation logic within `forceExecuteOrder` Thunk to handle asynchronous lifecycle states (`pending` / `fulfilled` / `rejected`).
   - **Custom Typed Hooks**: Standardized state dispatch and selectors using `useAppDispatch` and `useAppSelector` for strict Redux type inference.

3. **Double-Layer Defensive Testing**
   - Powered by **Vitest**, verifying execution isolation across both logic and rendering bounds:
   - **Logic (Reducer) Testing**: Validates that pure function state transitions inside `dataSlice` remain 100% predictable.
   - **Component & Permission Testing**: Simulates `Admin` vs `User` roles within test suites to assert that privilege-restricted components lock or unlock correctly.

## Roadmap & Future Iterations (後續開發與優化藍圖)

_This system is actively evolving. The following features are prioritized in the upcoming pipeline:_

**[Phase 1: Core Architecture & Testing Foundation] - _Completed_**

- [x] Streamline Vite + React + TS + Tailwind development ecosystem.
- [x] Set up centralized state slices (`authSlice`, `dataSlice`) via Redux Toolkit.
- [x] Configure Vitest + RTL environment and pass initial unit/component tests.

**[Phase 2: Data Dynamic Enrichment] - _In Progress_**

- [x] **Chart.js Dynamic Analytics**: Bind the `Real-time Order Trends` placeholder to reactive data streams managed by `dataSlice`.
- [x] **Asynchronous API Simulation**: Integrate mock thunks to simulate network latency, triggering button `Loading...` spin indicators for 1.5 seconds with Toast alerts upon success.

**[Phase 3: Routing & Advanced QA] - _Upcoming_**

- [ ] **React Router & Route Guards**: Implement client-side routing (`/overview`, `/confirmation`, `/maintenance`) with role-based layout wrappers.
- [ ] **User-Event Integration Testing**: Expand test coverage using `@testing-library/user-event` to simulate async button dispatches, spinner visibility, and state updates.

**[Phase 4: Enterprise E-commerce Extensions & CI/CD] - _Backlog_**

- [ ] **Complex Form Management (React Hook Form + Zod)**: Implement high-performance order filter forms and batch-update interfaces with schema validation to eliminate unnecessary re-renders.
- [ ] **High-Concurrency & Edge-Case Resilience**: Implement debouncing/throttling for dispatch triggers, optimistic UI updates, and race-condition defensive handling.
- [ ] **CI/CD Automation Pipeline**: Configure GitHub Actions to automatically run Vitest suites, TypeScript type checks, and ESLint on PRs, deploying preview builds to Vercel.
- [ ] **RTK Query Mock Server (MSW)**: Refactor client-side state mock into full RESTful API mocking using Mock Service Worker (MSW) and RTK Query caching.

## Engineering Highlights

Leveraged AI-assisted workflows to accelerate TypeScript pattern adoption, error boundary validation, and redundant re-render optimization.
