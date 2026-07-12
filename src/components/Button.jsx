const Button = ({
  children,
  href = "#",
  primary = false,
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300

      ${
        primary
          ? "bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          : "border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
      }`}
    >
      {children}
    </a>
  );
};

export default Button;