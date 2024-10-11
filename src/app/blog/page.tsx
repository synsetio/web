"use client";

import React from "react";
import Layout from "../components/Layout";
import { content } from "../data/home-page";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const { resources } = content.features;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-white">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
          Insights & Resources
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {resources.map((resource, index) => (
            <Link
              href={`/blog/${encodeURIComponent(
                resource.title.toLowerCase().replace(/ /g, "-")
              )}`}
              key={index}
              className="clickable"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="relative w-full h-64">
                  <Image
                    src={resource.imagePath}
                    alt={resource.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <h2 className="absolute bottom-4 left-4 text-2xl font-semibold text-white z-10">
                    {resource.title}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
