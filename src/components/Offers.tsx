import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Faxina Digital",
    price: "R$197",
    desc: "Uma organização rápida para negócios que parecem abandonados na internet.",
    features: [
      "Bio otimizada",
      "Organização de destaques",
      "Capas de destaques",
      "4 posts prontos",
      "2 Google Posts prontos",
      "Checklist da Fachada Digital",
      "Sugestões de melhoria visual",
      "Respostas prontas para avaliações"
    ],
    obs: "Sem necessidade de acesso às contas.",
    cta: "Quero minha Faxina Digital",
    link: "https://wa.me/5511957055256",
    highlight: false
  },
  {
    name: "Fachada Digital",
    price: "R$697",
    desc: "Transforme seu negócio em uma presença digital organizada, profissional e confiável.",
    features: [
      "Tudo do plano anterior",
      "Landing page profissional",
      "8 posts prontos",
      "Organização visual do feed",
      "Calendário de conteúdo",
      "Padronização visual básica",
      "Configuração estratégica do WhatsApp",
      "CTA profissional",
      "Mini diagnóstico personalizado"
    ],
    obs: "",
    cta: "Quero minha Fachada Digital",
    link: "https://wa.me/5511957055256",
    highlight: true,
    badge: "Mais escolhido"
  },
  {
    name: "Núcleo Local",
    price: "Sob consulta",
    desc: "Seu departamento de organização digital local.",
    features: [
      "Manutenção contínua",
      "Gestão de Google Business",
      "Instagram",
      "Website",
      "Campanhas sazonais",
      "Atualizações mensais",
      "Monitoramento",
      "Relatórios",
      "Suporte estratégico"
    ],
    obs: "",
    cta: "Falar com especialista",
    link: "https://wa.me/5511957055256",
    highlight: false
  }
];

export const Offers = () => {
  return (
    <section className="py-32 px-6 bg-base font-sans" id="ofertas">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <span className="inline-block py-1 px-3 border border-premium/20 bg-premium/10 text-[10px] font-bold tracking-[0.3em] uppercase text-premium mb-6">
            Investimento
          </span>
          <h2 className="text-4xl md:text-6xl font-display italic font-light tracking-tight text-primary leading-[1.05] mb-6">
            Do improviso à presença profissional.
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Escolha o nível de organização digital ideal para o seu negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col p-10 bg-white rounded-2xl border transition-all duration-500 hover:-translate-y-2
                ${plan.highlight 
                  ? 'border-accent shadow-2xl shadow-accent/10 lg:-translate-y-4 lg:hover:-translate-y-6' 
                  : 'border-primary/10 hover:border-primary/30 shadow-sm'
                }
              `}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full z-10 w-max">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-display italic font-bold text-primary tracking-tight mb-2">{plan.name}</h3>
                <p className="text-4xl font-light text-primary tracking-tight mb-4">{plan.price}</p>
                <p className="text-sm text-secondary leading-relaxed h-16">{plan.desc}</p>
              </div>

              <div className="h-[1px] w-full bg-primary/10 mb-8"></div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm text-primary">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-accent' : 'text-premium'}`} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {plan.obs && (
                <div className="mb-6 px-4 py-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xs text-secondary italic text-center">{plan.obs}</p>
                </div>
              )}

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-full font-bold uppercase tracking-widest text-[10px] text-center transition-all duration-300 border
                  ${plan.highlight 
                    ? 'bg-accent text-white border-accent hover:scale-105 shadow-xl shadow-accent/20' 
                    : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white'
                  }
                `}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
