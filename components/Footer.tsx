import { MessageCircle, Send, Globe, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030306] mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)]">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-base font-black">VOLT<span className="text-violet-400">PACK</span></span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed">
              The premium repack platform. Highly compressed, lossless, and verified. Built for gamers who value quality.
            </p>
          </div>

          {[
            { title: "Platform", links: ["Browse Games", "Top Repacks", "New Releases", "Request a Game", "Upload & Earn"] },
            { title: "Community", links: ["Discord Server", "Telegram Channel", "Reddit Community", "Twitter / X", "YouTube"] },
            { title: "Legal", links: ["DMCA Policy", "Privacy Policy", "Terms of Service", "Cookie Policy", "Contact Us"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-mono font-bold text-white/60 uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-xs text-white/30 hover:text-violet-300 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button className="flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg px-4 py-2 text-xs font-mono font-bold transition-all">
            <MessageCircle size={13} /> Join Discord
          </button>
          <button className="flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg px-4 py-2 text-xs font-mono font-bold transition-all">
            <Send size={13} /> Telegram
          </button>
          <button className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white/50 rounded-lg px-4 py-2 text-xs font-mono font-bold transition-all">
            <Globe size={13} /> Website
          </button>
        </div>

        <div className="border-t border-white/5 pt-6">
          <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg p-4 mb-6">
            <p className="text-[11px] font-mono text-white/30 leading-relaxed">
              <strong className="text-amber-400/80">⚠️ DISCLAIMER:</strong> VoltPack does not host any copyrighted content on its servers. All files are hosted by third-party services. VoltPack acts solely as an index and search aggregator.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] font-mono text-white/20">
            <span>© 2026 VoltPack · All rights reserved</span>
            <span className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> System Operational</span>
              <span>v3.2.0</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}