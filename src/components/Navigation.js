import { Menu, X, Terminal, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../assets/utils'

const Navigation = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 72
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", id: "welcome" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-700 backdrop-blur-xl ${
      isDark 
        ? "bg-slate-950/82 border-cyan-400/20 shadow-lg shadow-cyan-950/10" 
        : "bg-white/80 border-slate-200/80 shadow-lg shadow-slate-200/70"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-bold flex items-center space-x-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            <div className={`p-2 rounded-xl ${isDark ? "bg-cyan-500/20" : "bg-violet-100"} animate-pulse`}>
              <Terminal className={`h-6 w-6 ${isDark ? "text-cyan-400" : "text-violet-700"}`} />
            </div>
            <span className={`font-mono bg-clip-text text-transparent ${
              isDark ? "bg-gradient-to-r from-cyan-400 to-violet-400" : "bg-gradient-to-r from-violet-700 to-fuchsia-600"
            }`}>
              Vishal Keshri
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-all duration-300 font-mono group ${
                  isDark ? "text-slate-300 hover:text-cyan-400" : "text-slate-600 hover:text-violet-700"
                }`}
              >
                .{item.name}()
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDark ? "bg-cyan-400" : "bg-violet-600"
                }`} />
              </button>
            ))}
            
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
                className={`font-mono transition-all duration-500 ${
                isDark
                  ? "border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10"
                  : "border-violet-300 text-violet-700 hover:bg-violet-50"
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="relative w-4 h-4">
                  <Sun className={`absolute inset-0 transition-all duration-500 ${
                    isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`} />
                  <Moon className={`absolute inset-0 transition-all duration-500 ${
                    isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  }`} />
                </div>
                <span className="text-xs">{isDark ? ".light()" : ".dark()"}</span>
              </div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className={`font-mono ${
                isDark ? "border-cyan-400/50 text-cyan-400" : "border-violet-300 text-violet-700"
              }`}
            >
              {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDark ? "text-slate-300 hover:bg-cyan-500/20" : "text-slate-700 hover:bg-violet-100"
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-6 border-t transition-all duration-500 ${
            isDark ? "border-cyan-500/30" : "border-violet-300/50"
          }`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left transition-all duration-300 font-mono p-2 rounded-lg ${
                    isDark 
                      ? "text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10" 
                      : "text-slate-700 hover:text-violet-700 hover:bg-violet-50"
                  }`}
                >
                  .{item.name}()
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navigation
