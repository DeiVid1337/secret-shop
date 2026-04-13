import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 max-w-3xl text-center"
      >
        <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Nosso Manifesto
        </h3>
        <p className="font-heading text-2xl md:text-3xl leading-relaxed text-foreground font-light italic">
          "Nós, da Secret Shop, resgatamos a essência de um tempo em que o prazer era vivido com elegância, discrição e significado. Cada peça é pensada para celebrar o seu corpo, a sua intimidade e o seu poder."
        </p>
      </motion.div>
    </section>
  );
}
