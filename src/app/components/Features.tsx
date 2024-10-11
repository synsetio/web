import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    { 
      title: 'AI Agents', 
      icon: '🤖', 
      description: 'AI-driven agents autonomously manage your ventures, handling tasks from business strategy execution to project management and scaling—all with minimal human intervention.' 
    },
    { 
      title: 'Blockchain Technology', 
      icon: '🔗', 
      description: 'Our platform is secured by blockchain, ensuring transparency, trust, and verifiability in every business transaction, from payments to smart contracts.' 
    },
    { 
      title: 'Self-Sovereign Identity (SSI)', 
      icon: '🔐', 
      description: 'Synsetic integrates SSI to allow users full control over their digital identities, ensuring privacy and security in every interaction.' 
    }
  ];

  return (
    <section id="features" className="mb-24 py-24 bg-gradient-to-tr from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.h3 
          className="text-4xl font-bold mb-16 text-blue-600 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Synsetic Works
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mt-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          By combining these technologies, we automate business creation, reduce overhead, and enable projects to scale quickly and efficiently—all while maintaining a decentralized, secure environment.
        </motion.p>
      </div>
    </section>
  );
}