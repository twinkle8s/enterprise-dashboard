import { forceExecuteOrder } from "../../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  ExclamationCircleIcon,
  LockClosedIcon,
} from "../../../components/common/Icons";

export default function AutoConfirmButton() {
  const currentRole = useAppSelector((state) => state.auth.currentRole);
  const isExecuting = useAppSelector((state) => state.data.isExecuting);

  const dispatch = useAppDispatch();

  return (
    <>
      {currentRole === "admin" ? (
        <button
          disabled={isExecuting}
          onClick={() => dispatch(forceExecuteOrder())}
          className={`flex items-center gap-2 w-full ${isExecuting ? "bg-red-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"} text-white font-medium text-sm py-2.5 px-4 rounded-lg shadow-sm shadow-red-100 transition-all`}
        >
          <div className="flex-none size-5">
            {isExecuting ? (
              <span className="animate-spin inline-block border-2 border-white border-t-transparent rounded-full w-4 h-4" />
            ) : (
              <ExclamationCircleIcon />
            )}
          </div>
          {isExecuting
            ? "Executing Auto Confirmation..."
            : "Force Execute Auto Confirmation (Admin Only)"}
        </button>
      ) : (
        <button
          disabled
          className="flex items-center gap-2 w-full bg-slate-100 text-slate-400 font-medium text-sm py-2.5 px-4 rounded-lg cursor-not-allowed border border-slate-200 transition-all"
        >
          <div className="flex-none size-5">
            <LockClosedIcon />
          </div>
          Action Locked (Insufficient Permissions)
        </button>
      )}
    </>
  );
}
