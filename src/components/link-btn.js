import * as React from "react"
import * as btnStyles from "./btn.module.css"

const LinkBtn = ({ children, style, onClick, ...props }) => (
  <>
    <a className={btnStyles.btn} style={style} onClick={onClick} {...props}>
      {children}
    </a>
  </>
)

export default LinkBtn
