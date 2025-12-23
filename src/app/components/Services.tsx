import { motion } from "framer-motion";
import { content } from "../data/home-page";
import SpotlightCard from "./react-bits/SpotlightCard";

export default function Services() {
  const { title, offerings } = content.services;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-20 text-black text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full p-10 bg-white border-neutral-200">
                <div className="flex flex-col h-full justify-center">
                  <h4 className="text-3xl font-bold mb-6 text-black tracking-tight">
                    {offering.title}
                  </h4>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
