import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-[#21CE99] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-[#0A2463] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.h3
          className="text-4xl font-bold mb-8 text-[#0A2463]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Future Starts Here
        </motion.h3>
        <motion.p
          className="mb-8 max-w-2xl mx-auto text-xl text-[#333333]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Synsetic, we believe in a future where AI, blockchain, and SSI drive global impact by creating autonomous business ecosystems. Ready to be part of this revolution?
        </motion.p>
        <motion.p
          className="mb-12 max-w-2xl mx-auto text-xl text-[#333333]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join us today and unlock the power of collective intelligence, automation, and decentralized control.
        </motion.p>
        <motion.a
          href="#"
          className="bg-[#21CE99] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#1AB589] transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}