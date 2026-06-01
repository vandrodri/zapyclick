import { motion } from 'motion/react';

const blocks = [
  "Confiança instantânea",
  "O cliente não se perde no trajeto",
  "Fim do 'vocês estão abertos hoje?'",
  "Parece maior que a concorrência",
  "A primeira impressão é excelente",
  "Cuidado em cada detalhe"
];

export const WhyItMatters = () => {
  return (
    <section className="py-24 px-6 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-display italic font-light tracking-tight text-primary leading-[1.1] mb-6">
              Antes do cliente confiar no seu negócio… <br/>
              <span className="text-premium">ele observa sua presença online.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Negócios organizados transmitem cuidado e profissionalismo. Negócios bagunçados transmitem falta de controle. A sua vitrine online já está definindo como você será percebido.
            </p>
          </motion.div>
          
          <div className="flex gap-4 flex-wrap content-center">
            {blocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white px-6 py-4 rounded-full border border-primary/10 text-primary text-sm font-medium shadow-sm"
              >
                {block}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
