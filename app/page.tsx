"use client";
import { useState } from "react";
import {
  Download, Eye, Calendar, Cpu, HardDrive, Monitor, MemoryStick, Star, Shield, 
  X, AlertTriangle, ArrowRight, Gamepad2, Flame, Crown, BarChart3, ChevronLeft, ChevronRight,
  TrendingUp, Clock, SortAsc
} from "lucide-react";

// ─── MOCK DATA (RETAINED FULLY) ───────────────────────────────────────────────
const FEATURED_SLIDES = [
  {
    title: "Cyberpunk 2077",
    subtitle: "Phantom Liberty Edition",
    version: "v2.12 + Phantom Liberty DLC",
    size: "62 GB",
    developer: "CD Projekt RED",
    uploader: "FrostByte",
    genre: ["RPG", "Open World", "Cyberpunk"],
    rating: 9.4,
    downloads: "1.2M",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&q=80",
  },
  {
    title: "GTA VI",
    subtitle: "Vice City Chronicles",
    version: "v1.0 Launch",
    size: "150 GB",
    developer: "Rockstar Games",
    uploader: "PixelSurge",
    genre: ["Action", "Open World", "Crime"],
    rating: 9.9,
    downloads: "2.8M",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1400&q=80",
  }
];

const GAMES = [
  { id: 1, title: "Elden Ring", genre: ["Action", "RPG", "Souls-like"], size: "44 GB", uploader: "NightOwl", downloads: "840K", views: "2.1M", date: "2024-11-12", version: "v1.12", image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=600&q=80", badge: "HOT" },
  { id: 2, title: "Red Dead Redemption 2", genre: ["Action", "Adventure", "Western"], size: "112 GB", uploader: "PixelSurge", downloads: "1.1M", views: "3.4M", date: "2024-10-05", version: "v1.0.1491.21", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80", badge: "NEW" },
  { id: 3, title: "Hogwarts Legacy", genre: ["RPG", "Magic", "Open World"], size: "76 GB", uploader: "VaultKeeper", downloads: "670K", views: "1.8M", date: "2024-12-01", version: "v1.0.6", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", badge: null },
  { id: 4, title: "Alan Wake 2", genre: ["Horror", "Thriller", "Action"], size: "90 GB", uploader: "NightOwl", downloads: "430K", views: "980K", date: "2024-09-18", version: "v1.2.1", image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=600&q=80", badge: "EDITOR'S PICK" },
  { id: 5, title: "Starfield", genre: ["RPG", "Sci-Fi", "Open World"], size: "139 GB", uploader: "CryptoRepack", downloads: "920K", views: "2.6M", date: "2024-08-30", version: "v1.11.36", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80", badge: null },
  { id: 6, title: "Baldur's Gate 3", genre: ["RPG", "Strategy", "Fantasy"], size: "122 GB", uploader: "FrostByte", downloads: "1.4M", views: "4.2M", date: "2024-07-10", version: "v4.1.1.3719609", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80", badge: "TOP 10" },
  { id: 7, title: "GTA VI", genre: ["Action", "Open World", "Crime"], size: "150 GB", uploader: "PixelSurge", downloads: "2.8M", views: "9.1M", date: "2025-01-02", version: "v1.0 Launch", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80", badge: "🔥 TRENDING" },
  { id: 8, title: "The Witcher 4", genre: ["RPG", "Fantasy", "Open World"], size: "88 GB", uploader: "VaultKeeper", downloads: "310K", views: "740K", date: "2025-01-15", version: "v0.9 Beta", image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&q=80", badge: "NEW" },
];

const HOSTERS = [
  { name: "MediaFire", parts: 6, speed: "Fast", icon: "⚡" },
  { name: "Google Drive", parts: 1, speed: "Very Fast", icon: "🚀" },
  { name: "Qiwi.gg", parts: 3, speed: "Moderate", icon: "⬇️" },
  { name: "OneDrive", parts: 4, speed: "Fast", icon: "☁️" },
];

const SORT_OPTIONS = [
  { label: "Most Downloaded", icon: TrendingUp },
  { label: "Recently Added", icon: Clock },
  { label: "File Size", icon: HardDrive },
  { label: "Alphabetical", icon: SortAsc },
];

const GENRES = ["All", "Action", "RPG", "Horror", "Sports", "Strategy", "Sci-Fi", "Adventure"];

const badgeStyle = (b) => {
  if (!b) return "";
  if (b.includes("HOT") || b.includes("TRENDING")) return "bg-rose-500/20 text-rose-400 border-rose-500/40";
  if (b.includes("NEW")) return "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
  if (b.includes("EDITOR")) return "bg-violet-500/20 text-violet-400 border-violet-500/40";
  if (b.includes("TOP")) return "bg-amber-500/20 text-amber-400 border-amber-500/40";
  return "bg-cyan-500/20 text-cyan-400 border-cyan-500/40";
};

// ─── SUB COMPONENTS (RETAINED FULLY) ──────────────────────────────────────────
function GameCard({ game, onClick }) {
  return (
    <div onClick={() => onClick(game)} className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] bg-[#0f0f15]">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f15] via-[#0f0f15]/20 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1">
          <HardDrive size={10} className="text-cyan-400" />
          <span className="text-[10px] font-mono text-white/90">{game.size}</span>
        </div>
        {game.badge && <div className={`absolute top-3 right-3 text-[9px] font-bold font-mono border rounded-md px-2 py-1 ${badgeStyle(game.badge)}`}>{game.badge}</div>}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1">
          <Crown size={9} className="text-amber-400" />
          <span className="text-[10px] font-mono text-white/70">{game.uploader}</span>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2 flex-1">
        <div>
          <p className="text-[11px] font-mono text-violet-400/80 uppercase tracking-widest">{game.version}</p>
          <h3 className="text-sm font-bold text-white mt-0.5 leading-tight line-clamp-1">{game.title}</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          {game.genre.slice(0, 2).map((g) => (
            <span key={g} className="text-[10px] font-mono bg-white/5 border border-white/10 text-white/50 rounded-sm px-1.5 py-0.5">{g}</span>
          ))}
        </div>
        <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
          <span className="flex items-center gap-1"><Download size={9} className="text-cyan-400" /> {game.downloads}</span>
          <span className="flex items-center gap-1"><Eye size={9} /> {game.views}</span>
          <span className="flex items-center gap-1"><Calendar size={9} /> {game.date.slice(5)}</span>
        </div>
      </div>
    </div>
  );
}

function GameModal({ game, onClose }) {
  const [activeTab, setActiveTab] = useState("download");
  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-[#0a0a10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative h-56 md:h-72">
          <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-[#0a0a10]/60 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 border border-white/10 rounded-full p-2 transition-colors"><X size={16} className="text-white" /></button>
          <div className="absolute bottom-6 left-6 right-16">
            <div className="flex flex-wrap gap-2 mb-2">
              {game.genre.map((g) => <span key={g} className="text-[10px] font-mono bg-violet-500/20 border border-violet-500/40 text-violet-300 rounded-sm px-2 py-0.5">{g}</span>)}
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{game.title}</h2>
            <p className="text-sm font-mono text-cyan-400 mt-1">{game.version}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 divide-x divide-white/5 border-b border-white/5">
          {[{ label: "Size", value: game.size, icon: HardDrive }, { label: "Downloads", value: game.downloads, icon: Download }, { label: "Views", value: game.views, icon: Eye }, { label: "Rating", value: `${game.rating || 9.0}/10`, icon: Star }].map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center py-4 gap-1">
              <Icon size={14} className="text-violet-400" />
              <span className="text-xs font-mono text-white font-bold">{value}</span>
              <span className="text-[10px] text-white/40">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex border-b border-white/5">
          {["download", "requirements"].map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} className={`px-6 py-3 text-xs font-mono uppercase tracking-wider transition-colors ${activeTab === t ? "text-violet-400 border-b-2 border-violet-400 bg-violet-500/5" : "text-white/40"}`}>{t === "download" ? "Download Zone" : "System Req."}</button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === "download" && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                <AlertTriangle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-300/80"><strong>Use an ad-blocker</strong> before clicking any link. VoltPack does not serve malicious setup execution files.</p>
              </div>
              <div className="space-y-3">
                {HOSTERS.map((h) => (
                  <div key={h.name} className="flex items-center justify-between bg-white/3 border border-white/5 rounded-xl p-4">
                    <div><p className="text-sm font-bold text-white">{h.name}</p><p className="text-[11px] font-mono text-white/40">{h.parts} parts · {h.speed}</p></div>
                    <button className="bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/40 text-violet-300 rounded-lg px-4 py-2 text-xs font-mono font-bold">Download</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "requirements" && (
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/5">
                {[{ label: "CPU", icon: Cpu, min: "Core i7-6700K", rec: "Core i9-12900K" }, { label: "RAM", icon: MemoryStick, min: "12 GB", rec: "16 GB" }, { label: "GPU", icon: Gamepad2, min: "GTX 1060", rec: "RTX 2080" }].map(({ label, icon: Icon, min, rec }) => (
                  <tr key={label}><td className="py-3 text-xs font-mono text-white/50">{label}</td><td className="py-3 text-xs text-white/70">{min}</td><td className="py-3 text-xs text-white">{rec}</td></tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PLATFORM INDEX ──────────────────────────────────────────────────────
export default function GamingDashboard() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeSort, setActiveSort] = useState("Most Downloaded");
  const [activeGenre, setActiveGenre] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = FEATURED_SLIDES[currentSlide];
  const filteredGames = GAMES.filter((g) => activeGenre === "All" || g.genre.includes(activeGenre));

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans antialiased">
      
      {/* ── HIGH FIDELITY HERO CAROUSEL ── */}
      <section className="relative w-full h-[65vh] min-h-[500px] max-h-[680px] overflow-hidden">
        <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/20" />

        <div className="relative max-w-screen-xl mx-auto px-4 h-full flex flex-col justify-end pb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 bg-violet-500/20 border border-violet-500/40 text-violet-300 text-[11px] font-mono font-bold px-3 py-1 rounded-full">
                <Flame size={11} /> FEATURED REPACK
              </span>
              <span className="text-[11px] font-mono text-white/40">Developer: {slide.developer}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight">{slide.title}</h1>
            <p className="text-lg md:text-xl text-white/50 font-light mt-1">{slide.subtitle}</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
              <span className="text-sm font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded px-2 py-0.5">{slide.version}</span>
              <span className="flex items-center gap-1.5 text-sm font-mono text-emerald-400"><HardDrive size={13} /> {slide.size}</span>
              <span className="flex items-center gap-1.5 text-sm font-mono text-white/40"><Download size={13} /> {slide.downloads} hits</span>
              <span className="flex items-center gap-1.5 text-sm font-mono text-amber-400"><Star size={13} fill="currentColor" /> {slide.rating}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => setSelectedGame({ title: slide.title, image: slide.image, version: slide.version, size: slide.size, genre: slide.genre, downloads: slide.downloads, views: "4.5M", uploader: slide.uploader, rating: slide.rating })} className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold rounded-xl px-6 py-3 text-sm transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                Explore Repack
              </button>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-5 right-8 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-2">
          <button onClick={() => setCurrentSlide(prev => prev === 0 ? FEATURED_SLIDES.length - 1 : prev - 1)} className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10"><ChevronLeft size={14} /></button>
          <span className="text-[11px] font-mono text-white/50 px-1">{currentSlide + 1} / {FEATURED_SLIDES.length}</span>
          <button onClick={() => setCurrentSlide(prev => prev === FEATURED_SLIDES.length - 1 ? 0 : prev + 1)} className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10"><ChevronRight size={14} /></button>
        </div>
      </section>

      {/* ── STATS BAR (RETAINED) ── */}
      <div className="border-y border-white/5 bg-[#080810]">
        <div className="max-w-screen-xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Games", value: "14,200+", icon: Gamepad2, color: "text-violet-400" },
            { label: "Total Downloads", value: "48.2M", icon: Download, color: "text-cyan-400" },
            { label: "Registered Users", value: "1,240", icon: Crown, color: "text-emerald-400" },
            { label: "Clean Integrity", value: "100%", icon: Shield, color: "text-rose-400" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center ${color}`}><Icon size={16} /></div>
              <div><p className={`text-base font-black font-mono ${color}`}>{value}</p><p className="text-[11px] text-white/40">{label}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATALOG ARCHIVE GRID (RETAINED FULLY WITH ALL META DATA) ── */}
      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-xl font-black text-white">Browse Repacks</h2><p className="text-xs font-mono text-white/30 mt-0.5">{filteredGames.length} games available</p></div>
          <button className="flex items-center gap-2 text-xs font-mono text-violet-400 hover:text-violet-300">View All <ArrowRight size={13} /></button>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {GENRES.map((g) => (
            <button key={g} onClick={() => setActiveGenre(g)} className={`text-xs font-mono rounded-full px-3 py-1.5 border transition-all ${activeGenre === g ? "bg-violet-500/20 border-violet-500/50 text-violet-300" : "bg-white/3 border-white/10 text-white/50"}`}>{g}</button>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-8 pb-5 border-b border-white/5">
          <span className="text-[11px] font-mono text-white/30 mr-1">SORT BY</span>
          {SORT_OPTIONS.map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => setActiveSort(label)} className={`flex items-center gap-1.5 text-xs font-mono rounded-lg px-3 py-2 border transition-all ${activeSort === label ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" : "bg-white/3 border-white/5 text-white/40"}`}><Icon size={11} /> {label}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGames.map((game) => <GameCard key={game.id} game={game} onClick={setSelectedGame} />)}
        </div>

        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 rounded-xl px-8 py-3 text-sm font-mono">Load More Games <BarChart3 size={14} /></button>
        </div>
      </main>

      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </div>
  );
}