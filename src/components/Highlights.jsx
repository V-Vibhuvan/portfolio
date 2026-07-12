import { motion } from "framer-motion";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { highlights } from "../data/highlights";

const Highlights = () => {
  return (
    <section className="py-32 bg-[#07101F]">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-400 text-sm font-semibold mb-4">
            Engineering
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold">
            HOW I BUILD SOFTWARE
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {highlights.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="
              p-8
              rounded-3xl
              border
              border-white/10
              bg-[#101b33]
              hover:border-blue-500
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <HiArrowTrendingUp className="text-blue-400 text-3xl mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Highlights;