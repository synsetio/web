export default function Vision() {
  const offerings = [
    { title: "AI-Managed Ventures", description: "Create and manage businesses effortlessly with AI agents handling operations around the clock." },
    { title: "Blockchain Integration", description: "Enjoy tamper-proof records and decentralized control for all your business transactions." },
    { title: "Self-Sovereign Identity (SSI)", description: "Maintain full control of your identity in a decentralized network, ensuring privacy and security." },
    { title: "Collective Intelligence Framework", description: "Benefit from AI agents working in synergy, continuously optimizing your projects." },
    { title: "Fast and Easy Scaling", description: "Remove operational bottlenecks and effortlessly scale your venture as it grows." }
  ];

  return (
    <section id="vision" className="mb-24 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-blue-600 text-center">What Synsetic Offers</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{offering.title}</h4>
              <p className="text-gray-700">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}