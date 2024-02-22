import * as React from "react"
import * as sideStyles from "./side.module.css"
const Side = ({ children, orientation }) => (
  <div className={`${sideStyles.side} ${sideStyles[orientation]}`}>
    {children}
  </div>
)

export default Side
