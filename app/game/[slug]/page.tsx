"use client";
import { useState } from "react";
import { 
  Download, Eye, Calendar, Cpu, HardDrive, Monitor, MemoryStick, 
  Star, Shield, AlertTriangle, Gamepad2, Crown, ChevronRight, 
  Share2, ThumbsUp, MessageSquare 
} from "lucide-react";

// Mock Data structure mimicking database schema fetching via params.slug
const CURRENT_GAME = {
  title: "Cyberpunk 2077",
  subtitle: "Phantom Liberty Edition",
  version: "v2.12 + All DLCs & Patches",
  size: "62 GB",
  developer: "CD Projekt RED",
  uploader: "FrostByte",
  genre: ["RPG", "Open World", "Sci-Fi", "Cyberpunk"],
  rating: "9.4/10",
  downloads: "1.2M",
  views: "4.5M",
  releaseDate: "2024-11-12",
  image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&q=80",
  description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Upgraded with next-gen in mind and featuring brand-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades."
};

const HOSTERS = [
  { name: "MediaFire Fast Direct", parts: 6, speed: "10-15 MB/s", icon: "⚡", id: "mf_link_1" },
  { name: "Google Drive High-Speed Bypass", parts: 1, speed: "Max Speed", icon: "🚀", id: "gd_link_1" },
  { name: "Qiwi.gg Torrent/Direct Alternative", parts: 3, speed: "Moderate", icon: "⬇️", id: "qw_link_1" },
];

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("download");

  // Format dynamic slugs beautifully
  const displaySlug = params?.slug ? params.slug.toString().replace(/-/g, " ") : "";

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans antialiased pb-12">
      
      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="max-w-screen-xl mx-auto px-4 pt-6 flex items-center gap-2 text-xs font-mono text-white/30">
        <span className="hover:text-white transition-colors cursor-pointer">Catalog</span>
        <ChevronRight size={10} />
        <span className="hover:text-white transition-colors cursor-pointer uppercase">{CURRENT_GAME.genre[0]}</span>
        <ChevronRight size={10} />
        <span className="text-violet-400 font-bold truncate">{CURRENT_GAME.title}</span>
      </div>

      {/* ── GAME HERO HEADBOARD ── */}
      <section className="relative w-full h-[45vh] min-h-[350px] overflow-hidden mt-4">
        <img src={CURRENT_GAME.image} alt={CURRENT_GAME.title} className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-transparent to-transparent" />

        <div className="relative max-w-screen-xl mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {CURRENT_GAME.genre.map((g) => (
              <span key={g} className="text-[10px] font-mono bg-violet-500/10 border border-violet-500/30 text-violet-300 rounded px-2.5 py-0.5">{g}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none">{CURRENT_GAME.title}</h1>
          <p className="text-sm md:text-base text-white/50 font-mono mt-1">{CURRENT_GAME.version}</p>
        </div>
      </section>

      {/* ── CORE ENGINE CONTENT SPLIT ── */}
      <main className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* LEFT TWO COLUMNS: DATA & TAB MATRICES */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Game Summary Description */}
          <div className="bg-[#0a0a10] border border-white/5 rounded-2xl p-6">
            <h3 className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/5 pb-2 mb-4">Project Synopsis</h3>
            <p className="text-sm text-white/70 leading-relaxed font-light">{CURRENT_GAME.description}</p>
            
            {/* Social engagement parameters */}
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5 text-xs font-mono text-white/40">
              <button className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"><ThumbsUp size={14} /> 2.4K Upvotes</button>
              <button className="flex items-center gap-1.5 hover:text-violet-400 transition-colors"><MessageSquare size={14} /> 48 Comments</button>
              <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"><Share2 size={14} /> Share Node</button>
            </div>
          </div>

          {/* Tab Selection Row */}
          <div className="flex border-b border-white/5 bg-[#0a0a10]/50 rounded-t-xl overflow-hidden px-2">
            {["download", "requirements", "integrity"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all border-b-2 ${activeTab === tab ? "text-violet-400 border-violet-500 bg-violet-500/5" : "text-white/40 border-transparent hover:text-white/70"}`}
              >
                {tab === "download" ? "Download Links Vault" : tab === "requirements" ? "System Hardware Specs" : "Uploader Signatures"}
              </button>
            ))}
          </div>

          {/* TAB WINDOW CONTENT BOX */}
          <div className="bg-[#0a0a10] border border-white/5 rounded-b-2xl p-6 min-h-[250px]">
            
            {/* A. DOWNLOAD LINK TAB ZONE */}
            {activeTab === "download" && (
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 rounded-xl p-4 text-amber-300">
                  <AlertTriangle size={16} className="flex-shrink-0 mt-0.5 animate-pulse" />
                  <p className="text-xs leading-relaxed text-amber-300/70">
                    <strong>Node Monetization Notice:</strong> Clicking download links triggers intermediate gateway scripts (Ad-Timer validation) to support uploader revenue splitting. Use uBlock Origin configuration flags for cleaner operations.
                  </p>
                </div>

                <div className="space-y-3">
                  {HOSTERS.map((h) => (
                    <div key={h.id} className="flex items-center justify-between bg-white/3 hover:bg-white/5 border border-white/5 hover:border-violet-500/30 rounded-xl p-4 transition-all group">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl p-2 bg-black/40 rounded-lg border border-white/5">{h.icon}</span>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">{h.name}</p>
                          <p className="text-[10px] font-mono text-white/40 mt-0.5">{h.parts} Split Volumes · Bandwidth: {h.speed}</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600/80 to-violet-700/80 hover:from-violet-500 hover:to-violet-600 text-white rounded-lg px-4 h-9 text-xs font-mono font-bold transition-all shadow-md group-hover:shadow-violet-600/20">
                        <Download size={12} /> Unlock Links
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* B. HARDWARE SPECIFICATIONS TAB ZONE */}
            {activeTab === "requirements" && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/5 text-[11px] font-mono text-white/40 uppercase">
                      <th className="pb-3 w-1/4">Architecture</th>
                      <th className="pb-3 text-rose-400/80">Minimum Standard</th>
                      <th className="pb-3 text-cyan-400/80">Recommended Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono text-xs">
                    {[
                      { component: "Operating System", min: "Windows 10 64-bit", rec: "Windows 11 64-bit (Latest Dev Build)" },
                      { component: "Processor Node", min: "Core i7-6700K / Ryzen 5 1600", rec: "Core i9-12900K / Ryzen 9 7900X" },
                      { component: "Memory Allocation", min: "12 GB RAM", rec: "16 GB DDR5 RAM" },
                      { component: "Graphics Engine", min: "GTX 1060 6GB / RX 580", rec: "RTX 3080 Super / RX 6800 XT" },
                      { component: "Storage Array", min: `${CURRENT_GAME.size} Free Space (SSD Required)`, rec: `${CURRENT_GAME.size} High-Speed NVMe Storage` },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/1 uppercase tracking-tight">
                        <td className="py-4 font-bold text-white/50">{row.component}</td>
                        <td className="py-4 text-white/70">{row.min}</td>
                        <td className="py-4 text-white">{row.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* C. INTEGRITY & CREDITS TAB ZONE */}
            {activeTab === "integrity" && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/3 border border-white/5 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                    {CURRENT_GAME.uploader[0]}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Repository Source Broker</p>
                    <p className="text-base font-bold text-white">{CURRENT_GAME.uploader}</p>
                    <p className="text-xs text-emerald-400 mt-0.5 flex items-center gap-1"><Crown size={11} /> Cryptographically Verified Source</p>
                  </div>
                </div>
                <div className="bg-black/30 border border-white/5 rounded-xl p-4 text-xs text-white/50 leading-relaxed font-mono space-y-2">
                  <p>• <strong>Compression Protocol:</strong> Lossless deployment framework. Data identical to official storefront release structures.</p>
                  <p>• <strong>Security Filter:</strong> MD5 checksum validated. 0% malware payloads or hidden hardware miners allowed inside cluster bins.</p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDEBAR: QUICK STATISTICS BOARD */}
        <div className="space-y-4">
          <div className="bg-[#0a0a10] border border-white/5 rounded-2xl p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Manifest Summary</h3>
            
            {[
              { label: "File Metric Size", value: CURRENT_GAME.size, icon: HardDrive, color: "text-cyan-400" },
              { label: "Network Log Hits", value: CURRENT_GAME.downloads, icon: Download, color: "text-violet-400" },
              { label: "Cluster Impressions", value: CURRENT_GAME.views, icon: Eye, color: "text-emerald-400" },
              { label: "Storefront Rating", value: CURRENT_GAME.rating, icon: Star, color: "text-amber-400" },
              { label: "Release Index Date", value: CURRENT_GAME.releaseDate, icon: Calendar, color: "text-rose-400" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-mono py-1 border-b border-white/3 last:border-none last:pb-0">
                <span className="text-white/40 flex items-center gap-1.5"><stat.icon size={12} className={stat.color} /> {stat.label}</span>
                <span className="font-bold text-white">{stat.value}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-violet-600/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl p-5 text-center">
            <p className="text-xs font-mono text-violet-300 font-bold uppercase tracking-wider">Need Custom Configuration?</p>
            <p className="text-[11px] text-white/40 mt-1 leading-normal">Report setup file installation errors directly to the uploader module via internal reporting flags if hashes mismatch.</p>
          </div>
        </div>

      </main>
    </div>
  );
}