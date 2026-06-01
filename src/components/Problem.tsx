import { motion } from 'motion/react';
import { MapPinOff, Clock, MessageSquareX, ImageOff } from 'lucide-react';

const problems = [
  {
    icon: <MapPinOff className="w-5 h-5 text-premium" />,
    label: "Endereço Desatualizado",
    desc: "Clientes vão parar no local antigo."
  },
  {
    icon: <Clock className="w-5 h-5 text-premium" />,
    label: "Horário Incorreto",
    desc: "Fechado na internet, aberto na vida real."
  },
  {
    icon: <MessageSquareX className="w-5 h-5 text-premium" />,
    label: "Avaliações Sem Resposta",
    desc: "Clientes sentem-se ignorados."
  },
  {
    icon: <ImageOff className="w-5 h-5 text-premium" />,
    label: "Fotos Antigas",
    desc: "A fachada mudou, o Google não."
  }
];

export const Problem = () => {
  return (
    <section className="py-24 px-6 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display italic font-light text-primary tracking-tight leading-[1.1]">
              O problema não é falta de esforço.<br/>
              <span className="text-premium">É abandono digital.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              Hoje, antes de entrar pela porta, o cliente entra no Google. Se a sua fachada digital está bagunçada, você está perdendo vendas sem nem saber.
            </p>
            
            <a 
              href="https://wa.me/5511957055256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors gap-2 group cursor-pointer mt-4"
            >
              <span className="w-10 h-[1px] bg-accent transition-all group-hover:w-16 group-hover:bg-primary"></span>
              Falar com um especialista
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-base p-6 rounded-2xl border border-primary/5 hover:border-premium/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  {prob.icon}
                </div>
                <h3 className="text-primary font-medium mb-1">{prob.label}</h3>
                <p className="text-sm text-secondary">{prob.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
