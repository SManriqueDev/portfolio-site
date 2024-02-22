import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import AboutMe from "../components/about-me"
import Jobs from "../components/jobs"
import Contact from "../components/contact"
import FeaturedProjects from '../components/featured-projects'

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
