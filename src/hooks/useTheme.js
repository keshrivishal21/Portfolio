import { useState } from "react"
import { useEffect } from "react"

const useTheme = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme")
    if (savedTheme) setIsDark(savedTheme === "dark")
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"
  }, [isDark])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("portfolio-theme", newTheme ? "dark" : "light")
  }

  return { isDark, toggleTheme }
}

export default useTheme
