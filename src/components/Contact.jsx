import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope size={26} />,
    title: "Email",
    subtitle: "Let's discuss opportunities",
    value: "vibhuvanv@gmail.com",
    link: "mailto:vibhuvanv@gmail.com",
  },
  {
    icon: <FaLinkedin size={26} />,
    title: "LinkedIn",
    subtitle: "Connect professionally",
    value: "View Profile",
    link: "https://www.linkedin.com/in/vibhuvan-vibhu-057a09300/",
  },
  {
    icon: <FaGithub size={26} />,
    title: "GitHub",
    subtitle: "Explore my projects",
    value: "github.com/V-Vibhuvan",
    link: "https://github.com/V-Vibhuvan",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#07101F] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-blue-600/20 blur-[160px] rounded-full -top-20 -left-20" />

      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-[170px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <p className="uppercase tracking-[5px] text-blue-400 font-semibold">

            Contact

          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">

            Let's Build Something Great Together

          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">

            I'm currently seeking Software Engineering Internships and
            Full-Time opportunities. Whether you'd like to discuss a
            project, collaborate on innovative ideas, or simply connect,
            I'd be happy to hear from you.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {contacts.map((item) => (

            <motion.a

              key={item.title}

              href={item.link}

              target="_blank"

              rel="noreferrer"

              whileHover={{ y: -8 }}

              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-[#101B33]
              p-8
              transition-all
              duration-300
              hover:border-blue-500
              "

            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-500/15
                flex
                items-center
                justify-center
                text-blue-400
                mb-6
                group-hover:scale-110
                transition
                "
              >

                {item.icon}

              </div>

              <h3 className="text-2xl font-semibold">

                {item.title}

              </h3>

              <p className="text-gray-500 mt-3">

                {item.subtitle}

              </p>

              <p className="text-blue-400 mt-6 break-all">

                {item.value}

              </p>

            </motion.a>

          ))}

        </div>

        {/* CTA */}

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ delay: .2 }}

          className="text-center mt-24"

        >

          <a

            href="mailto:vibhuvanv@gmail.com"

            className="
            inline-flex
            items-center
            gap-4
            px-10
            py-5
            rounded-full
            bg-blue-600
            hover:bg-blue-700
            text-lg
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            "

          >

            Let's Connect

            <FaArrowRight />

          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;