import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const AboutContainer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className="about-container">
      <h2 style={{color: theme.textColor}}>Sobre</h2>
      <p style={{color: theme.textColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore, magnam incidunt voluptatibus saepe, dolorum assumenda cumque eum et perspiciatis architecto, fugit corporis illo aspernatur eligendi? Fugiat perspiciatis repellendus, unde doloribus nulla ipsam voluptas, eius earum beatae officia velit itaque possimus, odit repellat! Culpa sit dignissimos distinctio dolorem sunt ad debitis quo repudiandae natus neque doloribus reprehenderit, autem quas aspernatur corporis molestiae necessitatibus porro! Quidem molestiae ducimus praesentium, natus ipsum quas sed suscipit quia, perspiciatis, eligendi autem eius cupiditate et placeat facere quae aliquam! Dolore doloribus mollitia veritatis sed totam nemo odit deserunt sapiente dignissimos incidunt reiciendis ipsam libero delectus sequi beatae dicta quae dolorem deleniti culpa rerum, voluptatibus soluta. Repellendus quas a minima enim amet earum suscipit aliquid dolorum, illum, itaque labore molestiae quam quae modi non eligendi tempora facilis ipsam aspernatur dolore ex quod animi! Dicta veniam delectus assumenda saepe nobis ducimus facilis fugit eos ea explicabo fuga autem molestiae sequi ad dolorum odio necessitatibus est ratione cum aut temporibus, ullam labore. Delectus assumenda velit placeat voluptate beatae dicta, quia sit optio fuga dolores molestias doloremque perspiciatis accusantium doloribus quae quod tempore esse enim amet autem eius, aliquam architecto! Qui, error! Tenetur voluptatum voluptates sequi odit, quidem enim?</p>
    </section>
  )
}

export default AboutContainer

