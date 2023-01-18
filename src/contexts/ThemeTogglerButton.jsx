import React, { useContext } from "react"
import { ThemeContext, themes } from "../contexts/ThemeContext"
import "../styles/components/themetogglerbutton.sass"

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div id="themetoggler">
      <label>
        <input type="checkbox" />
        <span
          className="check"
          onClick={() =>
            setTheme(theme === themes.light ? themes.dark : themes.light)
          }
        ></span>
      </label>
    </div>
  )
}
