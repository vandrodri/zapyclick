import { motion } from 'motion/react';

const servicos = [
  {
    num: "01",
    title: "Google Meu Negócio",
    desc: "Reivindicamos e organizamos seu Perfil. Horários, endereço, fotos, escudo contra sugestões erradas."
  },
  {
    num: "02",
    title: "Instagram Profissional",
    desc: "Uma bio limpa, botões que funcionam, destaques organizados e fim da aparência de abandono."
  },
  {
    num: "03",
    title: "WhatsApp & Contatos",
    desc: "Catálogo alinhado, respostas rápidas estruturadas, link único e profissional."
  },
  {
    num: "04",
    title: "Identidade Visual Coesa",
    desc: "A mesma logo, as mesmas cores e o mesmo nome em todos os lugares para transmitir confiança."
  }
];

export const WhatIs = () => {
  return (
    <section id="como-funciona" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 border border-premium/20 bg-premium/10 text-[10px] font-bold tracking-[0.3em] uppercase text-premium mb-6">A Solução</span>
          <h2 className="text-4xl md:text-5xl font-display italic font-light tracking-tight text-primary leading-[1.1]">
            Uma organização completa da presença digital do seu negócio.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {servicos.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16 group"
            >
              <div className="absolute left-0 top-0 text-3xl font-display font-medium text-primary/10 group-hover:text-premium/40 transition-colors">
                {s.num}
              </div>
              <h3 className="text-xl font-medium text-primary mb-3">{s.title}</h3>
              <p className="text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
