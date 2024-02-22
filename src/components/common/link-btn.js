import * as React from "react"
import * as btnStyles from "./btn.module.css"

const LinkBtn = ({ children, style, onClick, ...props }) => (
  <a
    role="link"
    tabIndex={0}
    className={btnStyles.btn}
    style={style}
    onClick={onClick}
    {...props}
    onKeyDown={onClick}
  >
    {children}
  </a>
)

export default LinkBtn
