import { motion } from "framer-motion";
import { FaGithub, FaJava } from "react-icons/fa";

const LogisticsCard = ({ project }) => {

    return (
        <motion.section

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="py-24"
        >
            <div
                className="
                rounded-3xl
                border
                border-orange-500/30
                bg-[#111827]
                overflow-hidden
                "
            >

                {/* Hero Image */}
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="
                    w-full
                    aspect-video
                    object-cover
                    "
                />
                <div className="p-10">
                    {/* Badge */}
                    <span
                        className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2
                        rounded-full
                        bg-orange-500/10
                        border
                        border-orange-500/30
                        text-orange-400
                        mb-6
                        "
                    >
                        <FaJava />
                        Core Computer Science Project (My First Project)
                    </span>
                    <h2 className="text-5xl font-bold">
                        {project.title}
                    </h2>
                    <p className="text-orange-400 mt-3 text-xl">
                        {project.subtitle}
                    </p>
                    <p className="text-gray-400 leading-8 mt-8">
                        {project.description}
                    </p>
                    {/* Core Concepts */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold mb-5">
                            Core Concepts
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-orange-500/10
                                    border
                                    border-orange-500/30
                                    text-orange-300
                                    text-sm
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Engineering */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-5">
                            Engineering Highlights
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.engineeringHighlights.map((item) => (
                                <div
                                    key={item}
                                    className="
                                    rounded-xl
                                    border
                                    border-orange-500/20
                                    bg-orange-500/5
                                    p-5
                                    "
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Button */}
                    <div className="mt-12">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="
                            inline-flex
                            items-center
                            gap-3
                            bg-orange-500
                            hover:bg-orange-600
                            transition
                            px-7
                            py-4
                            rounded-xl
                            "
                        >

                            <FaGithub />
                            View Source Code
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );

};

export default LogisticsCard;