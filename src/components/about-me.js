import * as React from "react"
import * as aboutStyles from "./about-me.module.css"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export const allStrapiAboutQuery = graphql`
  {
    allStrapiAbout {
      nodes {
        strapiId
        title
        info
        profilePic {
          localFile {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
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

const AboutMe = () => {
  const {
    allStrapiAbout: { nodes },
  } = useStaticQuery(allStrapiAboutQuery)
  console.log("🚀 ~ file: about-me.js ~ line 35 ~ AboutMe ~ nodes", nodes)
  const { title, profilePic, stack, info } = nodes[0]
  return (
    <section className="section" id="about">
      <h4 className="section-heading">{title}</h4>
      <div className={aboutStyles.grid}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: info }} />
          <p>
            A continuación, se muestran algunas tecnologías con las que he
            estado trabajando recientemente:
          </p>
          <ul className={aboutStyles.skills_list}>
            {stack.map(s => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div className={aboutStyles.profile_pic}>
          <div className={aboutStyles.profile_wrapper}>
            <Image
              fixed={profilePic.localFile.childImageSharp.fixed}
              // width={300}
              // height={300}
              className={aboutStyles.img}
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
