import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AIAssistant from "./components/AIAssistant.jsx";
import Explore from "./components/Explore.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div id="home">
      <Navbar />

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-shape-circle" aria-hidden="true"></div>
            <div className="hero-shape-dots" aria-hidden="true"></div>
            <div className="hero-shape-line" aria-hidden="true">
              <span></span>
            </div>
            <Hero />
            <p className="hero-tagline">
              Turning ideas
              <br />
              <span>into real products.</span>
            </p>
          </div>

          <div className="hero-right">
            <AIAssistant />
          </div>
        </div>
      </section>

      <section className="section-block bg-cream">
        <div className="section-wrap section-pad">
          <Explore />
        </div>
      </section>

      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
