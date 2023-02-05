import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext.jsx"

import "../styles/components/maincontent.sass"

import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TechsContainer from "./TechsContainer"

const MainContent = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main id="main-content" style={{background: theme.bgColor}}>
      <AboutContainer />
      <TechsContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent
