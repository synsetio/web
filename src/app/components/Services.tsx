import { motion } from "framer-motion";
import { content } from "../data/home-page";

export default function Services() {
  const { title, offerings } = content.services;

  return (
    <section id="vision" className="py-24 bg-[#0A2463] text-white">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-4xl font-bold mb-16 text-[#21CE99] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-12">
          {offerings.map((offering, index) => (
            <OfferingCard key={index} offering={offering} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferingCard({
  offering,
  index,
}: {
  offering: {
    title: string;
    description: string;
  };
  index: number;
}) {
  return (
    <motion.div
      className="bg-[#0D2E7D] rounded-xl shadow-xl p-8"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4 className="text-2xl font-semibold mb-4 text-[#21CE99]">
        {offering.title}
      </h4>
      <p className="text-[#F5F5F5] text-lg">{offering.description}</p>
    </motion.div>
  );
}
