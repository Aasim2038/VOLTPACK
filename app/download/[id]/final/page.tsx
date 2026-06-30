"use client";
import { useState, useEffect } from "react";
import { ShieldCheck, HardDrive, Download, ExternalLink, AlertTriangle, CheckCircle2, Server } from "lucide-react";

// Mock Data for individual link injection mapped dynamically via database
const LINK_PAYLOAD = {
  title: "Cyberpunk 2077 (v2.12)",
  size: "62 GB",
  uploader: "FrostByte",
  links: [
    { name: "MediaFire Part 1", size: "10 GB", url: "https://mediafire.com/mock-part1" },
    { name: "MediaFire Part 2", size: "10 GB", url: "https://mediafire.com/mock-part2" },
    { name: "MediaFire Part 3", size: "10 GB", url: "https://mediafire.com/mock-part3" },
    { name: "Google Drive Single Bypass Link", size: "62 GB", url: "https://drive.google.com/mock-single" },
  ]
};

export default function AdTimerPage({ params }: { params: { id: string } }) {
  const [isValidating, setIsValidating] = useState(true);

  // Simulation node check for dynamic premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValidating(false);
    }, 2500); // 2.5 seconds validation check block
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans antialiased flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-[#0a0a10] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-6">
        
        {/* HEADER BLOCK */}
        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded">
            SECURE REPOSITORY BRIDGE ACTIVE
          </span>
          <h1 className="text-xl font-black mt-2 tracking-tight uppercase text-white">{LINK_PAYLOAD.title}</h1>
          <p className="text-xs text-white/40 mt-0.5 font-mono">Total Allocation Size: {LINK_PAYLOAD.size} · Source: {LINK_PAYLOAD.uploader}</p>
        </div>

        {/* ── STAGE 1: SYSTEM DECRYPTING CHECKS ── */}
        {isValidating ? (
          <div className="py-12 flex flex-col items-center justify-center space-y-4 bg-black/20 rounded-xl border border-white/5">
            <div className="relative w-10 h-10 border-2 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
            <div className="text-center space-y-1">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400">Decrypting Package Targets...</p>
              <p className="text-[10px] font-mono text-white/30">Hashing target cloud cluster directories...</p>
            </div>
          </div>
        ) : (
          /* ── STAGE 2: PAYLOAD UNLOCKED LINKS REVEALED ── */
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            
            <div className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 text-emerald-400 text-xs font-mono">
              <CheckCircle2 size={14} className="flex-shrink-0" />
              <span>All storage payload branches successfully decoupled. Safe to stream download.</span>
            </div>

            {/* Links loop output container */}
            <div className="space-y-2.5">
              {LINK_PAYLOAD.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/3 hover:bg-white/5 border border-white/5 hover:border-cyan-500/30 rounded-xl p-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center text-cyan-400">
                      <Server size={14} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{link.name}</p>
                      <p className="text-[10px] font-mono text-white/40 mt-0.5">Partition block index size: {link.size}</p>
                    </div>
                  </div>
                  
                  <span className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg px-3 py-1.5 text-xs font-mono font-bold group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    GET LINK <ExternalLink size={11} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── FINAL AD DISPLAY BANNER WINDOW ── */}
        <div className="w-full h-24 bg-white/3 border border-white/5 rounded-xl flex flex-col items-center justify-center text-center p-4">
          <span className="text-[9px] font-mono tracking-widest text-white/20 uppercase">Display Frame Advertisement</span>
          <p className="text-[11px] text-white/40 mt-1 font-mono">Clean banner ad network codes embed here natively.</p>
        </div>

        {/* Warning instructions banner */}
        <div className="flex items-start gap-2.5 bg-amber-500/5 border border-amber-500/10 rounded-xl p-3">
          <AlertTriangle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] font-mono text-white/40 leading-normal">
            <strong>Extraction Flag:</strong> Use WinRAR v6.20+ or latest 7-Zip binaries to unpack multi-part archives. If you encounter checksum CRC mismatches, check uploader credits panel to cross-verify file MD5 algorithms.
          </p>
        </div>

      </div>
    </div>
  );
}