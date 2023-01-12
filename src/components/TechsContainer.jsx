import { useState } from "react"
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiBootstrap,
  DiGit,
  DiSass,
} from "react-icons/di"

import {
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiRedux,
  SiDotnet,
} from "react-icons/si"

import { MdOutlineFrontHand } from "react-icons/md"

import "../styles/components/techscontainer.sass"

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "" },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "bootstrap", name: "Boostrap", icon: <DiBootstrap /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "tailwind", name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "redux", name: "Redux", icon: <SiRedux /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "dotnet", name: ".NET", icon: <SiDotnet /> },
  { id: "jest", name: "Jest", icon: <SiJest /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "stop", name: "Hold on", icon: <MdOutlineFrontHand /> },
  { id: "stop", name: "Hold on", icon: <MdOutlineFrontHand /> },
  { id: "stop", name: "Hold on", icon: <MdOutlineFrontHand /> },
  { id: "stop", name: "Hold on", icon: <MdOutlineFrontHand /> },
  { id: "stop", name: "Hold on", icon: <MdOutlineFrontHand /> },
  { id: "stop", name: "Hold on", icon: <MdOutlineFrontHand /> },
]

const TechsContainer = () => {
  const [showTechs, setShowTechs] = useState(4)

  const handleLoadMore = () => {
    setShowTechs(showTechs + 4)
  }
  const handleLoadLess = () => {
    setShowTechs(showTechs - 4)
  }

  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.slice(0, showTechs).map((tech, index) => (
          <div className="technology-card" id={tech.id} key={index}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>
                {tech.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                alias.
              </p>
            </div>
          </div>
        ))}
      </div>
      {showTechs === 8 && <div>This is a custom div</div>}
      {showTechs === 12 && <div>12??</div>}
      {showTechs === 16 && <div>16??</div>}
      {showTechs === 20 && <div>20??</div>}
      <div className="buttons-show-more-less">
        {showTechs < technologies.length && (
          <p className="load-more btn" onClick={handleLoadMore}>
            Carregar mais
          </p>
        )}
        {showTechs > 4 && (
          <p className="load-less btn" onClick={handleLoadLess}>
            Carregar menos
          </p>
        )}
      </div>
    </section>
  )
}

export default TechsContainer
