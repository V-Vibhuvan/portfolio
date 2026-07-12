const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <p className="uppercase tracking-[6px] text-blue-400 text-sm font-medium">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        {title}
      </h2>

      <div className="w-20 h-1 bg-blue-500 rounded-full mt-5"></div>
    </div>
  );
};

export default SectionTitle;