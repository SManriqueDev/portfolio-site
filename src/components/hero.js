import * as React from "react"
import Btn from "./btn"
import * as heroStyles from "./hero.module.css"
const Hero = () => (
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
      especializado en la creación de experiencias digitales en la web. Me gusta
      el software que busca aportar cambios y valor al mundo.
    </p>

    <Btn style={{ marginTop: `1.45rem` }}>Descargar CV!</Btn>
  </section>
)

export default Hero
