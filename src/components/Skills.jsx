import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-blue-400 text-sm font-semibold mb-4">
            Skills
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold">
            TOOLS I BUILD WITH
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="
              rounded-3xl
              border
              border-white/10
              bg-[#101b33]
              p-8
              hover:border-blue-500
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((item) => (

                  <span
                    key={item}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-[#050816]
                    border
                    border-white/10
                    text-gray-300
                    text-sm
                    hover:border-blue-500
                    transition
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;