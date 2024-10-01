import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/Skill"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect } from 'react';
import Aos from 'aos';
import './index.css'
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({
      duration:500,
      easing:"ease-in-sine",
    })
  })
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  )
}

export default App
