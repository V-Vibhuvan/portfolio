import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";

const RoleSwitcher = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % portfolio.roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={portfolio.roles[index]}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
          text-2xl
          lg:text-3xl
          font-semibold
          text-blue-400
          "
        >
          {portfolio.roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default RoleSwitcher;