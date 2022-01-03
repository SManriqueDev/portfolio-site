import * as React from "react"
import * as aboutStyles from "./about-me.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const allStrapiTechnologiesQuery = graphql`
  {
    allStrapiTechnologies {
      nodes {
        name
        strapiId
      }
    }
  }
`

const AboutMe = () => {
  const {
    allStrapiTechnologies: { nodes: technologies },
  } = useStaticQuery(allStrapiTechnologiesQuery)
  console.log(
    "🚀 ~ file: about-me.js ~ line 21 ~ AboutMe ~ technologies",
    technologies
  )

  return (
    <section className="section">
      <h4 className="section-heading">Sobre mi</h4>
      <div className={aboutStyles.grid}>
        <div>
          <p>
            ¡Hola! Mi nombre es Sebastian y disfruto mucho crear software que
            aporta cambios y valor al mundo. Mi interés en el desarrollo comenzó
            en 2014 en los inicios de mi carrera, descubrí un universo de cosas
            por aprender y tomé gran interés en el desarrollo web, construyendo
            mi primera página web usando HTML, CSS & JavaScript en un proyecto
            de aprendizaje.
          </p>
          <p>
            Avance rápido hasta el día de hoy, y tuve el privilegio de trabajar
            en una{" "}
            <a target="_new" href="https://shf.com.co/">
              empresa de desarrollo emergente
            </a>
            . Mi enfoque principal en estos días es construir productos
            accesibles y experiencias digitales en una variedad de tecnologías.
          </p>
          <p>
            Soy estudiante de Ingeniería de Sistemas de la
            <a target="_new" href="https://www.uis.edu.co">
              Universidad Industrial de Santander
            </a>{" "}
            y actualmente soy desarrollador de software de{" "}
            <a href="https://shf.com.co/" target="_new">
              SHF S.A.S
            </a>
            .
          </p>

          <p>
            A continuación, se muestran algunas tecnologías con las que he
            estado trabajando recientemente:
          </p>
          <ul className={aboutStyles.skills_list}>
            {technologies.map(technology => (
              <li key={technology.strapiId}>{technology.name}</li>
            ))}
            {/* <li>JavaScript (ES6+)</li>
            <li>Vue</li>
            <li>NuxtJS</li>
            <li>Node</li>
            <li>Typescript</li>
            <li>NestJS</li>
            <li>Laravel</li>
            <li>GraphQL</li>
            <li>Docker</li>
            <li>Dart</li>
            <li>Flutter</li> */}
          </ul>
        </div>

        <div className={aboutStyles.profile_pic}>
          <div className={aboutStyles.profile_wrapper}>
            <StaticImage
              src="../images/profile-pic.jpeg"
              width={300}
              height={300}
              className={aboutStyles.img}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
