import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.nav}>
      {/* Logo */}
      <div className={headerStyles.logo}></div>
      {/* Menu */}
      <div>
        <ol className={headerStyles.menu}>
          <li className={headerStyles.item}>
            <a href="">Sobre mi</a>{" "}
          </li>
          <li className={headerStyles.item}>
            <a href="">Experiencia</a>
          </li>

          <li className={headerStyles.item}>
            <a href="">Mi trabajo</a>
          </li>
          <li className={headerStyles.item}>
            <a href="">Contactame</a>
          </li>
        </ol>
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
