import {
  AnimatedSection,
  Button,
  GeometricBackground,
  FloatingCodeElements,
} from "../assets/utils";
import profileImg from "../assets/profileimg.jpg";
import resumePdf from "../assets/Vishal_Keshri_Resume.pdf";
import {
  ArrowRight,
  Code,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Cpu,
} from "lucide-react";

const WelcomeSection = ({ isDark }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/keshrivishal21",
      label: "GitHub",
      external: true,
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-keshri-14b288262/",
      label: "LinkedIn",
      external: true,
    },
    {
      icon: Mail,
      href: "mailto:vishalkeshri2001@gmail.com",
      label: "Email",
      external: true,
    },
  ];

  const quickStats = [
    { label: "Focus", value: "Java + Spring Boot + MERN", icon: Cpu },
    { label: "DSA", value: "600+ Problems", icon: Code },
  ];

  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative overflow-hidden"
    >
      <GeometricBackground isDark={isDark} />
      <FloatingCodeElements isDark={isDark} />

      <div
        className={`absolute inset-x-0 top-28 h-72 blur-3xl ${
          isDark ? "bg-cyan-500/12" : "bg-violet-300/20"
        }`}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-12 items-start">
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-xl">
            <AnimatedSection delay={150}>
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm backdrop-blur-xl mb-6 mx-auto lg:mx-0 ${
                  isDark
                    ? "border-cyan-400/30 text-cyan-300 bg-slate-900/70"
                    : "border-violet-200 text-violet-700 bg-white/85 shadow-sm shadow-violet-100/80"
                }`}
              >
                <Terminal className="h-4 w-4" />
                <span>Backend & Full Stack Developer</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h1
                className={`text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Building scalable backend systems
                <span
                  className={`block bg-clip-text text-transparent ${
                    isDark
                      ? "bg-gradient-to-r from-cyan-400 to-violet-400"
                      : "bg-gradient-to-r from-violet-700 to-fuchsia-600"
                  }`}
                >
                  & modern full stack applications.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={450}>
              <p className="...">
                I'm Vishal Keshri, an MCA student at NIT Bhopal specializing in
                backend development with Java and Spring Boot, along with full
                stack applications using the MERN stack.
                <span className="block mt-2 mb-4">
                  Focused on building scalable systems and solving real-world
                  problems through clean code.
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className={`font-mono border transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-cyan-500/40 ${
                    isDark
                      ? "bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 border-cyan-400/50 shadow-lg shadow-cyan-500/25"
                      : "bg-gradient-to-r from-violet-700 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-500 border-violet-400/50 shadow-lg shadow-violet-200/80"
                  }`}
                >
                  <Code className="mr-2 h-5 w-5" />
                  {"view.projects()"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => window.open(resumePdf, "_blank")}
                  variant="outline"
                  size="lg"
                  className={`font-mono transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-cyan-500/40 ${
                    isDark
                      ? "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 shadow-lg shadow-cyan-500/20"
                      : "border-violet-300 text-violet-700 hover:bg-violet-50 shadow-lg shadow-violet-100/80"
                  }`}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {"download.resume()"}
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={750}>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noreferrer" : undefined}
                    className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 border backdrop-blur-xl ${
                      isDark
                        ? "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border-slate-700/50 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20 hover:text-cyan-400"
                        : "bg-white/85 text-slate-600 hover:bg-violet-50/90 border-slate-200/70 ring-1 ring-white/80 hover:border-violet-200 shadow-[0_22px_45px_-30px_rgba(15,23,42,0.18),0_10px_20px_-16px_rgba(148,163,184,0.2)] hover:text-violet-700"
                    }`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={900}>
              <div
                className={`rounded-3xl p-6 font-mono text-left max-w-2xl mx-auto lg:mx-0 transition-all duration-700 backdrop-blur-xl ${
                  isDark
                    ? "bg-slate-900/88 border-cyan-500/20 shadow-xl shadow-cyan-950/40"
                    : "bg-white/88 border-slate-200/70 ring-1 ring-white/80 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.2),0_14px_28px_-22px_rgba(148,163,184,0.2)]"
                }`}
              >
                <div
                  className={`mb-3 ${
                    isDark ? "text-emerald-400" : "text-green-600"
                  }`}
                >
                  {"// Preferred toolkit"}
                </div>
                <div className={isDark ? "text-cyan-400" : "text-violet-600"}>
                  const{" "}
                  <span
                    className={isDark ? "text-yellow-400" : "text-orange-600"}
                  >
                    stack
                  </span>{" "}
                  = [
                </div>
                <div
                  className={`ml-6 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  <span
                    className={isDark ? "text-emerald-400" : "text-green-600"}
                  >
                    "Java"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-emerald-400" : "text-green-600"}
                  >
                    "Spring Boot"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-emerald-400" : "text-green-600"}
                  >
                    "React"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-emerald-400" : "text-green-600"}
                  >
                    "Node.js"
                  </span>
                  ,{" "}
                  <span
                    className={isDark ? "text-emerald-400" : "text-green-600"}
                  >
                    "PostgreSQL"
                  </span>
                </div>
                <div className={isDark ? "text-cyan-400" : "text-violet-600"}>
                  ]
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="order-1 lg:order-2">
            <AnimatedSection delay={250}>
              <div
                className={`rounded-[2rem] lg:mt-16 p-6 sm:p-8 mx-auto max-w-md transition-all duration-700 backdrop-blur-xl ${
                  isDark
                    ? "bg-slate-900/90 border border-slate-700/50 shadow-2xl shadow-cyan-950/40"
                    : "bg-white/88 border border-slate-200/70 ring-1 ring-white/85 shadow-[0_34px_80px_-42px_rgba(15,23,42,0.22),0_18px_34px_-24px_rgba(148,163,184,0.22)]"
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div
                    className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono ${
                      isDark
                        ? "bg-cyan-500/15 text-cyan-300"
                        : "bg-violet-100 text-violet-700"
                    }`}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Open to work</span>
                  </div>
                </div>

                <div className="relative mb-8">
                  <div
                    className={`absolute inset-0 blur-3xl ${
                      isDark ? "bg-cyan-500/20" : "bg-violet-300/20"
                    }`}
                  />
                  <img
                    src={profileImg}
                    alt="Vishal Keshri"
                    className={`relative mx-auto rounded-full border-4 shadow-2xl transition-all duration-700 w-56 h-56 sm:w-64 sm:h-64 object-cover ${
                      isDark
                        ? "border-cyan-400 shadow-cyan-500/40"
                        : "border-violet-500 shadow-violet-500/30"
                    }`}
                  />
                  <p className="text-center mt-4 font-mono text-sm opacity-80">
                    Backend Developer | MCA @ NIT Bhopal
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {quickStats.map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-2xl p-4 border backdrop-blur-xl hover:scale-105 hover:border-cyan-400/40 transition-all duration-300 ${
                        isDark
                          ? "bg-slate-800/70 border-slate-700/50 text-slate-200"
                          : "bg-white/82 border-slate-200/65 ring-1 ring-white/80 text-slate-800 shadow-[0_18px_38px_-28px_rgba(15,23,42,0.16),0_8px_16px_-14px_rgba(148,163,184,0.18)]"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-2 text-sm font-mono mb-2 ${
                          isDark ? "text-cyan-300" : "text-violet-700"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
