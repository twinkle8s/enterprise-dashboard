import { useState } from "react";
import ReferenceApp from "./ReferenceApp"; // Reference solution page
import MyDashboard from "./MyDashboard"; // My practice dashboard page

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

      {mode === "practice" ? <MyDashboard /> : <ReferenceApp />}
    </div>
  );
}

export default App;
