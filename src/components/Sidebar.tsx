import { setRole, type UserRole } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  Cog8ToothIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  HomeIcon,
} from "./Icons";

export default function Sidebar() {
  const currentRole = useAppSelector((state) => state.auth.currentRole);
  const dispatch = useAppDispatch();

  return (
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
            onChange={(e) => dispatch(setRole(e.target.value as UserRole))}
            className="w-full bg-slate-900 border border-slate-800 text-xs rounded-md px-2.5 py-1.5 text-slate-300 focus:outline-none focus:border-blue-500 transition-all"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
