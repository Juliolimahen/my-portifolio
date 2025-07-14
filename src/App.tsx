import Footer from "./components/Footer.tsx/Footer"
import Navbar from "./components/NavBar/NavBar"
import AboutSection from "./pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./pages/Home/sections/HeroSection/HeroSection"
import ProjectsSection from "./pages/Home/sections/ProjectsSection/ProjectsSection"

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
