import { AnimatedSection, GeometricBackground } from "../assets/utils";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = ({ isDark }) => {
  const year = new Date().getFullYear();

  return (
    <AnimatedSection>
      <footer
        className={`py-5 px-4 border-t ${
          isDark
            ? "bg-slate-950/50 border-slate-800 text-slate-400"
            : "bg-white border-slate-200 text-slate-600"
        }`}
      >
        <GeometricBackground isDark={isDark} />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2
              className={`font-mono text-base font-semibold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Vishal Keshri
            </h2>

            <p className="text-xs mt-0.5">Backend & Full Stack Developer</p>

            {/* Social */}
            <div className="flex justify-center md:justify-start gap-2 mt-2">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href={
                    index === 0
                      ? "https://github.com/keshrivishal21"
                      : index === 1
                      ? "https://www.linkedin.com/in/vishal-keshri-14b288262/"
                      : "mailto:vishalkeshri2001@gmail.com"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={`p-1.5 rounded-md transition-colors ${
                    isDark ? "hover:text-cyan-400" : "hover:text-violet-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right">
            <p className="font-mono text-xs">
              <span className={isDark ? "text-cyan-400" : "text-violet-600"}>
                {"// "}
              </span>
              <span className={isDark ? "text-purple-400" : "text-pink-600"}>
                const
              </span>{" "}
              <span className={isDark ? "text-white" : "text-slate-900"}>
                journey
              </span>
              {" = "}
              <span className={isDark ? "text-white" : "text-slate-900"}>Code().Learn().Build().Repeat()</span>
            </p>

            <p className="text-xs mt-0.5">
              © {year} Vishal Keshri
            </p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};
