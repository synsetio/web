"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Squares from "./react-bits/Squares";
import SplitText from "./react-bits/SplitText";
import MagneticButton from "./react-bits/MagneticButton";

export default function Hero() {
  const t = useTranslations("HomePage.hero");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={50}
          borderColor="#f0f0f0"
          hoverFillColor="#f5f5f5"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6">
          <SplitText
            text={`${t("title1")} ${t("title2")}`}
            className="text-6xl md:text-8xl font-bold text-black tracking-tighter"
            delay={50}
            duration={1}
            tag="h1"
          />
        </div>

        <motion.p
          className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#contact" className="inline-block">
            <MagneticButton
              as="div"
              className="inline-flex bg-black text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl"
            >
              {t("cta")}
            </MagneticButton>
          </a>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <div className="w-[1px] h-16 bg-neutral-200 overflow-hidden relative">
        <motion.div
          className="absolute top-0 w-full h-1/2 bg-black"
          animate={{ y: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
