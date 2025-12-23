"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  positionTitle: string;
}

export default function ApplicationModal({
  isOpen,
  onClose,
  positionTitle,
}: ApplicationModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("position", positionTitle);
      formData.append("message", formState.message);
      if (resume) {
        formData.append("resume", resume);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setResume(null);
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setFormState({ name: "", email: "", message: "" });
    setResume(null);
    setSubmitStatus(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={resetAndClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="sticky top-0 bg-white border-b border-neutral-100 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Apply for {positionTitle}
              </h2>
              <button
                onClick={resetAndClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label
                  htmlFor="apply-name"
                  className="block text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="apply-name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="apply-email"
                  className="block text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="apply-email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="apply-resume"
                  className="block text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider"
                >
                  Resume
                </label>
                <input
                  type="file"
                  id="apply-resume"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 border-dashed rounded-lg hover:border-black transition-colors text-left"
                >
                  {resume ? (
                    <span className="text-black">{resume.name}</span>
                  ) : (
                    <span className="text-neutral-500">
                      Click to upload PDF, DOC, or DOCX
                    </span>
                  )}
                </button>
              </div>

              <div>
                <label
                  htmlFor="apply-message"
                  className="block text-sm font-semibold text-neutral-900 mb-2 uppercase tracking-wider"
                >
                  Cover Letter
                </label>
                <textarea
                  id="apply-message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us why you're excited about this role..."
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>

              {submitStatus && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center text-sm font-medium ${
                    submitStatus === "success"
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {submitStatus === "success"
                    ? "Application sent successfully!"
                    : "Failed to send. Please try again."}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
