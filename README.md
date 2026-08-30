# ORDER_CENTER: Enterprise Order Management Dashboard

A secure, high-performance B2B order monitoring platform built with React, TS, and Redux Toolkit. This project focuses on demonstrating strict role-based authorization flow, enterprise-grade state architecture, and modern front-end defensive testing.

## Live Demos (雙平台託管展演)

- **Vercel (Primary)**: [https://enterprise-dashboard-gamma-ten.vercel.app](https://enterprise-dashboard-gamma-ten.vercel.app)
- **GitHub Pages (CD Automated)**: [https://twinkle8s.github.io/enterprise-dashboard/](https://twinkle8s.github.io/enterprise-dashboard/)

## Modern Tech Stack (現代化技術棧與基建)

- **Build Tool & Runtime**: Vite (Ultra-fast HMR)
- **Core Framework**: React 18+ & TypeScript (Strict type safety across data layers)
- **Routing & RBAC**: React Router v6 & Protected Route Guards
- **Styling Architecture**: Tailwind CSS (Utility-first responsive design)
- **State Management**: Redux Toolkit (RTK)
- **Testing Suite**: Vitest (Modern testing framework) & React Testing Library (RTL)
- **CI/CD & DevOps**: GitHub Actions, GitHub Pages, Vercel

## Implemented Core Architecture (已完成核心基建)

1. **Unified State & Role-Based Access Control (RBAC)**
   - **authSlice**: Implemented dynamic permission leveling (`Admin` / `User` / `Guest`). UI actions interactively toggle disabled/enabled states based on the active role context in real-time.
   - **ProtectedRoute Guard**: Higher-Order Component wrapper restricting privileged paths (e.g., `/privilege-control`) to `Admin` users with automatic redirect fallback.
   - **dataSlice**: Manages core business KPIs including Total Orders, Unresolved Orders, Automation Rate metrics, and asynchronous execution status.

2. **Asynchronous Business Logic & Typed Hooks**
   - **AsyncThunk Integration**: Encapsulated order auto-confirmation logic within `forceExecuteOrder` Thunk to handle asynchronous lifecycle states (`pending` / `fulfilled` / `rejected`).
   - **Custom Typed Hooks**: Standardized state dispatch and selectors using `useAppDispatch` and `useAppSelector` for strict Redux type inference.

3. **Automated CI/CD Pipelines & Cross-Platform Deployment**
   - **GitHub Actions (CI)**: Automated quality checks on PR/Push including TypeScript (`tsc`), ESLint, and Vitest suite execution.
   - **Dual CD Delivery**: Configured automated GitHub Pages build artifacts alongside Vercel deployments. Dynamically resolves SPA base pathing (`base` & `basename`) between root and subpath environments.

4. **Double-Layer Defensive Testing**
   - Powered by **Vitest**, verifying execution isolation across both logic and rendering bounds:
   - **Logic (Reducer) Testing**: Validates that pure function state transitions inside `dataSlice` remain 100% predictable.
   - **Component & Permission Testing**: Simulates `Admin` vs `User` roles within test suites to assert that privilege-restricted components lock or unlock correctly.

## Roadmap & Future Iterations (後續開發與優化藍圖)

_This system is actively evolving. The following features are prioritized in the upcoming pipeline:_

**[Phase 1: Core Architecture & Testing Foundation] - _Completed_**

- [x] Streamline Vite + React + TS + Tailwind development ecosystem.
- [x] Set up centralized state slices (`authSlice`, `dataSlice`) via Redux Toolkit.
- [x] Configure Vitest + RTL environment and pass initial unit/component tests.

**[Phase 2: Data Dynamic Enrichment] - _Completed_**

- [x] **Chart.js Dynamic Analytics**: Bind the `Real-time Order Trends` placeholder to reactive data streams managed by `dataSlice`.
- [x] **Asynchronous API Simulation**: Integrate mock thunks to simulate network latency, triggering button `Loading...` spin indicators with Toast alerts upon success.

**[Phase 3: Routing & Advanced QA] - _In Progress_**

- [x] **React Router & Route Guards**: Implemented client-side routing (`/overview`, `/confirmation`, `/maintenance`, `/privilege-control`) with role-based `ProtectedRoute` guards and dynamic `Sidebar` links.
- [x] **Subpath & SPA Routing Resolution**: Configured Vite `base` and React Router `basename` dynamically to handle cross-platform hosting environments smoothly.
- [ ] **User-Event Integration Testing**: Expand test coverage using `@testing-library/user-event` to simulate async button dispatches, spinner visibility, and state updates.

**[Phase 4: CI/CD Pipeline & Form Engineering] - _Upcoming_**

- [x] **CI/CD Automation Pipeline**: Configured GitHub Actions to automatically run Vitest suites, TypeScript type checks, and ESLint on PRs, deploying builds to both GitHub Pages and Vercel.
- [ ] **Complex Form Management (React Hook Form + Zod)**: Implement high-performance order filter forms and batch-update interfaces with schema validation to eliminate unnecessary re-renders.
- [ ] **High-Concurrency & Edge-Case Resilience**: Implement debouncing/throttling for dispatch triggers, optimistic UI updates, and race-condition defensive handling.
- [ ] **RTK Query Mock Server (MSW)**: Refactor client-side state mock into full RESTful API mocking using Mock Service Worker (MSW) and RTK Query caching.

## Engineering Highlights

Leveraged AI-assisted workflows to accelerate TypeScript pattern adoption, error boundary validation, and redundant re-render optimization.
