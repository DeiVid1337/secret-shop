import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function IdentitySection() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Logo size={80} className="text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-8 font-light italic">
              "O cadeado simboliza aquilo que há de mais íntimo em você, um espaço único, protegido e acessível apenas quando você decide."
            </h2>
            
            <div className="w-12 h-[1px] bg-primary/30 mx-auto mb-10" />

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Na Secret Shop, acreditamos que o prazer começa com segurança, respeito e liberdade. 
              Por isso, criamos um ambiente onde o sigilo encontra o conforto, permitindo que você explore, 
              descubra e desperte novas sensações no seu próprio tempo, sem pressa e sem julgamentos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
