import { motion } from 'framer-motion';
import { content } from "../data/home-page";

export default function Mission() {
  const { title, paragraphs } = content.mission;

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 relative">
        <motion.h3
          className="text-4xl font-bold mb-12 text-secondary-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <div className="max-w-4xl mx-auto relative">
          {/* ... (animated background elements remain the same) */}
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-neutral-200 leading-relaxed mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}