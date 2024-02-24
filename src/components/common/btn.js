import * as React from "react"
import * as btnStyles from "./btn.module.css"

const Btn = ({ children, style, onClick }) => (
  <>
    <button className={btnStyles.btn} style={style} onClick={onClick}>
      {children}
    </button>
  </>
)

export default Btn
