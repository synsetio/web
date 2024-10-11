import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { content } from "../data/home-page";

export default function Features() {
  const { title, items, conclusion, resources } = content.features;

  return (
    <section id="features" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-4xl font-bold mb-16 text-[#0A2463] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        <motion.p
          className="text-[#333333] leading-relaxed max-w-3xl mx-auto text-center mt-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {conclusion}
        </motion.p>
        <div className="mt-16">
          <h4 className="text-2xl font-bold mb-8 text-[#0A2463] text-center">Resources</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <ResourceThumbnail key={index} resource={resource} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-block bg-[#21CE99] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1AB589] transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: { imagePath: string; title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="relative w-full h-48">
        <Image
          src={feature.imagePath}
          alt={feature.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-2xl font-semibold mb-4 text-[#0A2463]">
          {feature.title}
        </h4>
        <p className="text-[#333333] flex-grow">{feature.description}</p>
      </div>
    </motion.div>
  );
}

function ResourceThumbnail({
  resource,
  index,
}: {
  resource: { imagePath: string; title: string; description: string };
  index: number;
}) {
  return (
    <Link href={`/blog/${encodeURIComponent(resource.title.toLowerCase().replace(/ /g, '-'))}`}>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative w-full h-32">
          <Image
            src={resource.imagePath}
            alt={resource.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="text-sm font-semibold mb-2 text-[#0A2463] truncate">
            {resource.title}
          </h5>
          <p className="text-xs text-[#333333] line-clamp-2 flex-grow">
            {resource.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
