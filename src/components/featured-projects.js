import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as featuredProjectsStyles from "./featured-projects.module.css"

export const allStrapiFeaturedProjectsQuery = graphql`
  {
    allStrapiFeaturedProjects(sort: { fields: id, order: DESC }) {
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
    allStrapiFeaturedProjects: { nodes: featuredProjects },
  } = useStaticQuery(allStrapiFeaturedProjectsQuery)
  console.log("🚀 ~ FeaturedProjects ~ featuredProjects:", featuredProjects)

  return (
    <section
      className=""
      id="projects"
      style={{
        maxWidth: "700px",
      }}
    >
      <h4 className="section-heading">Algunos proyectos que he construido</h4>
      {featuredProjects.map(project => (
        <div key={project.strapiId}>
          <p className={featuredProjectsStyles.projectOverline}>
            Proyecto destacado
          </p>

          <h6
            style={{
              color: "var(--lightest-slate)",
              fontSize: "28px",
              marginBottom: "21px",
            }}
          >
            <a
              style={
                {
                  // color: "var()"
                }
              }
              href={project.url}
              target="_new"
            >
              {project.title}
            </a>
          </h6>
          <div className={featuredProjectsStyles.projectDescription}>
            {project.description}
          </div>

          <ul className={featuredProjectsStyles.projectStackList}>
            {project.stack.map(s => (
              <li>{s.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default FeaturedProjects
