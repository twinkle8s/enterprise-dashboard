import { useState } from "react";
import {
  Cog8ToothIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  HomeIcon,
} from "./components/Icons";

export default function MyDashboard() {
  const [currentRole, setCurrentRole] = useState<"admin" | "user" | "guest">(
    "admin",
  );

  return (
    <div className="flex min-h-screen w-full bg-slate-50 text-slate-800 font-sans">
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-950 text-white flex flex-col justify-between p-6">
        <div>
          {/* Application Logo & Name */}
          <div className="flex items-center-safe gap-3 mb-8">
            <div className="h-8 w-8 bg-blue-600 rounded-lg p-1.5">
              <GlobeAltIcon />
            </div>
            <div className="text-lg font-bold tracking-wider bg-linear-to-r from-blue-400 to-indigo-200 bg-clip-text text-transparent">
              ORDER_CENTER
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center-safe gap-2 px-3 py-2.5 rounded-lg bg-blue-600 text-white font-medium transition-all"
            >
              <div className="size-5">
                <HomeIcon />
              </div>
              Overview
            </a>
            <a
              href="#"
              className="flex items-center-safe gap-2 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-all"
            >
              <div className="size-5">
                <DocumentCheckIcon />
              </div>
              Order Confirmation
            </a>
            <a
              href="#"
              className="flex items-center-safe gap-2 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-all"
            >
              <div className="size-5">
                <Cog8ToothIcon />
              </div>
              Order Maintenance
            </a>
          </nav>
        </div>

        {/* Bottom User Info & Role Switcher */}
        <div className="border-t border-slate-800 pt-4 space-y-3">
          <div className="flex items-center-safe gap-3 px-2">
            <div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-sm font-semibold border border-slate-600">
              YC
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">YiChun Tseng</p>
              <p className="text-xs text-slate-400 capitalize">
                Role: {currentRole}
              </p>
            </div>
          </div>
          <div className="px-2">
            <label className="block text-[10px] uppercase text-slate-500 font-bold mb-1">
              SIMULATE ROLE
            </label>
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value as never)}
              className="w-full bg-slate-900 border border-slate-800 text-xs rounded-md px-2.5 py-1.5 text-slate-300 focus:outline-none focus:border-blue-500 transition-all"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Right Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-xl font-bold text-slate-900">
            Order Overview Dashboard
          </h1>
          <div className="flex items-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Connected
            </span>
          </div>
        </header>

        {/* Container */}
        <div className="p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* Summary Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Today's Total Orders
              </p>
              <p className="text-3xl font-bold text-slate-900 mt-2">
                421{" "}
                <span className="text-sm font-normal text-slate-400">
                  orders
                </span>
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Unresolved Orders
              </p>
              <p className="text-3xl font-bold text-amber-600 mt-2">
                3{" "}
                <span className="text-sm font-normal text-slate-400">
                  cases
                </span>
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Order Automation Rate
              </p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">94.2%</p>
            </div>
          </section>

          {/* Core Chart and Controls */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between min-h-75">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900">
                  Real-time Order Trends
                </h3>
                <span className="text-xs text-slate-400">
                  Auto-refreshing every 2s
                </span>
              </div>
              <div className="flex-1 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm font-medium">
                [ Chart.js Order Analytics Placeholder ]
              </div>
            </div>

            {/* Control Panel */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  💡 Advanced Order Dispatch Control
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  This section contains sensitive order parameter adjustments.
                  All actions will be strictly logged and audited.
                </p>

                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm rounded bg-slate-50 border border-slate-200 font-medium text-slate-700 hover:bg-slate-100 transition-all">
                    🔍 Review Unresolved Orders
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm rounded bg-slate-50 border border-slate-200 font-medium text-slate-700 hover:bg-slate-100 transition-all">
                    🔄 Resume Order Confirmation
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                {currentRole === "admin" ? (
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium text-sm py-2.5 px-4 rounded-lg shadow-sm shadow-red-100 transition-all">
                    🚨 Force Execute Auto Confirmation (Admin Only)
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-slate-100 text-slate-400 font-medium text-sm py-2.5 px-4 rounded-lg cursor-not-allowed border border-slate-200 transition-all"
                  >
                    🔒 Action Locked (Insufficient Permissions)
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
