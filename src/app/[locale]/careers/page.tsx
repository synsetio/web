"use client";

import React from "react";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { positions } from "../../data/positions";

export default function CareersPage() {
  const locale = useLocale();
  const t = useTranslations("Careers");

  const values = [
    {
      title: t("values.sovereignty.title"),
      description: t("values.sovereignty.description"),
    },
    {
      title: t("values.execution.title"),
      description: t("values.execution.description"),
    },
    {
      title: t("values.transparency.title"),
      description: t("values.transparency.description"),
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mb-16 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
              {t("valuesTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div key={i} className="border-l-2 border-black pl-6">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
              {t("positionsTitle")}
            </h2>
            <div className="space-y-4">
              {positions.map((position) => (
                <Link
                  key={position.id}
                  href={`/${locale}/careers/${position.id}`}
                  className="group block border border-neutral-200 rounded-lg p-6 hover:border-black transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1 group-hover:underline">
                        {position.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-2">
                        {position.description}
                      </p>
                      <div className="flex gap-3 text-xs">
                        <span className="bg-neutral-100 px-3 py-1 rounded-full text-neutral-600">
                          {position.type}
                        </span>
                        <span className="bg-neutral-100 px-3 py-1 rounded-full text-neutral-600">
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 bg-black text-white px-6 py-2 rounded-lg text-sm font-medium group-hover:bg-neutral-800 transition-colors text-center">
                      {t("viewDetails")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mt-20 bg-neutral-50 rounded-2xl p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              {t("noRole.title")}
            </h2>
            <p className="text-neutral-600 mb-6 max-w-lg mx-auto">
              {t("noRole.description")}
            </p>
            <Link
              href={`/${locale}#contact`}
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              {t("noRole.cta")}
            </Link>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
