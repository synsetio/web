export default function Hero() {
  return (
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
  );
}