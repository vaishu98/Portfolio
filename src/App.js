import './App.css';
import Navbar from './MyComponents/Navbar';
import Sign from './MyComponents/Sign';
import Socialmedia from "./MyComponents/Socialmedia";
import About from "./MyComponents/About";
import Skills from "./MyComponents/Skills";
import Education from "./MyComponents/Education";
import Experience from "./MyComponents/Experience";
import Projects from "./MyComponents/Projects";
import Socials from "./MyComponents/Socials";
import Review from "./MyComponents/Review";
import Contact from "./MyComponents/Contact";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sign />
      <Socialmedia />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Socials />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
