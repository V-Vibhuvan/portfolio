import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { about } from "../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-[#07101F]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-blue-400 text-sm font-semibold mb-4">
            About
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold whitespace-pre-line leading-tight">
            {about.title}
          </h2>
        </motion.div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-5 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="lg:col-span-3"
          >

            <div className="space-y-8">

              {about.paragraphs.map((paragraph, index) => (

                <p
                  key={index}
                  className="text-gray-400 text-lg leading-9"
                >
                  {paragraph}
                </p>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="lg:col-span-2"
          >

            <h3 className="text-2xl font-semibold mb-8">
              Current Focus
            </h3>

            <div className="grid gap-4">

              {about.focus.map((item) => (

                <div
                  key={item}
                  className="
                  bg-[#101b33]
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  hover:border-blue-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  "
                >

                  <div className="flex items-center gap-4">

                    <HiCheckCircle
                      className="text-blue-400 text-xl"
                    />

                    <span className="text-gray-200 font-medium">
                      {item}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >

          {about.stats.map((stat) => (

            <div
              key={stat.label}
              className="
              bg-[#101b33]
              rounded-2xl
              border
              border-white/10
              p-8
              text-center
              hover:border-blue-500
              transition-all
              duration-300
              hover:-translate-y-2
              "
            >

              <h2 className="text-5xl font-bold text-blue-400">
                {stat.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {stat.label}
              </p>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default About;