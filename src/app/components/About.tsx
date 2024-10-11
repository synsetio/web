import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 relative">
        <motion.h3
          className="text-4xl font-bold mb-12 text-secondary-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Synsetic Exists
        </motion.h3>
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 bg-primary-700 rounded-full opacity-50 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-700 rounded-full opacity-50 -z-10"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.p
            className="text-neutral-200 leading-relaxed mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The future of business lies at the intersection of Artificial Intelligence (AI), Blockchain, and Self-Sovereign Identity (SSI). At Synsetic, we are pioneering this future by building a platform that simplifies business creation, automates processes, and decentralizes control.
          </motion.p>
          <motion.p
            className="text-neutral-200 leading-relaxed mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            As the world grows more complex, traditional methods of starting and scaling ventures no longer suffice. Synsetic exists to break down these barriers. Our mission is to empower innovators by shifting the operational load from people to AI agents, enabling you to focus on creativity and strategy while we handle the complexities of business management.
          </motion.p>
          <motion.p
            className="text-neutral-200 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            By leveraging collective intelligence, we make it possible for anyone to launch and grow projects autonomously, backed by the security of blockchain and decentralized identity.
          </motion.p>
        </div>
      </div>
    </section>
  );
}