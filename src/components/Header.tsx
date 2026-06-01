import { motion } from 'motion/react';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:py-8 font-sans">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 md:gap-5"
        >
          <img 
            src="https://i.postimg.cc/HxPBjzjY/zapy-click-logo-dubai.png" 
            alt="ZapyClick Logo" 
            className="h-10 md:h-12 w-auto object-contain shrink-0"
          />
          <div className="hidden md:block h-10 w-[1px] bg-primary/10"></div>
          <p className="hidden md:block font-serif italic text-xs text-primary/70 leading-relaxed max-w-[220px]">
            <strong className="font-sans not-italic font-bold text-primary mr-1 text-sm">ZapyClick</strong>
            Colocando ordem no caos digital do negócio de bairro
          </p>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a
            href="https://wa.me/5511957055256"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-primary text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </header>
  );
};
