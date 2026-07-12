const Container = ({ children, className = "" }) => {
  return (
    <section
      className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;