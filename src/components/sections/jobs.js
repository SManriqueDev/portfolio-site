import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import TabButton from "../common/tab-button"
import * as jobsStyles from "./jobs.module.css"

export const allStrapiJobsQuery = graphql`
  {
    allStrapiJobs(sort: { fields: id, order: DESC }) {
      nodes {
        company
        companyWebsite
        date
        position
        strapiId
        descriptions {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(allStrapiJobsQuery)
  console.log("🚀 ~ file: jobs.js ~ line 25 ~ Jobs ~ nodes", jobs)

  const [currentJob, setCurrentJob] = React.useState(jobs[0])
  const activeStyles = {
    borderLeft: "2px solid var(--green)",
    backgroundColor: " var(--light-navy)",
    color: "var(--green)",
  }

  return (
    <section
      className=""
      id="jobs"
      style={{
        maxWidth: "700px",
      }}
    >
      <h4 className="section-heading">Donde he trabajado</h4>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {jobs.map(job => (
            <TabButton
              key={job.strapiId}
              style={currentJob.strapiId === job.strapiId ? activeStyles : {}}
              onClick={() => setCurrentJob(job)}
            >
              {job.company}
            </TabButton>
          ))}
        </div>
        <div className={jobsStyles.jobs_description}>
          <h5>
            {currentJob.position}
            <span style={{ color: "var(--green)" }}>
              {" "}
              @{" "}
              <a
                href={currentJob.companyWebsite}
                target="_new"
                className="inline-link"
              >
                {currentJob.company}
              </a>
            </span>
          </h5>
          <p className={jobsStyles.date}>{currentJob.date}</p>
          <ul>
            {currentJob.descriptions.map(description => (
              <li key={description.id}>{description.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Jobs
