import { motion } from 'framer-motion';
import { content } from "../data/content";

export default function Features() {
  const { title, items, conclusion } = content.features;

  return (
    <section id="features" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-4xl font-bold mb-16 text-[#0A2463] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        <motion.p
          className="text-[#333333] leading-relaxed max-w-3xl mx-auto text-center mt-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {conclusion}
        </motion.p>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="text-6xl mb-6">{feature.icon}</div>
      <h4 className="text-2xl font-semibold mb-4 text-[#0A2463]">{feature.title}</h4>
      <p className="text-[#333333]">{feature.description}</p>
    </motion.div>
  );
}