import { createContext, useState } from "react"

export const themes = {
  dark: {
    textColor: "#FFF",
    textColorSecondary: "#a6a6a6",
    bodyBgColor: "#271b31",
    bgColor: "#111",
    bgColorSecondary: "#1d1d1d",
  },
  light: {
    textColor: "#111",
    textColorSecondary: "#060606",
    bodyBgColor: "#f1f1f1",
    bgColor: "#e6e6e6",
    bgColorSecondary: "#f1f1f1",
  },
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
