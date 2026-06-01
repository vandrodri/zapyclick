import { motion } from 'motion/react';
import { BadgeCheck, Store, Map, Smartphone } from 'lucide-react';

export const BeforeAfter = () => {
  return (
    <section className="py-24 px-6 bg-primary text-base overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display italic font-light tracking-tight text-white mb-6">
            Do caos para a clareza.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            O salto de qualidade visual não é apenas sobre ser bonito. É sobre transmitir confiança imediata.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative">
          
          {/* Antes */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-6 flex items-center gap-4">
              <span>Antes</span>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm grayscale opacity-60">
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded bg-white/10"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white/5"></div>
                <div className="flex justify-between items-center text-white/30 text-xs">
                  <span className="text-red-400">Fechado agora</span>
                  <span>Última foto: 2021</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seta Divisoria */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-premium flex items-center justify-center shadow-2xl relative z-10 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          {/* Depois */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-premium mb-6 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-premium/30"></div>
              <span>Depois (Faxina Digital)</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full border border-base flex items-center justify-center p-1">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                       <h4 className="text-primary font-medium">Seu Negócio</h4>
                       <BadgeCheck className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-secondary">
                      <Map className="w-3 h-3" />
                      <span>Rua Organizada, 123</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white text-xs py-2 rounded-lg font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2">
                    <Smartphone className="w-3 h-3" />
                    WhatsApp
                  </button>
                  <button className="flex-1 bg-base text-primary text-xs py-2 rounded-lg font-medium border border-primary/10">Rotas</button>
                </div>
                
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-green-600 font-medium">Aberto</span>
                  <span className="text-secondary">• Fecha às 18:00</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
