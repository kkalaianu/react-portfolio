import React from 'react';
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Titlemessage from "./components/Titlemessage/Titlemessage";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Topcontainer from "./components/Topcontainer/Topcontainer";
 import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skill from './views/skills/Skill';
import Projects from "./views/projects/projects";
import Contact from "./views/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <NavBar />
    <Home />
     <Titlemessage />
      <Topcontainer />
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade left duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      
        <div>
          <Container className="container-box rounded">
            <Fade right duration={2000}>
              <Skill/>
            </Fade>
          </Container>
          </div>

          <div>
          <Container className="container-box rounded">
            <Slide bottom duration={1000}>
              <hr />
              <Projects />
            </Slide>
          </Container>
        </div>

        <div>
        <Container className="container-box rounded">
          <Fade bottom duration={2000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />

    
    </div>


          

      
      
        
        


        
      
    
  )
}

export default App


