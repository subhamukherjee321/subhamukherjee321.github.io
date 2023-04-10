import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Skills from '../Pages/Skills'
import Style from "./Main.module.css"
import ScrollToTop from "../Components/ScrollToTop";
import Github from '../Pages/Github'

export default function Main() {
  return (
    <>
      <div className={Style.container}>
          <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Github />
            <ScrollToTop />
          <Footer />
      </div>
    </>
  )
}
