
import useTheme from './hooks/useTheme'
import ProjectsSection from './components/ProjectSection'
import Navigation from './components/Navigation'
import WelcomeSection from './components/WelcomeSection'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import {Footer} from './components/Footer' 
import "./App.css"

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-all duration-700 relative overflow-x-hidden ${
      isDark 
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white" 
        : "bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900"
    }`}>
      

      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <WelcomeSection isDark={isDark} />
      <AboutSection isDark={isDark} />
      <ProjectsSection isDark={isDark} />
      <ContactSection isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}

export default App
