import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="py-24 px-6 bg-base">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display italic font-light tracking-tight text-primary mb-8 leading-[0.95]">
            Seu negócio físico já está funcionando.<br/>
            <span className="text-secondary">Agora está na hora da internet acompanhar.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href="https://wa.me/5511957055256"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white hover:scale-105 transition-transform duration-300 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-accent/20 w-full sm:w-auto"
            >
              Fazer minha Faxina Digital
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-primary/5 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img 
            src="https://i.postimg.cc/RZhVBKfh/icone-zapy-click.png" 
            alt="ZapyClick Logo" 
            className="h-10 w-auto object-contain opacity-80"
          />
          <p className="font-serif italic text-sm text-primary/60">ZapyClick - Colocando ordem no caos digital do negócio de bairro.</p>
        </div>
        
        <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[0.15em] text-secondary">
          <a href="https://www.instagram.com/zapy.click/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Instagram</a>
          <a href="mailto:zapy@zapy.click" className="flex items-center gap-2 hover:text-primary transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Email</a>
          <a href="https://wa.me/5511957055256" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Contato</a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 text-center text-xs text-secondary/50">
        &copy; {new Date().getFullYear()} ZapyClick. Todos os direitos reservados.
      </div>
    </footer>
  );
};
