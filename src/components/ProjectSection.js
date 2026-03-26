import {
  AnimatedSection,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Badge,
  FloatingCodeElements,
  GeometricBackground,
} from "../assets/utils";
import {
  Terminal,
  Github,
  Code,
  ExternalLink,
  GitBranch,
  FileCode,
  Braces,
} from "lucide-react";

const ProjectsSection = ({ isDark }) => {
  const projects = [
    {
      title: "LinkedIn Clone",
      gitLink: "https://github.com/keshrivishal21/linkedInApp",
      liveLink: "",
      desc: "// Production-ready LinkedIn clone using microservices, processing real-time events across 5+ services with Kafka and Neo4j",
      icon: FileCode,
      gradient: isDark
        ? "from-blue-600/20 to-cyan-600/20"
        : "from-blue-100/90 to-cyan-100/80",
      iconColor: isDark ? "text-blue-400" : "text-blue-700",
      borderColor: isDark
        ? "border-blue-400/30 hover:border-blue-400/60"
        : "border-slate-300/80 hover:border-blue-400",
      tags: [
        {
          name: "Spring Boot",
          color: isDark
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            : "border-cyan-200 bg-cyan-50 text-cyan-700",
        },
        {
          name: "Microservices",
          color: isDark
            ? "border-green-400/30 bg-green-400/10 text-green-300"
            : "border-green-200 bg-green-50 text-green-700",
        },
        {
          name: "Kafka",
          color: isDark
            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
            : "border-emerald-200 bg-emerald-50 text-emerald-700",
        },
        {
          name: "JWT Auth",
          color: isDark
            ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
            : "border-violet-200 bg-violet-50 text-violet-700",
        },
        {
          name: "REST API",
          color: isDark
            ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
            : "border-amber-200 bg-amber-50 text-amber-700",
        },
        {
          name: "Neo4j",
          color: isDark
            ? "border-pink-400/30 bg-pink-400/10 text-pink-300"
            : "border-pink-200 bg-pink-50 text-pink-700",
        },
        {
          name: "Docker",
          color: isDark
            ? "border-gray-400/30 bg-gray-400/10 text-gray-300"
            : "border-gray-200 bg-gray-50 text-gray-700",
        },
      ],
      delay: 200,
    },

    {
      title: "AI Resume Analyzer",
      gitLink: "https://github.com/keshrivishal21/AI-Resume-Analyzer",
      liveLink: "", // add if deployed
      desc: "// Microservices-based ATS analyzer using NLP models for multi-factor scoring (skills, keywords, semantic match)",
      icon: Terminal,
      gradient: isDark
        ? "from-purple-600/20 to-indigo-600/20"
        : "from-purple-100/80 to-indigo-100/80",
      iconColor: isDark ? "text-purple-400" : "text-purple-700",
      borderColor: isDark
        ? "border-purple-400/30 hover:border-purple-400/60"
        : "border-slate-300/80 hover:border-purple-400",
      tags: [
        {
          name: "React",
          color: isDark
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            : "border-cyan-200 bg-cyan-50 text-cyan-700",
        },
        {
          name: "AI / NLP",
          color: isDark
            ? "border-pink-400/30 bg-pink-400/10 text-pink-300"
            : "border-pink-200 bg-pink-50 text-pink-700",
        },
        {
          name: "Nginx",
          color: isDark
            ? "border-green-400/30 bg-green-400/10 text-green-300"
            : "border-green-200 bg-green-50 text-green-700",
        },
        {
          name: "API Integration",
          color: isDark
            ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
            : "border-amber-200 bg-amber-50 text-amber-700",
        },
        {
          name: "Resume Parsing",
          color: isDark
            ? "border-indigo-400/30 bg-indigo-400/10 text-indigo-300"
            : "border-indigo-200 bg-indigo-50 text-indigo-700",
        },
        {
          name: "Spring Boot",
          color: isDark
            ? "border-gray-400/30 bg-gray-400/10 text-gray-300"
            : "border-gray-200 bg-gray-50 text-gray-700",
        },
        {
          name: "FastAPI",
          color: isDark
            ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
            : "border-blue-200 bg-blue-50 text-blue-700",
        },
      ],
      delay: 400,
    },

    {
      title: "E-Voting System",
      gitLink: "https://github.com/keshrivishal21/e-Voting-Platform",
      liveLink: "", // add if deployed
      desc: "// Secure e-voting platform with OTP verification and real-time vote tracking across multiple user roles",
      icon: Braces,
      gradient: isDark
        ? "from-emerald-600/20 to-lime-600/20"
        : "from-emerald-100/85 to-lime-100/85",
      iconColor: isDark ? "text-emerald-400" : "text-emerald-700",
      borderColor: isDark
        ? "border-emerald-400/30 hover:border-emerald-400/60"
        : "border-slate-300/80 hover:border-emerald-400",
      tags: [
        {
          name: "React",
          color: isDark
            ? "border-red-400/30 bg-red-400/10 text-red-300"
            : "border-red-200 bg-red-50 text-red-700",
        },
        {
          name: "Node.js",
          color: isDark
            ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
            : "border-blue-200 bg-blue-50 text-blue-700",
        },
        {
          name: "MySQL",
          color: isDark
            ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
            : "border-purple-200 bg-purple-50 text-purple-700",
        },
        {
          name: "JWT",
          color: isDark
            ? "border-green-400/30 bg-green-400/10 text-green-300"
            : "border-green-200 bg-green-50 text-green-700",
        },
        {
          name: "Prisma",
          color: isDark
            ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
            : "border-amber-200 bg-amber-50 text-amber-700",
        },
        {
          name: "OTP Verification",
          color: isDark
            ? "border-pink-400/30 bg-pink-400/10 text-pink-300"
            : "border-pink-200 bg-pink-50 text-pink-700",
        },
        {
          name: "Role-based Auth",
          color: isDark
            ? "border-gray-400/30 bg-gray-400/10 text-gray-300"
            : "border-gray-200 bg-gray-50 text-gray-700",
        },
      ],
      delay: 600,
    },
  ];

  return (
    <section
      id="projects"
      className={`py-32 px-4 sm:px-6 lg:px-8 relative transition-all duration-700 ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-white via-slate-50 to-white"
      }`}
    >
      <FloatingCodeElements isDark={isDark} />
      <GeometricBackground isDark={isDark} />
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-r from-cyan-950/25 via-slate-900/30 to-violet-950/25"
            : "bg-gradient-to-r from-violet-100/70 via-white to-sky-100/60"
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {"Recent"}{" "}
              <span className={isDark ? "text-cyan-400" : "text-violet-600"}>
                Projects
              </span>
            </h2>
            <div
              className={`rounded-2xl p-6 max-w-4xl mx-auto font-mono text-base transition-all duration-700 backdrop-blur-xl ${
                isDark
                  ? "bg-slate-900/95 border-cyan-500/30 shadow-xl shadow-cyan-500/20"
                  : "bg-white/88 border-slate-200/70 ring-1 ring-white/80 shadow-[0_26px_55px_-34px_rgba(15,23,42,0.18),0_12px_22px_-18px_rgba(148,163,184,0.18)]"
              }`}
            >
              <span className={isDark ? "text-emerald-400" : "text-green-600"}>
                {"// Some stuff I've been working on lately 🚀"}
              </span>
              <br />
              <span className={isDark ? "text-cyan-400" : "text-violet-600"}>
                myProjects
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                .
              </span>
              <span className={isDark ? "text-yellow-400" : "text-orange-600"}>
                filter
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                (
              </span>
              <span className={isDark ? "text-purple-400" : "text-pink-600"}>
                project
              </span>{" "}
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {"=>"}
              </span>{" "}
              <span className={isDark ? "text-purple-400" : "text-pink-600"}>
                project
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                .
              </span>
              <span className={isDark ? "text-yellow-400" : "text-orange-600"}>
                isActuallyFinished
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                )
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedSection key={project.title} delay={project.delay}>
              <Card
                className={`group relative overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] backdrop-blur-xl ${
                  isDark
                    ? "bg-slate-900/80 border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]"
                    : "bg-white/90 border border-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
                } ${project.borderColor}`}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                    <div
                      className={`absolute inset-0 rounded-2xl ${
                        isDark
                          ? "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-transparent"
                          : "bg-gradient-to-r from-violet-400/20 via-fuchsia-400/20 to-transparent"
                      } blur-xl`}
                    />
                  </div>
                  <div
                    className={`h-52 flex items-center justify-center transition-all duration-700 bg-gradient-to-br ${project.gradient} relative`}
                  >
                    <project.icon
                      className={`h-20 w-20 ${project.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                    />
                    <div className="absolute top-3 left-3 flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div
                        className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                        isDark ? "bg-cyan-400" : "bg-violet-400"
                      }`}
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle
                    className={`flex items-center justify-between font-mono text-lg ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}

                    <div className="flex space-x-2">
                      <a
                        href={project.gitLink}
                        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-white/10 ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        } ${project.iconColor.replace("text-", "hover:text-")}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-white/10 ${
                            isDark ? "text-slate-400" : "text-slate-500"
                          } ${project.iconColor.replace(
                            "text-",
                            "hover:text-"
                          )}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </CardTitle>
                  <p
                    className={`font-mono text-sm leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {project.desc}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.name}
                        className={`transition-all duration-300 hover:scale-105 border ${tag.color}`}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={800}>
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className={`font-mono transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 shadow-lg shadow-cyan-500/20"
                  : "border-violet-300 text-violet-700 hover:bg-violet-50 shadow-lg shadow-violet-100/80"
              }`}
            >
              <Code className="mr-2 h-5 w-5" />
              <a href="https://github.com/keshrivishal21">{"More on GitHub"}</a>
              <GitBranch className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
