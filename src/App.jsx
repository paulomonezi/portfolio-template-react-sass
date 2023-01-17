import "./styles/components/app.sass"
import Portfolio from "./components/Portfolio"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
