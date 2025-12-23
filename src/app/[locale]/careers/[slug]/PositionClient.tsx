"use client";

import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { getPositionById } from "../../../data/positions";
import { notFound } from "next/navigation";
import ApplicationModal from "../../../components/ApplicationModal";
import { useTranslations } from "next-intl";

interface Props {
  slug: string;
  locale: string;
}

export default function PositionClient({ slug, locale }: Props) {
  const position = getPositionById(slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("Careers.position");

  if (!position) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center text-neutral-500 hover:text-black transition-colors mb-8"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t("allPositions")}
            </Link>

            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-600">
                {position.department}
              </span>
              <span className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-600">
                {position.type}
              </span>
              <span className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-600">
                {position.location}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
              {position.title}
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed mb-10">
              {position.about}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors mb-16"
            >
              {t("applyFor")}
            </button>
          </motion.div>

          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Section title={t("sections.responsibilities")}>
              <ul className="space-y-3">
                {position.responsibilities.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </ul>
            </Section>

            <Section title={t("sections.requirements")}>
              <ul className="space-y-3">
                {position.requirements.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </ul>
            </Section>

            <Section title={t("sections.niceToHave")}>
              <ul className="space-y-3">
                {position.niceToHave.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </ul>
            </Section>

            <Section title={t("sections.benefits")}>
              <ul className="space-y-3">
                {position.benefits.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </ul>
            </Section>
          </motion.div>

          <motion.div
            className="mt-16 pt-12 border-t border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              {t("readyToApply")}
            </h2>
            <p className="text-neutral-600 mb-6">{t("readyDescription")}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              {t("applyNow")}
            </button>
          </motion.div>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        positionTitle={position.title}
      />
    </Layout>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-neutral-700">
      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
      <span>{children}</span>
    </li>
  );
}
