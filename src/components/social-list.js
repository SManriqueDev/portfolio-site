import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import * as Icons from "react-feather"

export const allStrapiSocialsQuery = graphql`
  {
    allStrapiSocials {
      nodes {
        name
        strapiId
        url
      }
    }
  }
`

const SocialList = () => {
  const {
    allStrapiSocials: { nodes: socials },
  } = useStaticQuery(allStrapiSocialsQuery)
  console.log(
    "🚀 ~ file: social-list.js ~ line 14 ~ SocialList ~ socials",
    socials
  )

  return (
    <ul>
      {socials.map(social => {
        const Icon = Icons[social.name]
        return (
          <li key={social.strapiId}>
            <a href={social.url} target="_new">
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialList
