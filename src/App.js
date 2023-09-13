import './App.css';
import Sign from './MyComponents/Sign';
import MenuBar from './MyComponents/Menubar';
import Socialmedia from './MyComponents/Socialmedia';
import About from "./MyComponents/About";
import Projects from './MyComponents/Projects';
import Skills from './MyComponents/Skills';
import Experience from './MyComponents/Experience';
import Contact from './MyComponents/Contact';
import Education from './MyComponents/Education';
import Review from './MyComponents/Review';
import Socials from './MyComponents/Socials';
import Footer from './MyComponents/Footer';

function App() {


  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap" rel="stylesheet" />
      </head>
      <div className="App" >
        <MenuBar />
        <Socialmedia />
        <Sign />
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
    </>
  );
}

export default App;
