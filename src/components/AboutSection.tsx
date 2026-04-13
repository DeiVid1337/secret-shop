import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12">
            Sobre Nós
          </h3>
          
          <div className="space-y-8">
            <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed font-light italic">
              "A Secret Shop nasce da visão de um empreendedor apaixonado por esse universo, 
              que identificou a necessidade de transformar a forma como a intimidade é percebida e vivida."
            </p>
            
            <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
            
            <div className="font-body text-base md:text-lg text-muted-foreground leading-relaxed space-y-6 max-w-3xl mx-auto text-justify md:text-center">
              <p>
                Mais do que uma loja, a marca surge com o propósito de oferecer uma experiência 
                marcada pela elegância, pelo sigilo e pela acessibilidade, pensada para todos 
                os públicos e distante dos padrões convencionais.
              </p>
              
              <p>
                Com uma proposta leve, moderna e sofisticada, buscamos desconstruir estigmas e 
                trazer naturalidade para um tema que faz parte da vida de todos, tanto no 
                ambiente digital quanto na forma de se comunicar.
              </p>
              
              <p className="font-medium">
                Acreditamos que a intimidade, seja individual ou a dois, deve ser vivida com 
                liberdade, conforto e respeito, não como um tabu, mas como uma parte essencial 
                do bem-estar e do cotidiano.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
