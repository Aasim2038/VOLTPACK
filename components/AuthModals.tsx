"use client";
import { useState, useEffect } from "react";
import { X, Mail, Lock, User, ArrowRight, Zap, ShieldAlert } from "lucide-react";

export default function AuthModals({ isOpen, onClose, initialView = "login" }) {
  const [view, setView] = useState(initialView); // 'login' or 'signup'
  
  // CRITICAL FIX: Jab bhi initialView prop badle (Navbar se click karne par), 
  // toh modal ke andar ka view bhi force reset ho jaye!
  useEffect(() => {
    setView(initialView);
  }, [initialView, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur effect */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-[#0a0a10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 transition-all duration-300">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 rounded-lg p-1.5 transition-colors text-white/50 hover:text-white">
          <X size={16} />
        </button>

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)] mb-2">
            <Zap size={18} className="text-white" fill="white" />
          </div>
          <h3 className="text-xl font-black tracking-tight">
            {view === "login" ? "Welcome Back Repacker" : "Create Creator Identity"}
          </h3>
          <p className="text-xs text-white/40 mt-1">
            {view === "login" 
              ? "Access your uploader stats and secure earnings dashboard" 
              : "Register as an official creator to upload repacks and earn revenue share"}
          </p>
        </div>

        {/* Form Inputs Container */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          
          {view === "signup" && (
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-white/40 uppercase tracking-wider">Uploader Name / Handle</label>
              <div className="relative flex items-center bg-white/5 border border-white/10 focus-within:border-violet-500/50 rounded-lg px-3 h-10 transition-all">
                <User size={14} className="text-white/30 mr-2" />
                <input type="text" placeholder="e.g., CyberKnight" className="bg-transparent text-sm outline-none flex-1 placeholder-white/20" />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[11px] font-mono text-white/40 uppercase tracking-wider">Email Address</label>
            <div className="relative flex items-center bg-white/5 border border-white/10 focus-within:border-violet-500/50 rounded-lg px-3 h-10 transition-all">
              <Mail size={14} className="text-white/30 mr-2" />
              <input type="email" placeholder="name@domain.com" className="bg-transparent text-sm outline-none flex-1 placeholder-white/20" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-mono text-white/40 uppercase tracking-wider">Secure Token Password</label>
            <div className="relative flex items-center bg-white/5 border border-white/10 focus-within:border-violet-500/50 rounded-lg px-3 h-10 transition-all">
              <Lock size={14} className="text-white/30 mr-2" />
              <input type="password" placeholder="••••••••" className="bg-transparent text-sm outline-none flex-1 placeholder-white/20" />
            </div>
          </div>

          {view === "signup" && (
            <div className="flex items-start gap-2 bg-amber-500/5 border border-amber-500/10 rounded-lg p-2.5 mt-2">
              <ShieldAlert size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] font-mono text-white/40 leading-normal">
                By registering, you guarantee that uploaded repack links do not contain hidden executable miners. False uploads trigger instantaneous admin bans.
              </p>
            </div>
          )}

          {/* Action Trigger Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white text-xs font-bold font-mono h-10 rounded-lg transition-all mt-4 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            {view === "login" ? "AUTHENTICATE NODE" : "INITIALIZE PIPELINE"} <ArrowRight size={13} />
          </button>
        </form>

        {/* View Toggle Footer */}
        <div className="border-t border-white/5 pt-4 mt-5 text-center">
          <p className="text-xs text-white/40">
            {view === "login" ? "New to the aggregation network?" : "Already possess uploader authorization?"}{" "}
            <button 
              onClick={() => setView(view === "login" ? "signup" : "login")}
              className="text-violet-400 hover:text-violet-300 font-bold transition-colors cursor-pointer ml-1"
            >
              {view === "login" ? "Create Identity" : "Verify Token"}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}