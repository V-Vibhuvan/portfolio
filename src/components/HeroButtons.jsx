import { HiArrowRight, HiOutlineDownload } from "react-icons/hi";
import { portfolio } from "../data/portfolio";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-5">

      {/* Primary Button */}

      <a
        href="#projects"
        className="
        group
        inline-flex
        items-center
        gap-3
        rounded-xl
        bg-blue-600
        px-7
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-500
        hover:shadow-[0_12px_40px_rgba(59,130,246,.35)]
        "
      >
        View Projects

        <HiArrowRight
          className="
          text-lg
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
        />
      </a>

      {/* Secondary Button */}

      <a
        href={portfolio.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="
        group
        inline-flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        px-7
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:bg-blue-500/10
        hover:shadow-[0_12px_40px_rgba(59,130,246,.2)]
        "
      >
        Resume

        <HiOutlineDownload
          className="
          text-lg
          transition-transform
          duration-300
          group-hover:translate-y-1
        "
        />
      </a>

    </div>
  );
};

export default HeroButtons;