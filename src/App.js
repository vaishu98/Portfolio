import './App.css';
import React, { useState, useEffect } from 'react';
import Sign from './MyComponents/Sign';
import MenuBar from './MyComponents/Menubar';
import Socialmedia from './MyComponents/Socialmedia';
import About from "./MyComponents/About";
import Projects from './MyComponents/Projects';
import Background from "./Assets/seabg.png";
import Plainbg from "./Assets/plainbg.png";
import Skills from './MyComponents/Skills';
import Experience from './MyComponents/Experience';
import Contact from './MyComponents/Contact';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(Plainbg);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackgroundImage(Background);
    }, 5500);
    return () => clearTimeout(timeout);
  }, []);

  const myStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "contain",
    zIndex: "-2",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
      <div className="App" style={myStyle}>
        <MenuBar />
        <Socialmedia />
        <Sign />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
