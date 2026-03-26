import { useState,useEffect } from "react"
import useIntersectionObserver  from "../hooks/useIntersectionObserver"

export const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const getTransform = () => {
    switch (direction) {
      case "up": return "translateY(50px)"
      case "down": return "translateY(-50px)"
      case "left": return "translateX(50px)"
      case "right": return "translateX(-50px)"
      default: return "translateY(50px)"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translate(0)" : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export const Button = ({ children, onClick, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-300/80 bg-transparent hover:bg-slate-100/80",
  }
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const Card = ({ children, className = "", ...props }) => (
  <div className={` ${className}`} {...props}>
    {children}
  </div>
)

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

export const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

export const Badge = ({ children, className = "", ...props }) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`} {...props}>
    {children}
  </div>
)

export const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)

export const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)


export const FloatingCodeElements = ({ isDark }) => {
  const codeElements = [
    "{ }", "< />", "=>", "&&", "||", "===", "!==", "++", "--", "/**/", "//", "[]", "()", ";;", 
    "function", "const", "let", "var", "return", "import", "export", "class", "extends", "async", "await","implements","break","continue"
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeElements.map((element, index) => (
        <div
          key={index}
          className={`absolute font-mono text-sm animate-pulse ${
            isDark ? "text-cyan-400/20" : "text-violet-600/30"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${0.7 + Math.random() * 0.6}rem`,
          }}
        >
          {element}
        </div>
      ))}
    </div>
  )
}

export const BinaryRain = ({ isDark }) => {
  const [drops, setDrops] = useState([])

  useEffect(() => {
    const newDrops = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setDrops(newDrops)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={`absolute top-0 font-mono text-xs animate-bounce ${
            isDark ? "text-emerald-400/25" : "text-blue-500/35"
          }`}
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: "3s",
          }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="mb-1">
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export const GeometricBackground = ({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className={`absolute inset-0 ${isDark ? "opacity-10" : "opacity-25"}`}>
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className={`absolute animate-pulse ${
            isDark
              ? "bg-gradient-to-br from-cyan-400/20 to-purple-500/20"
              : "bg-gradient-to-br from-violet-500/35 to-fuchsia-500/35"
          }`}
          style={{
            width: `${60 + Math.random() * 120}px`,
            height: `${60 + Math.random() * 120}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: Math.random() > 0.5 ? "50%" : "20%",
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  </div>
)
