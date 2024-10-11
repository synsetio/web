import { motion } from 'framer-motion';

export default function Vision() {
  const offerings = [
    { title: "AI-Managed Ventures", description: "Create and manage businesses effortlessly with AI agents handling operations around the clock." },
    { title: "Blockchain Integration", description: "Enjoy tamper-proof records and decentralized control for all your business transactions." },
    { title: "Self-Sovereign Identity (SSI)", description: "Maintain full control of your identity in a decentralized network, ensuring privacy and security." },
    { title: "Collective Intelligence Framework", description: "Benefit from AI agents working in synergy, continuously optimizing your projects." },
    { title: "Fast and Easy Scaling", description: "Remove operational bottlenecks and effortlessly scale your venture as it grows." }
  ];

  return (
    <section id="vision" className="py-24 bg-[#0A2463] text-white">
      <div className="container mx-auto px-4">
        <motion.h3 
          className="text-4xl font-bold mb-16 text-[#21CE99] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Synsetic Offers
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-12">
          {offerings.map((offering, index) => (
            <motion.div 
              key={index} 
              className="bg-[#0D2E7D] rounded-xl shadow-xl p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-2xl font-semibold mb-4 text-[#21CE99]">{offering.title}</h4>
              <p className="text-[#F5F5F5] text-lg">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}