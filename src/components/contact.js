import * as React from "react"
import Btn from "./btn"

import * as contactStyles from "./contact.module.css"

const Contact = () => {
  return (
    <section className={`${contactStyles.contact}`} id="contact">
      <h5 className={`section-heading ${contactStyles.contact_heading}`}>
        ¿Qué sigue?
      </h5>
      <h3>Contactame</h3>
      <div>
        Flexible, estoy en busca de nuevas oportunidades. Escríbeme ya sea para
        preguntarme algo o saludar, ¡Responderé cuando pueda!.
      </div>

      <Btn style={{ marginTop: `1.45rem` }}>
        <a href="mailto:yhoan.manrique@gmail.com">Saludar!</a>
      </Btn>
    </section>
  )
}

export default Contact
