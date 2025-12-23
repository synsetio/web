"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import MagneticButton from "./react-bits/MagneticButton";

export default function CallToActionContact() {
  const t = useTranslations("HomePage.callToAction");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitMessage(t("form.success"));
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage(t("form.error"));
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setSubmitMessage(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <motion.h3
            className="text-5xl md:text-6xl font-bold mb-8 text-black tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("title")}
          </motion.h3>

          <motion.p
            className="mb-6 max-w-2xl mx-auto text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("p1")}
          </motion.p>
          <motion.p
            className="mb-6 max-w-2xl mx-auto text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("p2")}
          </motion.p>
        </div>

        <motion.div
          className="bg-neutral-50 p-8 md:p-12 rounded-3xl border border-neutral-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-black tracking-tight">
            {t("form.title")}
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider"
                >
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider"
                >
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider"
              >
                {t("form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-4 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                required
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("form.submitting") : t("form.submit")}
              </MagneticButton>
            </div>

            {submitMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-6 text-center text-sm font-medium ${
                  submitMessage === t("form.success")
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
