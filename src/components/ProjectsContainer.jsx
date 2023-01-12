import "../styles/components/projectscontainer.sass"
import ProjectReactFinancialControl from "../assets/projects/react-financial-control.png"
import { useState } from "react"

const projectsContainer = [
  {
    name: "React Financial Control",
    description:
      "Uma aplicação web, que consiste em um sistema de controle financeiro simples, com adições, deleções, entradas, saídas e um totalizador.",
    techsUsed: "React, styled-components e local-storage",
    image: "img test ? ou gif",
    repo: "https://github.com/paulomonezi/react-financial-control",
  },
  {
    name: "React Financial Control",
    description:
      "Uma aplicação web, que consiste em um sistema de controle financeiro simples, com adições, deleções, entradas, saídas e um totalizador.",
    techsUsed: "React, styled-components e local-storage",
    image: "img test ? ou gif",
    repo: "https://github.com/paulomonezi/react-financial-control",
  },
  {
    name: "React Financial Control",
    description:
      "Uma aplicação web, que consiste em um sistema de controle financeiro simples, com adições, deleções, entradas, saídas e um totalizador.",
    techsUsed: "React, styled-components e local-storage",
    image: "img test ? ou gif",
    repo: "https://github.com/paulomonezi/react-financial-control",
  },
  {
    name: "React Financial Control",
    description:
      "Uma aplicação web, que consiste em um sistema de controle financeiro simples, com adições, deleções, entradas, saídas e um totalizador.",
    techsUsed: "React, styled-components e local-storage",
    image: ProjectReactFinancialControl,
    repo: "https://github.com/paulomonezi/react-financial-control",
  },
]

// react financial control // take a look at readme
// react tech test // take a look at readme
// bashing lil' monsters // take a look at readme
// github searcher // take a look at readme

const ProjectsContainer = () => {
  const [showProjects, setShowProjects] = useState(2)

  const handleLoadMore = () => {
    setShowProjects(showProjects + 2)
  }
  const handleLoadLess = () => {
    setShowProjects(showProjects - 2)
  }

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projectsContainer.slice(0, showProjects).map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <span className="project-techs">
              Tecnologias usadas: {project.techsUsed}
            </span>
            <img className="project-image" src={project.image} />
            <div className="project-button">
              <a href={project.repo} className="btn" target="_blank">
                Ver projeto
              </a>
            </div>
          </div>
        ))}
        <div className="buttons-show-more-less">
          {showProjects < projectsContainer.length && (
            <p className="load-more btn" onClick={handleLoadMore}>
              Carregar mais
            </p>
          )}
          {showProjects > 2 && (
            <p className="load-less btn" onClick={handleLoadLess}>
              Carregar menos
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectsContainer
