import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { simulateLiveUpdate } from "../../store/dataSlice";
import {
  ArrowPathRoundedSquareIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
} from "../../components/common/Icons";
import { OrderTrendChart } from "./components/OrderTrendChart";
import AutoConfirmButton from "./components/AutoConfirmButton";
import SummaryCards from "./components/SummaryCards";

export default function OverviewPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(simulateLiveUpdate(Math.random()));
    }, 2000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
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
          <SummaryCards />
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
            <OrderTrendChart />
          </div>

          {/* Control Panel */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="flex items-center-safe gap-2 font-bold text-slate-900 mb-2">
                <div className="flex-none size-5 text-amber-500">
                  <LightBulbIcon />
                </div>
                Advanced Order Dispatch Control
              </h3>

              <p className="text-xs text-slate-500 mb-4">
                This section contains sensitive order parameter adjustments. All
                actions will be strictly logged and audited.
              </p>

              <div className="space-y-2">
                <button className="flex items-center-safe gap-2 w-full text-left px-3 py-2 text-sm rounded bg-slate-50 border border-slate-200 font-medium text-slate-700 hover:bg-slate-100 transition-all">
                  <div className="flex-none size-5">
                    <MagnifyingGlassIcon />
                  </div>
                  Review Unresolved Orders
                </button>
                <button className="flex items-center-safe gap-2 w-full text-left px-3 py-2 text-sm rounded bg-slate-50 border border-slate-200 font-medium text-slate-700 hover:bg-slate-100 transition-all">
                  <div className="flex-none size-5">
                    <ArrowPathRoundedSquareIcon />
                  </div>
                  Resume Order Confirmation
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <AutoConfirmButton />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
