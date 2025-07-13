
"use client";
import { motion } from "framer-motion";
import { useEndorseModal } from "./EndorseModalContext";

export default function Hero() {
  const { show } = useEndorseModal();
  return (
    <section className="flex min-h-screen flex-col items-start justify-center px-4 md:px-24">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4 text-xs tracking-widest text-accent"
      >
        AI FOR ALL / VOICES FOR AI
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl"
      >
        Shape the future
        <br />
        <span className="text-accent">&amp;</span> claim your&nbsp;
        <span className="text-accent">Right&nbsp;to&nbsp;AI</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 max-w-xl text-lg leading-relaxed"
      >
        Not just AI for the people—AI by the people.
      </motion.p>
      <motion.button
        type="button"
        onClick={show}
        whileHover={{ scale: 1.05 }}
        className="mt-10 rounded-full border border-foreground px-8 py-3 font-medium uppercase tracking-wide text-accent transition"
      >
        Get involved
      </motion.button>
    </section>
  );
}
