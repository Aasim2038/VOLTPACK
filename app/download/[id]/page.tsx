"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, AlertTriangle, ArrowRight, RefreshCw, Zap, ShieldAlert } from "lucide-react";

export default function AdTimerPage({ params }) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10); // 10 Second safe timer
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Automatic clock ticker reduction logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsUnlocked(true);
    }
  }, [countdown]);

  const handleVerification = () => {
    if (isUnlocked) {
      // User ko aakhiri final link page par bhej rahe hain
      router.push(`/download/${params?.id || "secure-payload"}/final`);
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans antialiased flex flex-col items-center justify-center px-4 py-12">
      
      {/* ── CENTRAL GATEWAY CONTAINER ── */}
      <div className="w-full max-w-lg bg-[#0a0a10] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-6 text-center relative overflow-hidden">
        
        {/* Neon decorative glow grid inside gate */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)", backgroundSize: '16px 16px' }} />

        {/* Security Badge Header */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.3)] mb-3 animate-pulse">
            <Zap size={20} className="text-white" fill="white" />
          </div>
          <h2 className="text-lg font-black font-mono tracking-tight uppercase">Link Encryption Layer</h2>
          <p className="text-xs text-white/40 mt-1">Verifying secure payload handshake. Please hold connectivity node.</p>
        </div>

        {/* ── PLACEHOLDER FOR AD NETWORK BANNER ── */}
        <div className="w-full h-32 bg-white/3 border border-white/5 rounded-xl flex flex-col items-center justify-center text-center p-4 group hover:border-violet-500/20 transition-all">
          <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">High CPM Advertisement Area</span>
          <p className="text-xs text-white/40 max-w-xs mt-1">Pop-unders and native interstitial arrays will securely script here dynamically.</p>
        </div>

        {/* TIMER DISPLAY / BUTTON ACTION TRIGGERS */}
        <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center">
          {!isUnlocked ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <RefreshCw size={14} className="text-violet-400 animate-spin" />
                <span className="text-2xl font-black font-mono text-violet-400">{countdown}s</span>
              </div>
              <p className="text-[11px] font-mono text-white/30 uppercase tracking-wider">Generating Cloud Locker Tokens...</p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-sm font-bold font-mono">
                <ShieldCheck size={16} /> GATEWAY TOKEN UNLOCKED
              </div>
              <p className="text-[10px] text-white/30 font-mono">Signature match complete. Ready to bridge connection.</p>
            </div>
          )}
        </div>

        {/* Core CTA Link Master Trigger */}
        <button
          onClick={handleVerification}
          disabled={!isUnlocked}
          className={`w-full flex items-center justify-center gap-2 font-mono text-xs font-bold h-11 rounded-xl transition-all tracking-wider ${
            isUnlocked 
              ? "bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] cursor-pointer" 
              : "bg-white/5 border border-white/5 text-white/20 cursor-not-allowed"
          }`}
        >
          {isUnlocked ? "PROCEED TO FINAL DOWNLOAD DECK" : "PROCESSING PAYLOAD DATA"} <ArrowRight size={14} />
        </button>

        {/* Security Notice Filter info */}
        <div className="flex items-start gap-2.5 text-left bg-white/3 border border-white/5 rounded-xl p-3">
          <ShieldAlert size={14} className="text-white/40 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] font-mono text-white/30 leading-normal">
            VoltPack verification layers ensure payload destinations match hash constraints. If redirect targets freeze, clear temporary browser cookies and refresh index cache node.
          </p>
        </div>

      </div>
    </div>
  );
}