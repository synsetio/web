"use client";

import React from "react";
import Layout from "../../components/Layout";
import { content } from "../../data/home-page";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "../../components/react-bits/SpotlightCard";
import Squares from "../../components/react-bits/Squares";

const Blog = () => {
  const { resources } = content.features;

  return (
    <Layout>
      <div className="relative bg-white min-h-screen">
        <div className="absolute inset-0 z-0 h-[50vh]">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={50}
            borderColor="#f0f0f0"
            hoverFillColor="#f5f5f5"
          />
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-24 text-black text-center tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Insights
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${encodeURIComponent(
                    resource.title.toLowerCase().replace(/ /g, "-"),
                  )}`}
                  className="block h-full"
                >
                  <SpotlightCard className="h-full flex flex-col border-neutral-200 bg-white hover:shadow-xl transition-all duration-500 p-0">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={resource.imagePath}
                        alt={resource.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 transform hover:scale-105"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h2 className="text-2xl font-bold text-black mb-4 leading-tight">
                        {resource.title}
                      </h2>
                      <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">
                        {resource.description}
                      </p>
                      <span className="inline-flex items-center text-black font-semibold hover:opacity-70 transition-opacity">
                        Read Article
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
