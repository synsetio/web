import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { content } from "../data/content";

export default function Hero() {
  const { title1, title2, description, cta } = content.hero;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <BackgroundVideo />
      <HeroContent title1={title1} title2={title2} description={description} cta={cta} />
      <ScrollIndicator />
    </section>
  );
}

function BackgroundVideo() {
  return (
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
  );
}

function HeroContent({ title1, title2, description, cta }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const period = 2000;
  const [delta, setDelta] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, isPaused]);

  const tick = () => {
    if (isPaused) return;

    const i = loopNum % 2;
    const fullText = i === 0 ? title1 : title2;
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => Math.max(prevDelta * 0.9, 50)); // Gradually decrease delta, but not below 50ms
    }

    if (!isDeleting && updatedText === fullText) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
        setDelta(period / fullText.length); // Set initial deleting speed based on text length
      }, 1000); // 1 second pause before deleting
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <div className="relative z-10 text-center">
      <motion.h2
        className="text-5xl font-bold mb-6 text-white drop-shadow-lg h-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
        <span className="text-white">|</span>
      </motion.h2>
      <motion.p
        className="text-xl mb-10 max-w-3xl mx-auto text-white drop-shadow-md bg-black bg-opacity-30 p-4 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <CallToActionButton text={cta} />
    </div>
  );
}

function CallToActionButton({ text }) {
  return (
    <motion.a
      href="#contact"
      className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 flex justify-center pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.svg
        className="w-8 h-8 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </motion.svg>
    </motion.div>
  );
}
