"use client";
import { useState } from "react";
import { Search, ChevronDown, Upload, User, Filter, Zap, LogIn } from "lucide-react";
// Import the new Auth Modals component
import AuthModals from "./AuthModals"; 

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Auth Modal States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState("login"); // 'login' or 'signup'

  // Temporary state (true = logged in, false = guest)
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const openAuth = (view: "login" | "signup") => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#050508]/80 backdrop-blur-xl">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-base font-black tracking-tight">
              VOLT<span className="text-violet-400">PACK</span>
            </span>
          </div>

          {/* Center: Search */}
          <div className="flex-1 hidden md:flex items-center gap-3 max-w-xl">
            <div className={`relative flex items-center gap-2 bg-white/5 border rounded-lg px-3 h-9 w-full transition-all ${searchFocused ? "border-violet-500/50 shadow-[0_0_12px_rgba(124,58,237,0.2)]" : "border-white/10"}`}>
              <Search size={13} className="text-white/40 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search compressed games..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="bg-transparent text-sm text-white placeholder-white/30 outline-none flex-1 min-w-0"
              />
              <kbd className="hidden lg:flex items-center gap-0.5 bg-white/10 border border-white/10 rounded px-1.5 py-0.5 text-[10px] font-mono text-white/40">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Right Section: Actions & Auth */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => openAuth("signup")} 
              className="hidden sm:flex items-center gap-2 bg-violet-600/10 hover:bg-violet-600/20 border border-violet-500/30 text-violet-300 rounded-lg px-3 h-9 text-xs font-mono font-bold transition-all"
            >
              <Upload size={13} /> Upload & Earn
            </button>

            <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />

            {isLoggedIn ? (
              <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 h-9 text-xs font-medium hover:border-violet-500/30 transition-colors">
                <User size={14} className="text-violet-400" />
                <span className="text-white/80 font-mono">Dashboard</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => openAuth("signup")} 
                  className="text-xs font-mono text-white/60 hover:text-white px-3 py-2 transition-colors cursor-pointer"
                >
                  Sign Up
                </button>
                <button 
                  onClick={() => openAuth("login")} 
                  className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white rounded-lg px-3 h-9 text-xs font-bold transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] cursor-pointer"
                >
                  <LogIn size={13} /> Login
                </button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* Render the Auth Modal globally right below nav */}
      <AuthModals 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialView={authView} 
      />
    </>
  );
}