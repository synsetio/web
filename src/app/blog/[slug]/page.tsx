"use client";

import React from "react";
import Layout from "../../components/Layout";
import { content } from "../../data/home-page";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const ArticlePage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { resources } = content.features;
  const article = resources.find(
    (r) => r.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  const recommendedArticles = resources
    .filter((r) => r.title !== article.title)
    .slice(0, 3);

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <button
            onClick={() => router.back()}
            className="mb-8 text-blue-600 hover:text-blue-800 transition-colors text-sm"
          >
            &larr; Back to Articles
          </button>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            {article.title}
          </h1>
          <div className="relative w-full h-80 mb-8">
            <Image
              src={article.imagePath}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            {article.description}
          </p>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-blue-600">
              Recommended Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedArticles.map((recommendedArticle, index) => (
                <Link
                  href={`/blog/${encodeURIComponent(
                    recommendedArticle.title.toLowerCase().replace(/ /g, "-")
                  )}`}
                  key={index}
                  className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={recommendedArticle.imagePath}
                      alt={recommendedArticle.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">
                      {recommendedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {recommendedArticle.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
