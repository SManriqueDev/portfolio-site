import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/common/seo"
import Hero from "../components/sections/hero"
import AboutMe from "../components/sections/about-me"
import Jobs from "../components/sections/jobs"
import Contact from "../components/sections/contact"
import FeaturedProjects from "../components/sections/featured-projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    <Hero />
    <AboutMe />
    <Jobs />
    <FeaturedProjects />
    <Contact />
  </Layout>
)

export default IndexPage
