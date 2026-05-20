import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import GitHub from './components/GitHub'
import Chat from './components/Chat'
import Footer from './components/Footer'
import CaseStudy from './components/CaseStudy'
import CaseStudies from './components/CaseStudies'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if it's a hash link, if not, scroll to top
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <CaseStudies />
      <Experience />
      <GitHub />
      <Education />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
