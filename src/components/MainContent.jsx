import '../styles/components/maincontent.sass'

import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechsContainer from './TechsContainer'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TechsContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent