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
    <section id="features" className="mb-24 bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-blue-600 text-center">How Synsetic Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mt-12">
          By combining these technologies, we automate business creation, reduce overhead, and enable projects to scale quickly and efficiently—all while maintaining a decentralized, secure environment.
        </p>
      </div>
    </section>
  );
}