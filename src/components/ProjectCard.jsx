import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import ImageGallery from "./ImageGallery";

const ProjectCard = ({ project, index }) => {
  const reverse = index % 2 !== 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-28"
    >
      <div
        className={`grid lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE GALLERY */}

        <ImageGallery
          images={project.images}
          title={project.title}
        />

        {/* CONTENT */}

        <div>

          <span
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-blue-500/15
            border
            border-blue-500/30
            text-blue-300
            text-sm
            font-medium
            mb-5
            "
          >
            {project.category}
          </span>

          <h2 className="text-5xl font-bold">
            {project.title}
          </h2>

          <p className="text-blue-400 text-xl mt-3">
            {project.subtitle}
          </p>

          <p
            className="
            text-gray-400
            leading-8
            mt-8
            "
          >
            {project.description}
          </p>

          {/* Engineering */}

          <div className="mt-10">

            <h3
              className="
              text-2xl
              font-semibold
              mb-5
              "
            >
              Engineering Highlights
            </h3>

            <div className="space-y-4">

              {project.engineeringHighlights.map((item) => (

                <div
                  key={item}
                  className="flex gap-3"
                >
                  <span className="text-blue-400 mt-1">
                    ✓
                  </span>

                  <p className="text-gray-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Tech */}

          <div className="mt-10">

            <h3
              className="
              text-2xl
              font-semibold
              mb-5
              "
            >
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#101b33]
                  border
                  border-white/10
                  text-gray-300
                  text-sm
                  hover:border-blue-500
                  transition
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-5 mt-12">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              transition
              "
            >
              <FaGithub />
              GitHub
            </a>

            {project.live && (

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-xl
                border
                border-blue-500
                hover:bg-blue-500/10
                transition
                "
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            )}

          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default ProjectCard;