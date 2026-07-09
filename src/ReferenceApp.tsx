import { useState } from "react";

export default function ReferenceApp() {
  // 建立一個暫時的權限狀態，方便我們晚點測試畫面元件切換
  const [currentRole, setCurrentRole] = useState<"admin" | "user" | "guest">(
    "admin",
  );

  return (
    <div className="flex min-h-screen w-full bg-slate-50 text-slate-800 font-sans">
      {/* 🧭 左側側邊欄 Sidebar */}
      <aside className="w-64 bg-slate-950 text-white flex flex-col justify-between p-6 shrink-0 shadow-xl">
        <div>
          {/* 企業 LOGO 區塊 */}
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-lg text-white">
              Ω
            </div>
            <span className="text-lg font-bold tracking-wider bg-linear-to-r from-blue-400 to-indigo-200 bg-clip-text text-transparent">
              FAB_CENTER
            </span>
          </div>

          {/* 導覽選單 */}
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600 text-white font-medium transition-all"
            >
              📊 數據看板中心
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-all"
            >
              ⚙️ 生產線自動化配置
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-all"
            >
              🛡️ 系統權限稽核
            </a>
          </nav>
        </div>

        {/* 底部使用者資訊與權限快速切換（切換大腦） */}
        <div className="border-t border-slate-800 pt-4 space-y-3">
          <div className="flex items-center gap-3 px-2">
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

          {/* 模擬權限切換下拉選單 */}
          <div className="px-2">
            <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
              模擬權限切換
            </label>
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value as never)}
              className="w-full bg-slate-900 border border-slate-800 text-xs rounded-md px-2.5 py-1.5 text-slate-300 focus:outline-none focus:border-blue-500 transition-all"
            >
              <option value="admin">超級管理員 (Admin)</option>
              <option value="user">一般工程師 (User)</option>
              <option value="guest">外部訪客 (Guest)</option>
            </select>
          </div>
        </div>
      </aside>

      {/* 💻 右側主要內容區 Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* 頂部導覽列 Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            自動化生產線排程與設備稼動率看板
          </h1>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Fab 連線正常
            </span>
          </div>
        </header>

        {/* 主要數據內容區 Container */}
        <div className="p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* 📊 第一排：指標卡區塊 (Cards Grid) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                今日機台即時 Wafers 產出速度
              </p>
              <p className="text-3xl font-bold text-slate-900 mt-2">
                98.2{" "}
                <span className="text-sm font-normal text-slate-400">
                  pcs/hr
                </span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                當前自動化排程派工單
              </p>
              <p className="text-3xl font-bold text-slate-900 mt-2">
                42{" "}
                <span className="text-sm font-normal text-slate-400">個案</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                MR 自動化測試通過率
              </p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">99.4%</p>
            </div>
          </section>

          {/* 📈 第二排：核心圖表與控制區 */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 左側大圖表區占 2 欄 */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between min-h-75">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900">
                  即時產能波動數據趨勢
                </h3>
                <span className="text-xs text-slate-400">每 2 秒自動重整</span>
              </div>
              {/* 這邊先用一個漂亮的漸層區塊卡位，下一階段接 Chart.js */}
              <div className="flex-1 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm font-medium">
                [ Chart.js 即時波動圖表預留區塊 ]
              </div>
            </div>

            {/* 右側：機密操作控制面板（權限控制核心實戰區） */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  💡 進階生產調度控制
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  本區塊包含敏感製程參數調整，操作將被全額審查紀錄。
                </p>

                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm rounded bg-slate-50 border border-slate-200 font-medium text-slate-700 hover:bg-slate-100 transition-all">
                    ⚡ 觸發全自動化 MR 測試
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm rounded bg-slate-50 border border-slate-200 font-medium text-slate-700 hover:bg-slate-100 transition-all">
                    🔄 重新同步 3DFabric 派工順序
                  </button>
                </div>
              </div>

              {/* 🛡️ 權限控制實作的關鍵程式碼 */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                {currentRole === "admin" ? (
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium text-sm py-2.5 px-4 rounded-lg shadow-sm shadow-red-100 transition-all">
                    🚨 終止並清除所有異常中斷數據 (需 Admin 權限)
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-slate-100 text-slate-400 font-medium text-sm py-2.5 px-4 rounded-lg cursor-not-allowed border border-slate-200 transition-all"
                  >
                    🔒 終止資料按鈕已鎖定 (訪客/一般用戶無權限)
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
