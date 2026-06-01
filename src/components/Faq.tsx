import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quanto tempo leva o serviço?",
    answer: "A Faxina Digital inicial geralmente é entregue em até 7 dias úteis após o recebimento das informações iniciais do seu negócio. Nosso foco é trazer organização visual de forma ágil sem perder o padrão editorial."
  },
  {
    question: "E se eu não tiver acesso às minhas contas?",
    answer: "É muito comum que negócios de bairro percam senhas, ou o acesso fique preso com uma agência antiga. Nós te orientamos passo a passo no processo de recuperação e reivindicação da propriedade do seu Perfil do Google e outras redes antes de começarmos a organizar a casa."
  },
  {
    question: "A cobrança é uma assinatura mensal?",
    answer: "Não. A Faxina Digital e a Fachada Digital são pacotes de serviço com pagamento único. Nós organizamos a sua presença online e devolvemos o ambiente digital impecável para o seu negócio. Apenas o plano 'Núcleo Local' possui acompanhamento recorrente, focado em alta gestão."
  },
  {
    question: "Vou precisar fornecer minhas senhas pessoais?",
    answer: "Na maior parte dos casos, não. O Google e as plataformas sociais permitem que você adicione nossa equipe através de um convite por e-mail para acesso administrativo seguro. Assim, garantimos que você mantém controle absoluto da sua propriedade."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border-b border-primary/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`font-sans font-medium text-lg transition-colors duration-300 pr-4 ${isOpen ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-primary/30 group-hover:text-accent'}`} 
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-secondary leading-relaxed pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 border border-premium/20 bg-premium/10 text-[10px] font-bold tracking-[0.3em] uppercase text-premium mb-6">
            Dúvidas Comuns
          </span>
          <h2 className="text-4xl md:text-5xl font-display italic font-light tracking-tight text-primary leading-[1.1]">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-primary/10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
