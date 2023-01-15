import React, { useContext } from 'react'
import { ThemeContext, themes } from '../contexts/ThemeContext'

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
            <button
                onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Clique aqui
            </button>
    )
}