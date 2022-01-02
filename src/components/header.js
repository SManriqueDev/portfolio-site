import * as React from "react"
import PropTypes from "prop-types"
import Btn from "../components/btn"
import * as headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.nav}>
      {/* Logo */}
      <div className={headerStyles.logo}></div>
      {/* Menu */}
      <div className={headerStyles.menu}>
        <ol>
          <li className={headerStyles.item}>
            <a href="/#about">Sobre mi</a>{" "}
          </li>
          <li className={headerStyles.item}>
            <a href="/#jobs">Experiencia</a>
          </li>

          <li className={headerStyles.item}>
            <a href="/#projects">Mi trabajo</a>
          </li>
          <li className={headerStyles.item}>
            <a href="/#contact">Contactame</a>
          </li>
        </ol>
        <Btn style={{ marginLeft: "15px" }}>Currículo</Btn>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
