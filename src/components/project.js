import React from "react"
import * as projectStyles from "./project.module.css"
import * as Icons from "react-feather"
import Image from "gatsby-image/withIEPolyfill"

const Project = ({ project }) => {
  return (
    <div className={projectStyles.project} key={project.strapiId}>
      <div className={projectStyles.projectImage}>
        <Image
          fluid={project.picture.localFile.childImageSharp.fluid}
          className={projectStyles.picture}
          alt="Project image"
          objectFit="fill"
          style={{
            height: "350px",
          }}
        />
      </div>
      <div className={projectStyles.projectContent}>
        <p className={projectStyles.projectOverline}>Proyecto destacado</p>

        <h6
          style={{
            color: "var(--lightest-slate)",
            fontSize: "28px",
            marginBottom: "21px",
          }}
        >
          <a href={project.url} target="_new">
            {project.title}
          </a>
        </h6>
        <div className={projectStyles.projectDescription}>
          {project.description}
        </div>

        <ul className={projectStyles.projectStackList}>
          {project.stack.map(s => (
            <li>{s.name}</li>
          ))}
        </ul>

        <div className={projectStyles.projectLinks}>
          {project.github && (
            <a href={project.github} target="_new">
              {<Icons.GitHub />}
            </a>
          )}

          {project.url && (
            <a href={project.url} target="_new">
              {<Icons.ExternalLink />}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
