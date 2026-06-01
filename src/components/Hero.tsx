import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const StoryVisual = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 mt-8 relative">
      {/* Card 1: Beautiful Store */}
      <motion.div 
        initial={{ opacity: 0, y: 20, rotate: -3 }} 
        animate={{ opacity: 1, y: 0, rotate: -2 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col items-center gap-4 w-full md:w-1/3 max-w-[280px]"
      >
        <div className="p-3 bg-white shadow-xl border border-primary/5 rounded-2xl w-full relative group">
          <div className="overflow-hidden rounded-xl">
             <img 
               src="https://i.postimg.cc/T2HLpS0G/zapy-click-faxinadigital-bonito.jpg" 
               alt="Loja bonita" 
               className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
             />
          </div>
        </div>
        <p className="font-serif italic text-primary/80 text-center tracking-tight text-sm">
          Seu negócio físico é assim...
        </p>
      </motion.div>

      {/* Card 2: Abandoned Store */}
      <motion.div 
        initial={{ opacity: 0, y: 20, rotate: 4 }} 
        animate={{ opacity: 1, y: 0, rotate: 3 }} 
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col items-center gap-4 w-full md:w-1/3 max-w-[280px] md:mt-20"
      >
        <div className="p-3 bg-[#1F1F1C] shadow-xl border border-primary/20 rounded-2xl w-full relative group">
          <div className="overflow-hidden rounded-xl relative">
             <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none"></div>
             <img 
               src="https://i.postimg.cc/44F7mM5B/zapyclick-faxina-digital-desorganizado.jpg" 
               alt="Internet desorganizada" 
               className="w-full aspect-square object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105" 
             />
          </div>
        </div>
        <p className="font-serif italic text-primary/80 text-center tracking-tight text-sm">
          ...mas na internet está assim.
        </p>
      </motion.div>

      {/* Card 3: Cleaner / Impact */}
      <motion.div 
         initial={{ opacity: 0, y: 20, rotate: -2 }} 
         animate={{ opacity: 1, y: 0, rotate: -1 }} 
         transition={{ duration: 0.8, delay: 1 }}
         className="flex flex-col items-center gap-6 w-full md:w-1/3 max-w-[340px] md:scale-110 z-10 md:-ml-8 mt-12 md:mt-4"
      >
         <div className="p-3 bg-accent shadow-2xl rounded-2xl w-full relative group shadow-accent/20">
          <div className="overflow-hidden rounded-xl relative">
             <img 
               src="https://i.postimg.cc/RVHFq0qN/Copilot-20260529-115420.png" 
               alt="O Faxineiro Digital" 
               className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display italic font-light text-white text-2xl md:text-[1.7rem] leading-[1.1]">
                  Antes de entrar na porta, o cliente entra no Google.
                </p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen py-20 px-6 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-base to-base -z-10"></div>
      
      <div className="max-w-6xl mx-auto w-full pt-28">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-premium/20 bg-premium/10 text-[10px] font-bold tracking-[0.3em] uppercase text-premium mb-6">
              ZapyClick • Organização Digital Local
            </span>
            <h1 className="text-5xl md:text-7xl font-display italic font-light text-primary tracking-tight leading-[1.1]">
              Seu negócio está aberto.<br className="hidden md:block"/>
              <span className="text-secondary">Mas a internet dele também está?</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-secondary font-sans leading-relaxed">
              Muitos negócios de bairro funcionam bem no mundo real…
              <br className="hidden sm:block"/>
              mas parecem abandonados no Google e Instagram.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center pt-4 w-full sm:w-auto"
          >
            <a 
              href="https://wa.me/5511957055256"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-white hover:scale-105 transition-transform duration-300 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 group shadow-xl shadow-accent/20"
            >
              Quero minha Faxina Digital
            </a>
            <a 
              href="#como-funciona"
              className="w-full sm:w-auto px-6 py-4 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span className="w-10 h-[1px] bg-premium transition-all group-hover:w-16"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-premium">Ver como funciona</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-20 md:mt-24 w-full"
        >
          <StoryVisual />
        </motion.div>
      </div>
    </section>
  );
};
