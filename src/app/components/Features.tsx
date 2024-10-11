export default function Features() {
  const features = [
    { title: 'AI-Driven Ventures', icon: '🧠', description: 'Leverage collective intelligence to create and manage innovative business models.' },
    { title: 'Blockchain Integration', icon: '🔗', description: 'Ensure transparency, security, and decentralization in all operations.' },
    { title: 'Self-Sovereign Identity', icon: '🔐', description: 'Maintain complete control over your digital identity and personal data.' }
  ];

  return (
    <section id="features" className="mb-24 bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-blue-600 text-center">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}