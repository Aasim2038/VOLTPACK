"use client";
import { useState } from "react";
import { 
  BarChart3, Download, Eye, DollarSign, Upload, AlertTriangle, 
  CheckCircle2, RefreshCw, Layers, Trash2, PlusCircle, Gamepad2 
} from "lucide-react";

// Mock Data for Uploader Stats
const UPLOADER_STATS = {
  totalGames: 12,
  totalDownloads: "142K",
  totalViews: "450K",
  estimatedEarnings: "$284.50",
};

const MY_UPLOADS = [
  { id: 1, title: "Elden Ring", version: "v1.12", size: "44 GB", downloads: "42K", status: "Clean", reports: 0 },
  { id: 2, title: "Alan Wake 2", version: "v1.2.1", size: "90 GB", downloads: "18K", status: "Broken Link Reported", reports: 3 },
  { id: 3, title: "Hogwarts Legacy", version: "v1.0.6", size: "76 GB", downloads: "35K", status: "Clean", reports: 0 },
];

export default function UploaderDashboard() {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' or 'upload'
  
  // Form states for new game uploads
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [version, setVersion] = useState("");
  const [downloadLinks, setDownloadLinks] = useState("");

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans antialiased max-w-screen-xl mx-auto px-4 py-8">
      
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight flex items-center gap-2">
            Uploader Core Node <span className="text-xs font-mono font-bold bg-violet-500/20 text-violet-400 border border-violet-500/30 px-2 py-0.5 rounded-full">CREATOR</span>
          </h1>
          <p className="text-xs text-white/40 mt-1">Manage repository uploads, track analytics, and monitor ad revenue flow.</p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 text-xs font-mono font-bold px-4 py-2 rounded-lg transition-all ${activeTab === "overview" ? "bg-violet-600 text-white shadow" : "text-white/40 hover:text-white/70"}`}
          >
            <BarChart3 size={14} /> Repository Overview
          </button>
          <button 
            onClick={() => setActiveTab("upload")}
            className={`flex items-center gap-2 text-xs font-mono font-bold px-4 py-2 rounded-lg transition-all ${activeTab === "upload" ? "bg-violet-600 text-white shadow" : "text-white/40 hover:text-white/70"}`}
          >
            <Upload size={14} /> Pipeline New Game
          </button>
        </div>
      </div>

      {/* ── OVERVIEW TAB ── */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Stats Analytics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Files Hosted", value: UPLOADER_STATS.totalGames, icon: Gamepad2, color: "text-violet-400" },
              { label: "Gross Downloads", value: UPLOADER_STATS.totalDownloads, icon: Download, color: "text-cyan-400" },
              { label: "Impression Views", value: UPLOADER_STATS.totalViews, icon: Eye, color: "text-emerald-400" },
              { label: "Ad Share Wallet Balance", value: UPLOADER_STATS.estimatedEarnings, icon: DollarSign, color: "text-amber-400" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#0a0a10] border border-white/5 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{stat.label}</p>
                  <p className={`text-xl font-black font-mono mt-1 ${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* Warnings & Alerts Area (Broken Links) */}
          {MY_UPLOADS.some(g => g.reports > 0) && (
            <div className="flex items-start gap-3 bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 text-rose-300">
              <AlertTriangle size={16} className="flex-shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Pipeline Disruption Warnings</h4>
                <p className="text-xs text-rose-300/70 mt-1">Downloader reports indicate missing parts or fake metadata signatures on active links. Immediate updates required to preserve revenue multiplier.</p>
              </div>
            </div>
          )}

          {/* Active Repack Files Grid Table */}
          <div className="bg-[#0a0a10] border border-white/5 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/5"><h3 className="text-xs font-mono font-bold text-white/60 uppercase tracking-widest">Active Server Manifest</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/3 border-b border-white/5 text-white/40 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-4">Game Archive</th>
                    <th className="p-4">Size</th>
                    <th className="p-4">Downloads</th>
                    <th className="p-4">Integrity Status</th>
                    <th className="p-4 text-right">Operation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MY_UPLOADS.map((game) => (
                    <tr key={game.id} className="hover:bg-white/3 transition-colors">
                      <td className="p-4"><p className="font-bold text-white text-sm">{game.title}</p><p className="text-[10px] text-white/40">{game.version}</p></td>
                      <td className="p-4 text-white/70">{game.size}</td>
                      <td className="p-4 text-cyan-400 font-bold">{game.downloads}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded text-[10px] ${game.reports > 0 ? "bg-rose-500/10 border-rose-500/20 text-rose-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"}`}>
                          {game.reports > 0 ? `Flagged (${game.reports} reports)` : "Functional"}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-white/40 hover:text-violet-400 p-1.5 rounded transition-colors mr-2"><RefreshCw size={13} /></button>
                        <button className="text-white/40 hover:text-rose-400 p-1.5 rounded transition-colors"><Trash2 size={13} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── UPLOAD FORM TAB (FULLY EXTENDED) ── */}
{activeTab === "upload" && (
  <div className="max-w-4xl bg-[#0a0a10] border border-white/5 rounded-2xl p-6 shadow-xl">
    <h3 className="text-sm font-mono font-bold text-violet-400 uppercase tracking-widest mb-6 flex items-center gap-2">
      <PlusCircle size={16} /> Inject Metadata Pipeline
    </h3>
    
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      
      {/* SECTION 1: CORE METADATA */}
      <div className="space-y-4">
        <h4 className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-wider border-b border-white/5 pb-1">1. Core Info Manifest</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Game Title Signature</label>
            <input type="text" placeholder="e.g., Cyberpunk 2077" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Build Release Version</label>
            <input type="text" placeholder="e.g., v2.12 + Phantom Liberty DLC" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Archive Size</label>
            <input type="text" placeholder="e.g., 62 GB" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Game Poster/Image URL</label>
            <input type="text" placeholder="https://unsplash.com/... or image link" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Official Steam Store Link</label>
            <input type="text" placeholder="https://store.steampowered.com/app/..." className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Genre Tags Selection (Comma separated)</label>
          <input type="text" placeholder="Action, RPG, Open World, Sci-Fi" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50" />
        </div>
      </div>

      {/* SECTION 2: SYSTEM REQUIREMENTS */}
      <div className="space-y-4 pt-2">
        <h4 className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-wider border-b border-white/5 pb-1">2. Hardware Requirement Architecture</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Minimum Specs */}
          <div className="space-y-3 bg-white/3 p-4 rounded-xl border border-white/5">
            <p className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest mb-1">Minimum Specification Node</p>
            <input type="text" placeholder="OS: Windows 10 64-bit" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
            <input type="text" placeholder="CPU: Core i7-6700K / Ryzen 5 1600" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
            <input type="text" placeholder="RAM: 12 GB RAM" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
            <input type="text" placeholder="GPU: GTX 1060 6GB / RX 580 8GB" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
          </div>

          {/* Recommended Specs */}
          <div className="space-y-3 bg-white/3 p-4 rounded-xl border border-white/5">
            <p className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">Recommended Specification Node</p>
            <input type="text" placeholder="OS: Windows 11 64-bit" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
            <input type="text" placeholder="CPU: Core i9-12900K / Ryzen 9 7900X" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
            <input type="text" placeholder="RAM: 16 GB RAM" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
            <input type="text" placeholder="GPU: RTX 2080 Super / RX 6800 XT" className="w-full bg-black/40 border border-white/10 rounded-md px-3 h-8 text-xs text-white outline-none" />
          </div>
        </div>
      </div>

      {/* SECTION 3: HOSTERS & MULTI-PART LINKS */}
      <div className="space-y-4 pt-2">
        <h4 className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-wider border-b border-white/5 pb-1">3. Cyberlocker Payload Target Links</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Cyberlocker Platform Provider</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50 font-mono">
              <option value="mediafire" className="bg-[#0a0a10]">⚡ MediaFire</option>
              <option value="gdrive" className="bg-[#0a0a10]">🚀 Google Drive</option>
              <option value="qiwi" className="bg-[#0a0a10]">⬇️ Qiwi.gg</option>
              <option value="onedrive" className="bg-[#0a0a10]">☁️ OneDrive</option>
            </select>
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Total Split Parts Count</label>
            <input type="number" placeholder="e.g., 6" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 h-10 text-xs text-white outline-none focus:border-violet-500/50" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Target Payload URLs (One Link URL Per Line)</label>
          <textarea rows={5} placeholder="https://mediafire.com/file_part1&#10;https://mediafire.com/file_part2&#10;https://mediafire.com/file_part3" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-white outline-none focus:border-violet-500/50 font-mono resize-none" />
        </div>
      </div>

      {/* SUBMIT */}
      <div className="pt-2">
        <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white text-xs font-bold font-mono h-11 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
          <PlusCircle size={15} /> Compile & Inject Repack To Live Grid
        </button>
      </div>

    </form>
  </div>
)}

    </div>
  );
}