import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import TabButton from "./tab-button"
import * as jobsStyles from "./jobs.module.css"

export const allStrapiFeaturedProjectsQuery = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        title
        description
        url
        github
        strapiId
        stack {
          id
          name
        }
      }
    }
  }
`

const FeaturedProjects = () => {
  const {
    allStrapiProjects: { nodes: featuredProjects },
  } = useStaticQuery(allStrapiFeaturedProjectsQuery)
  console.log("🚀 ~ file: jobs.js ~ line 25 ~ Jobs ~ nodes", featuredProjects)

  return (
    <section
      className=""
      id="projects"
      style={{
        maxWidth: "700px",
      }}
    >
      <h4 className="section-heading">Algunas cosas que he construido</h4>
      {featuredProjects.map(project => (
        <div key={project.strapiId}>{project.title}</div>
      ))}
    </section>
  )
}

export default FeaturedProjects
