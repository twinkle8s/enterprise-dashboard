import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ReferencePage from "./pages/reference/ReferencePage"; // Reference solution page
import OverviewPage from "./pages/overview/OverviewPage"; // My practice page
import Sidebar from "./components/layout/Sidebar";
import Toast from "./components/common/Toast";
import ConfirmationPage from "./pages/confirmation/ConfirmationPage";
import MaintenancePage from "./pages/maintenance/MaintenancePage";
import PrivilegeControlPage from "./pages/privilege-control/PrivilegeControlPage";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  // mode state to switch between practice and reference
  const [mode, setMode] = useState<"practice" | "reference">("practice");

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur border border-slate-200 p-1.5 rounded-lg shadow-md flex gap-2 text-xs font-semibold">
        <button
          onClick={() => setMode("practice")}
          className={`px-3 py-1.5 rounded-md transition-all ${mode === "practice" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
        >
          💪 My Practice
        </button>
        <button
          onClick={() => setMode("reference")}
          className={`px-3 py-1.5 rounded-md transition-all ${mode === "reference" ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}
        >
          🔍 Reference
        </button>
      </div>

      {mode === "practice" ? (
        // Main layout for my practice application
        <div className="flex min-h-screen w-full bg-slate-50 text-slate-800 font-sans">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
            <Toast />
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/maintenance" element={<MaintenancePage />} />
              <Route
                path="/privilege-control"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <PrivilegeControlPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      ) : (
        // Reference solution page
        <ReferencePage />
      )}
    </div>
  );
}

export default App;
