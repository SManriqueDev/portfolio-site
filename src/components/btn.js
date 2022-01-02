import * as React from "react"
import * as btnStyles from "./btn.module.css"

const Btn = ({ children, style }) => (
  <>
    <button className={btnStyles.btn} style={style}>
      {children}
    </button>
  </>
)

export default Btn
