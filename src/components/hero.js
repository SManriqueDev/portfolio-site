import * as React from "react"
import Btn from "./btn"
import * as heroStyles from "./hero.module.css"
import LinkBtn from "./link-btn"
import { useStaticQuery, graphql } from "gatsby"

export const allStrapiAboutQuery = graphql`
  {
    allStrapiAbout {
      nodes {
        strapiId
        resumeUrl
      }
    }
  }
`
const Hero = () => {
  const {
    allStrapiAbout: { nodes },
  } = useStaticQuery(allStrapiAboutQuery)

  const { resumeUrl } = nodes[0]

  return (
    <section className={heroStyles.hero} id="">
      <h6
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--green)",
          marginBottom: `1.45rem`,
        }}
      >
        Hola, mi nombre es
      </h6>
      <h2 style={{ color: "var(--lightest-slate)", fontWeight: "600" }}>
        Sebastian Manrique.
      </h2>
      <h2 style={{ fontWeight: "600" }}>Creador de software web.</h2>
      <p style={{ maxWidth: "540px" }}>
        Soy ingeniero de sistemas en formación y desarrollador de software
        especializado en la creación de experiencias digitales en la web. Me
        gusta el software que busca aportar cambios y valor al mundo.
      </p>

      <LinkBtn style={{ marginTop: `1.45rem` }} href={resumeUrl} target="_blank">
        Descargar CV!
      </LinkBtn>
    </section>
  )
}
export default Hero
