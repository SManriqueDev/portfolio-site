/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Side from "./side"
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather"
import SocialList from "./social-list"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Side orientation="left">
        <SocialList />
      </Side>
      <Side orientation="right">
        <a href="mailto:yhoan.manrique@gmail.com">yhoan.manrique@gmail.com</a>
      </Side>

      <main style={{ counterReset: "section 0" }}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
