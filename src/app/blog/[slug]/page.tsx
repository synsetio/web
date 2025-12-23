"use client";

import React from "react";
import Layout from "../../components/Layout";
import { content } from "../../data/home-page";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { motion } from "framer-motion";

const ArticlePage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { resources } = content.features;
  const article = resources.find(
    (r) => r.title.toLowerCase().replace(/ /g, "-") === slug,
  );

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <button
              onClick={() => router.back()}
              className="text-neutral-500 hover:text-black underline"
            >
              Go Back
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const recommendedArticles = resources
    .filter((r) => r.title !== article.title)
    .slice(0, 3);

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <motion.div
          className="container mx-auto px-6 py-20 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-black transition-colors mb-8"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Insights
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-10 text-black tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="relative w-full aspect-video mb-16 rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src={article.imagePath}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-neutral prose-lg max-w-none mx-auto prose-headings:font-bold prose-headings:tracking-tight prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-black prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
            <p className="lead text-xl md:text-2xl font-medium text-black mb-12">
              {article.description}
            </p>
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          <div className="mt-32 border-t border-neutral-100 pt-16">
            <h2 className="text-3xl font-bold mb-12 text-black tracking-tight">
              More Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {recommendedArticles.map((recommendedArticle, index) => (
                <Link
                  href={`/blog/${encodeURIComponent(
                    recommendedArticle.title.toLowerCase().replace(/ /g, "-"),
                  )}`}
                  key={index}
                  className="group block"
                >
                  <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-neutral-100">
                    <Image
                      src={recommendedArticle.imagePath}
                      alt={recommendedArticle.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:underline decoration-1 underline-offset-4 leading-tight">
                    {recommendedArticle.title}
                  </h3>
                  <p className="text-sm text-neutral-500 line-clamp-2">
                    {recommendedArticle.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
