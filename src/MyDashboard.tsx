import {
  Cog8ToothIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  HomeIcon,
} from "./components/Icons";

export default function MyDashboard() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50 text-slate-800 font-sans">
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-950 text-white p-6">
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
      </aside>
      {/* Right Main Content */}
      <main className="flex-1">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Order Overview Dashboard
          </h1>
          <div className="flex items-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Connected
            </span>
          </div>
        </header>
      </main>
    </div>
  );
}
