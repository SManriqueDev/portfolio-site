import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../project"

export const allStrapiFeaturedProjectsQuery = graphql`
  {
    allStrapiFeaturedProjects(sort: { fields: id, order: DESC }) {
      nodes {
        title
        description
        url
        github
        strapiId
        picture {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
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
    allStrapiFeaturedProjects: { nodes: featuredProjects },
  } = useStaticQuery(allStrapiFeaturedProjectsQuery)

  return (
    <section className="" id="projects">
      <h4 className="section-heading">Algunos proyectos que he construido</h4>
      {featuredProjects.map(project => (
        <Project project={project} />
      ))}
    </section>
  )
}

export default FeaturedProjects
