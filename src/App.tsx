import { Headphones, Keyboard, Calendar, MapPin, Sparkles, Terminal, Code2, Network, Gift } from 'lucide-react';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#05020a] flex items-center justify-center font-sans p-4 md:p-10 text-slate-50">
      
      {/* Main Invitation Card */}
      <div className="relative w-full max-w-4xl bg-[#0a0510] border border-[#2a134a] rounded-[40px] shadow-[0_0_80px_-20px_rgba(234,28,45,0.25)] overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Branding Section (WEX Theme) */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-[#10072b] via-[#4e148c] to-[#ea1c2d] p-8 md:p-12 flex flex-col justify-between shrink-0 relative overflow-hidden">
          
          {/* Glowing Chevron Background SVG */}
          <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
            <svg viewBox="0 0 500 800" className="absolute -left-[10%] top-0 w-[150%] h-full opacity-90">
              <defs>
                <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4e148c" stopOpacity="0"/>
                  <stop offset="40%" stopColor="#f59e0b" stopOpacity="1" />
                  <stop offset="60%" stopColor="#fef08a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ea1c2d" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M-150 -100 L150 400 L-150 900" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
              <path d="M-80 -100 L220 400 L-80 900" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <path d="M-10 -100 L290 400 L-10 900" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              {/* Intense glowing line */}
              <path d="M40 -100 L340 400 L40 900" fill="none" stroke="url(#glowLine)" strokeWidth="6" filter="drop-shadow(0 0 15px rgba(245,158,11,0.9))" />
              {/* Sharp white core line */}
              <path d="M60 -100 L360 400 L60 900" fill="none" stroke="#ffffff" strokeWidth="1.5" filter="drop-shadow(0 0 6px #ffffff)" />
            </svg>
          </div>

          <div className="relative z-10 drop-shadow-lg">
            {/* WEX Stylized Logo */}
            <div className="flex items-center mb-10">
              <div className="text-white text-5xl md:text-6xl font-black tracking-tighter lowercase flex items-center">
                we
                <svg className="h-[0.7em] w-[0.7em] ml-0.5 mt-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="butt" strokeLinejoin="miter">
                  <polyline points="6 3 15 12 6 21"></polyline>
                  <polyline points="14 3 23 12 14 21"></polyline>
                </svg>
              </div>
            </div>

            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4 border border-white/20">
              Level Up Your Skills
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter italic drop-shadow-xl">
              THE <br/>RAG<span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-white">volution</span>
            </h1>
            <p className="text-white/90 mt-4 text-sm leading-relaxed font-medium">
              Você está convocado para a revolução da Inteligência Artificial. Venha descobrir como transformar dados em respostas precisas!
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-12 md:mt-0 relative z-10">
            <div className="flex items-center gap-4 bg-black/30 p-3 rounded-2xl backdrop-blur-md border border-white/10">
              <div className="h-10 w-10 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none mb-1">25 de Outubro</div>
                <div className="text-white/70 text-[10px] uppercase tracking-widest font-semibold">14h às 18h</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-black/30 p-3 rounded-2xl backdrop-blur-md border border-white/10">
              <div className="h-10 w-10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none mb-1">Auditório Principal</div>
                <div className="text-white/70 text-[10px] uppercase tracking-widest font-semibold">Sede WEX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col relative z-10">
          
          <div className="mb-8 pl-2">
            <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Olá WEXERS!
            </h2>
            <div className="h-1 w-12 bg-[#ea1c2d] rounded-full"></div>
            <p className="text-slate-400 text-sm mt-4 font-medium">O que vai rolar no evento:</p>
          </div>

          {/* What to expect list */}
          <div className="grid grid-cols-1 gap-2 mb-10">
            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-[#1a0c29]/50 transition-colors border border-transparent hover:border-[#2a134a]">
              <span className="text-[#ea1c2d] font-mono font-bold pt-1 text-lg">01</span>
              <div>
                <h3 className="text-slate-100 font-semibold mb-1 flex items-center gap-2">
                   Mergulho em RAG & LLMs
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">Aprenda a arquitetura Retrieval-Augmented Generation na prática com especialistas.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-[#1a0c29]/50 transition-colors border border-transparent hover:border-[#2a134a]">
              <span className="text-[#ea1c2d] font-mono font-bold pt-1 text-lg">02</span>
              <div>
                <h3 className="text-slate-100 font-semibold mb-1 flex items-center gap-2">
                   Hands-on e Desafios
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">Coloque a mão na massa em nossos laboratórios e ganhe pontos de experiência (+XP).</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-[#1a0c29]/50 transition-colors border border-transparent hover:border-[#2a134a]">
              <span className="text-[#ea1c2d] font-mono font-bold pt-1 text-lg">03</span>
              <div>
                <h3 className="text-slate-100 font-semibold mb-1 flex items-center gap-2">
                   Tech Networking
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">Conecte-se com outros desenvolvedores e engenheiros da comunidade WEX.</p>
              </div>
            </div>
          </div>

          {/* Prizes Section */}
          <div className="mb-10 bg-gradient-to-br from-[#1a0a2e]/60 to-[#0a0510] border border-[#3e1a61] rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ea1c2d]/10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <Gift className="w-5 h-5 text-[#ea1c2d]" />
              <h3 className="font-bold text-lg text-slate-100">Sorteio de Prêmios</h3>
            </div>
            <p className="text-xs text-slate-400 mb-5 relative z-10">Participe e concorra a recompensas de alto nível:</p>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-[#0a0510]/80 p-4 rounded-2xl border border-[#2a134a] flex flex-col items-center justify-center gap-3 shadow-inner hover:bg-[#1a0c29] transition-colors group">
                <Headphones className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-slate-300 text-center">Headset Gamer JBL</span>
              </div>
              <div className="bg-[#0a0510]/80 p-4 rounded-2xl border border-[#2a134a] flex flex-col items-center justify-center gap-3 shadow-inner hover:bg-[#1a0c29] transition-colors group">
                <Keyboard className="w-7 h-7 text-yellow-400 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-slate-300 text-center">Teclado Mecânico</span>
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 relative z-10">
             <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
               <span className="w-2 h-2 rounded-full bg-[#ea1c2d] animate-pulse"></span>
               Vagas Limitadas
             </div>

             <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ea1c2d] to-[#9b0d20] text-white rounded-2xl font-bold text-sm shadow-[0_0_20px_rgba(234,28,45,0.3)] hover:shadow-[0_0_30px_rgba(234,28,45,0.5)] active:scale-95 transition-all text-center border border-white/10">
               Confirmar Presença
             </button>
          </div>

        </div>

      </div>

    </div>
  );
}
