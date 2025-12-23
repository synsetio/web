"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Mission() {
  const t = useTranslations("HomePage.mission");

  const paragraphs = [t("p1"), t("p2"), t("p3")];

  return (
    <section
      id="mission"
      className="py-32 bg-white border-b border-neutral-100"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-black sticky top-32 tracking-tight leading-tight">
              {t("title")}
            </h3>
          </motion.div>

          <div className="md:w-2/3">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-10 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
