import { useAppSelector } from "../../../store/hooks";

export default function SummaryCards() {
  const data = useAppSelector((state) => state.data);

  return (
    <>
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Today's Total Orders
        </p>
        <p className="text-3xl font-bold text-slate-900 mt-2">
          {data.totalOrders}
          <span className="text-sm font-normal text-slate-400">orders</span>
        </p>
      </div>
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Unresolved Orders</p>
        <p className="text-3xl font-bold text-amber-600 mt-2">
          {data.unresolvedOrders}
          <span className="text-sm font-normal text-slate-400">cases</span>
        </p>
      </div>
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Order Automation Rate
        </p>
        <p className="text-3xl font-bold text-emerald-600 mt-2">
          {data.automationRate.toFixed(1)}%
        </p>
      </div>
    </>
  );
}
