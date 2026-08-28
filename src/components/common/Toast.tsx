import { useEffect } from "react";
import { clearExecutionMessage } from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function Toast() {
  const message = useAppSelector((state) => state.data.executionStatusMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message) {
      // Auto-dismiss after 3 seconds
      const timer = setTimeout(() => {
        dispatch(clearExecutionMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-emerald-600 text-white px-4 py-3 rounded-lg shadow-xl animate-bounce">
      <span>{message}</span>
      <button
        onClick={() => dispatch(clearExecutionMessage())}
        className="text-white hover:text-slate-200 font-bold"
      >
        ✕
      </button>
    </div>
  );
}
