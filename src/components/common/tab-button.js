import * as React from "react"
import * as tabButtonStyles from "./tab-button.module.css"

const TabButton = ({ children, style, onClick }) => (
  <button
    className={tabButtonStyles.tab_button}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
)

export default TabButton
