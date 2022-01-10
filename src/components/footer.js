import * as React from "react"
import * as footerStyles from "./footer.module.css"

const Credits = () => (
  <div className={footerStyles.credits}>
    <div>
      © {new Date().getFullYear()} Built from scratch by{" "}
      <a href="https://github.com/InmortalRegis/portfolio-site" target="_new">
        {" "}
        Sebastian Manrique
      </a>
    </div>
    <div>
      Design credits to{" "}
      <a href="https://brittanychiang.com" target="_new">
        Brittany Chiang
      </a>{" "}
      (Not forking)
    </div>
  </div>
)

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Credits />
    </footer>
  )
}

export default Footer
