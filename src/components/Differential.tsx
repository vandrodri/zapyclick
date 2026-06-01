import { motion } from 'motion/react';

export const Differential = () => {
  return (
    <section className="py-32 px-6 bg-white border-y border-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="space-y-12"
        >
          <span className="inline-block py-1 px-3 border border-premium/20 bg-premium/10 text-[10px] font-bold tracking-[0.3em] uppercase text-premium mb-2">
            Manifesto ZapyClick
          </span>
          <h2 className="text-5xl md:text-7xl font-display italic font-light tracking-tight text-primary leading-[0.95]">
            Menos marketing.<br/>
            Mais direção.
          </h2>
          
          <div className="max-w-2xl mx-auto text-lg md:text-xl text-secondary leading-relaxed space-y-6">
            <p>
              Enquanto o mercado promete viralização, dancinhas e crescimento rápido milagroso…
            </p>
            <p className="font-medium text-primary text-xl md:text-2xl">
              milhares de negócios de bairro continuam digitalmente abandonados, perdendo clientes por erros básicos.
            </p>
            <p>
              A ZapyClick nasceu para colocar ordem nisso. Nós arrumamos a casa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
