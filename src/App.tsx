import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/project/Project";
import Contact from "./components/Contact/Contact"
import Footer from "./components/layout/Footer";
import ScrollToTopButton from "./components/utils/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
