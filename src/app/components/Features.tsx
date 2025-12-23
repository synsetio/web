"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { content } from "../data/home-page";
import SpotlightCard from "./react-bits/SpotlightCard";
import MagneticButton from "./react-bits/MagneticButton";

export default function Features() {
  const t = useTranslations("HomePage.features");
  const locale = useLocale();
  const { resources } = content.features;

  const items = [
    {
      imagePath: "/images/agentic-economy.jpg",
      title: t("items.item1.title"),
      description: t("items.item1.description"),
    },
    {
      imagePath: "/images/blockchain-identity.jpg",
      title: t("items.item2.title"),
      description: t("items.item2.description"),
    },
    {
      imagePath: "/images/collective-intelligence.jpg",
      title: t("items.item3.title"),
      description: t("items.item3.description"),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-20 text-black text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("title")}
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col items-start border-neutral-200 bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={feature.imagePath}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-black tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xl md:text-2xl text-neutral-800 leading-relaxed max-w-3xl mx-auto text-center mb-24 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("conclusion")}
        </motion.p>

        <div className="border-t border-neutral-100 pt-24">
          <h4 className="text-3xl font-bold mb-12 text-black text-center tracking-tight">
            Latest Insights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <ResourceThumbnail
                key={index}
                resource={resource}
                index={index}
                locale={locale}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href={`/${locale}/blog`}>
              <MagneticButton className="inline-flex items-center text-black font-semibold hover:text-neutral-600 transition-colors group">
                View All Articles
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourceThumbnail({
  resource,
  index,
  locale,
}: {
  resource: { imagePath: string; title: string; description: string };
  index: number;
  locale: string;
}) {
  return (
    <Link
      href={`/${locale}/blog/${encodeURIComponent(resource.title.toLowerCase().replace(/ /g, "-"))}`}
    >
      <motion.div
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-neutral-100">
          <Image
            src={resource.imagePath}
            alt={resource.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h5 className="text-lg font-bold mb-2 text-black leading-tight group-hover:underline decoration-1 underline-offset-4">
          {resource.title}
        </h5>
        <p className="text-sm text-neutral-500 line-clamp-2">
          {resource.description}
        </p>
      </motion.div>
    </Link>
  );
}
