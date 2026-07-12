import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { portfolio } from "../data/portfolio";
import HeroButtons from "./HeroButtons";
import RoleSwitcher from "./RoleSwitcher";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background Glow */}

      <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-[-120px] bottom-10 h-[320px] w-[320px] rounded-full bg-sky-500/10 blur-[120px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[5px] text-blue-400 text-xs sm:text-sm font-semibold mb-8">

              {portfolio.status}

            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-[88px] font-bold leading-[1.02] tracking-[-0.04em] whitespace-pre-line text-white">
              {portfolio.headline}

            </h1>

            <div className="mt-8">

              <RoleSwitcher />

            </div>

            <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">

              {portfolio.intro}

            </p>

            <div className="mt-10">

              <HeroButtons />

            </div>

            {/* Tech Stack */}

            <div className="mt-14 flex flex-wrap gap-3">

              {portfolio.tech.map((tech) => (

                <span
                  key={tech}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#111c33]
                  border
                  border-white/10
                  text-sm
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:-translate-y-1
                  hover:shadow-[0_0_20px_rgba(59,130,246,.25)]
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Blue Glow */}

              <div className="absolute -inset-6 rounded-[40px] bg-blue-500/20 blur-3xl"></div>

              {/* Decorative Border */}

              <div className="absolute -inset-2 rounded-[34px] border border-blue-500/20"></div>

              {/* Image */}

              <img
                src={portfolio.profileImage}
                alt={portfolio.name}
                className="
                relative
                w-[320px]
                sm:w-[380px]
                lg:w-[430px]
                h-auto
                rounded-[30px]
                object-cover
                border
                border-white/10
                shadow-[0_20px_80px_rgba(0,0,0,.45)]
                hover:scale-[1.02]
                transition-all
                duration-500
                "
              />

              {/* Floating Card */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                -bottom-6
                -left-6
                backdrop-blur-xl
                bg-[#0F172A]/80
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                shadow-xl
                "
              >
                <p className="text-3xl font-bold text-blue-400">
                  {portfolio.stats.projects}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Featured Engineering Projects
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        text-blue-400
        "
      >
        <HiArrowDown size={28} />
      </motion.a>

    </section>
  );
};

export default Hero;