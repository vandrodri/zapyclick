import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const targets = [
  "Estão sem tempo para redes sociais",
  "Têm Instagram parado ou confuso",
  "Têm informações erradas no Google",
  "Querem parecer mais profissionais",
  "Sabem que a primeira impressão importa",
  "Querem organização sem mensalidades"
];

export const ForWhom = () => {
  return (
    <section className="py-24 px-6 relative border-y border-primary/5 bg-base">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display italic font-light tracking-tight text-primary mb-12">
            A Faxina Digital é para negócios locais que…
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-2xl mx-auto">
            {targets.map((target, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-primary/5"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary font-medium text-sm">{target}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
