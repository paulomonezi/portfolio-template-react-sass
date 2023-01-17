import React, { useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"

import FooterContainer from "./FooterContainer"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"
import { ThemeTogglerButton } from "../contexts/ThemeTogglerButton"

const Portfolio = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id="main" style={{ background: theme.bodyBgColor }}>
      <ThemeTogglerButton />
      <div id="portfolio">
        <h1>Paulo Monezi</h1>
        <Sidebar />
        <MainContent />
      </div>
      <FooterContainer />
    </div>
  )
}

export default Portfolio
