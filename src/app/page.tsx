import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Synsetic</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#vision" className="text-gray-600 hover:text-blue-600 transition-colors">Vision</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-60"></div>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">Collective Intelligence, Global Impact</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Empowering the future with AI-driven ventures, blockchain integration, and self-sovereign identity.
            </p>
            <a href="#" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block animate-fade-in-up animation-delay-600">
              Get Started
            </a>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        <section id="about" className="mb-24 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6 text-blue-600 text-center">About Us</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              At Synsetic, we're at the forefront of the convergence between AI, blockchain, and self-sovereign identity. Our platform empowers individuals and organizations to harness collective intelligence while maintaining control over their digital identities and data.
            </p>
          </div>
        </section>

        <section id="features" className="mb-24 bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12 text-blue-600 text-center">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'AI-Driven Ventures', icon: '🧠', description: 'Leverage collective intelligence to create and manage innovative business models.' },
                { title: 'Blockchain Integration', icon: '🔗', description: 'Ensure transparency, security, and decentralization in all operations.' },
                { title: 'Self-Sovereign Identity', icon: '🔐', description: 'Maintain complete control over your digital identity and personal data.' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-600">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="mb-24 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6 text-blue-600 text-center">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              We envision a world where AI-powered collective intelligence, blockchain technology, and self-sovereign identity converge to create a more efficient, secure, and equitable digital ecosystem. Synsetic is leading the charge towards this future, empowering individuals and organizations to thrive in the new era of decentralized innovation.
            </p>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">Join the Revolution</h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Be part of the future where AI, blockchain, and self-sovereign identity reshape the digital landscape. Let's build a more intelligent, secure, and empowered world together.
            </p>
            <a href="#" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Join Us Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Synsetic. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}