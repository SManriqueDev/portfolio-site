import * as React from "react"
import Btn from "./btn"
const Hero = () => (
  <section
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      minHeight: "100vh",
    }}
  >
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
    <p style={{ fontSize: "1.2rem", maxWidth: "540px" }}>
      Soy desarrollador de software, ingeniero de Sistemas en formación y
      apasionado de las nuevas tecnologías. Me gusta el software que busca
      aportar cambios y valor al mundo que me rodea. Desarrollo siempre
      iniciativas y planes de acción innovadores siempre aportando mi lado
      creativo y mi experiencia técnica para alcanzar todos los objetivos de un
      proyecto.
    </p>

    <Btn style={{ marginTop: `1.45rem` }}>Descargar CV!</Btn>
  </section>
)

export default Hero
