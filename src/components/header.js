import * as React from "react"
import PropTypes from "prop-types"
import LinkBtn from "../components/link-btn"
import * as headerStyles from "./header.module.css"
import Logo from "../components/personal-logo"
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
const Header = ({ siteTitle }) => {
  const {
    allStrapiAbout: { nodes },
  } = useStaticQuery(allStrapiAboutQuery)

  const { resumeUrl } = nodes[0]

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav}>
        {/* Logo */}
        <div className={headerStyles.logo}>
          <a href="#about">
            <Logo />
          </a>
        </div>
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
          <LinkBtn
            style={{ marginLeft: "15px" }}
            href={resumeUrl}
            target="_blank"
          >
            Currículo
          </LinkBtn>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
