import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Highlights />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;