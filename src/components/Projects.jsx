import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
 import LogisticsCard from "./LogisticsCard";

const Projects = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="py-32 bg-[#07101F]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <p
            className="
            uppercase
            tracking-[5px]
            text-blue-400
            text-sm
            font-semibold
            "
          >
            Portfolio
          </p>

          <h2
            className="
            text-5xl
            lg:text-6xl
            font-bold
            mt-4
            "
          >
            FEATURED PROJECTS
          </h2>

          <p
            className="
            text-gray-400
            max-w-3xl
            mx-auto
            mt-8
            text-lg
            leading-8
            "
          >
            A collection of full-stack and AI-powered applications
            built to explore modern software engineering,
            backend development, real-time systems, and
            applied artificial intelligence.
          </p>

        </motion.div>

        {/* Featured */}

        <div className="mt-24">

          {featuredProjects.map((project, index) => (

            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />

          ))}

        </div>
        {otherProjects.map((project) => (

            <LogisticsCard
                key={project.id}
                project={project}
            />

        ))}
        

      </div>
    </section>
  );
};

export default Projects;