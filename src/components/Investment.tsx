import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Investment = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-48 h-48" />
          </div>
          
          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-display italic font-light tracking-tight">
              Pelo valor de uma diarista.
            </h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto font-sans">
              Você não precisa contratar uma agência cara de marketing para ter uma presença digital organizada e profissional.
            </p>
            
            <a 
              href="https://wa.me/5511957055256"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-base text-primary hover:bg-white transition-transform hover:scale-105 duration-300 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl"
            >
              Quero organizar meu negócio
            </a>
            <p className="text-white/40 text-sm">Sem mensalidades. Pagamento único pelo serviço completo.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
