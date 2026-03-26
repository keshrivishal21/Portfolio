import {
  AnimatedSection,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  GeometricBackground,
  FloatingCodeElements,
  BinaryRain,
} from "../assets/utils";
import {
  Code,
  Database,
  Cpu,
  Server,
} from "lucide-react";

const AboutSection = ({ isDark }) => {
  const technologies = [
    {
      name: "Java",
      color: isDark
        ? "bg-red-900/50 text-red-300 border-red-400/30"
        : "bg-red-100 text-red-700 border-red-300",
    },
    {
      name: "Spring Boot",
      color: isDark
        ? "bg-green-900/50 text-green-300 border-green-400/30"
        : "bg-green-100 text-green-700 border-green-300",
    },
    {
      name: "JavaScript",
      color: isDark
        ? "bg-yellow-900/50 text-yellow-300 border-yellow-400/30"
        : "bg-yellow-100 text-yellow-700 border-yellow-300",
    },
    {
      name: "React",
      color: isDark
        ? "bg-blue-900/50 text-blue-300 border-blue-400/30"
        : "bg-blue-100 text-blue-700 border-blue-300",
    },
    {
      name: "Node.js",
      color: isDark
        ? "bg-green-900/50 text-green-300 border-green-400/30"
        : "bg-green-100 text-green-700 border-green-300",
    },
    {
      name: "Express",
      color: isDark
        ? "bg-gray-900/50 text-gray-300 border-gray-400/30"
        : "bg-gray-100 text-gray-700 border-gray-300",
    },
    {
      name: "MongoDB",
      color: isDark
        ? "bg-emerald-900/50 text-emerald-300 border-emerald-400/30"
        : "bg-emerald-100 text-emerald-700 border-emerald-300",
    },
    {
      name: "PostgreSQL",
      color: isDark
        ? "bg-indigo-900/50 text-indigo-300 border-indigo-400/30"
        : "bg-indigo-100 text-indigo-700 border-indigo-300",
    },
    {
      name: "SQL",
      color: isDark
        ? "bg-slate-900/50 text-slate-300 border-slate-400/30"
        : "bg-slate-100 text-slate-700 border-slate-300",
    },
    {
      name: "C++",
      color: isDark
        ? "bg-blue-900/50 text-blue-300 border-blue-400/30"
        : "bg-blue-100 text-blue-700 border-blue-300",
    },
    {
      name: "Python",
      color: isDark
        ? "bg-yellow-900/50 text-yellow-300 border-yellow-400/30"
        : "bg-yellow-100 text-yellow-700 border-yellow-300",
    },
    {
      name: "Git",
      color: isDark
        ? "bg-orange-900/50 text-orange-300 border-orange-400/30"
        : "bg-orange-100 text-orange-700 border-orange-300",
    },
  ];

  const skills = [
    {
      icon: Code,
      title: "Frontend",
      desc: "React, JavaScript, HTML, CSS, responsive UI",
      color: isDark
        ? "text-cyan-400 border-cyan-400/30"
        : "text-violet-600 border-violet-300",
      bg: isDark ? "bg-cyan-500/10" : "bg-violet-500/10",
    },
    {
      icon: Server,
      title: "Backend",
      desc: "Java, Spring Boot, Node.js, Express, REST APIs",
      color: isDark
        ? "text-emerald-400 border-emerald-400/30"
        : "text-green-600 border-green-300",
      bg: isDark ? "bg-emerald-500/10" : "bg-green-500/10",
    },
    {
      icon: Database,
      title: "Database",
      desc: "MongoDB, PostgreSQL, SQL, Prisma, Neo4j",
      color: isDark
        ? "text-orange-400 border-orange-400/30"
        : "text-orange-600 border-orange-300",
      bg: isDark ? "bg-orange-500/10" : "bg-orange-500/10",
    },
    {
      icon: Cpu,
      title: "Core Skills",
      desc: "Data Structures & Algorithms, OOP, Problem Solving",
      color: isDark
        ? "text-pink-400 border-pink-400/30"
        : "text-pink-600 border-pink-300",
      bg: isDark ? "bg-pink-500/10" : "bg-pink-500/10",
    },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <BinaryRain isDark={isDark} />
      <FloatingCodeElements isDark={isDark} />
      <GeometricBackground isDark={isDark} />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {"About"}{" "}
              <span className={isDark ? "text-cyan-400" : "text-violet-600"}>
                Me
              </span>
            </h2>
            <div
              className={`rounded-2xl p-6 max-w-4xl mx-auto font-mono text-base transition-all duration-700 backdrop-blur-xl ${
                isDark
                  ? "bg-slate-900/95 border-cyan-500/30 shadow-xl shadow-cyan-500/20"
                  : "bg-white/90 border-violet-300/50 shadow-lg shadow-violet-500/20"
              }`}
            >
              <span className={isDark ? "text-emerald-400" : "text-green-600"}>
                {"// Vishal Keshri | MCA @ NIT Bhopal"}
              </span>
              <br />
              <span className={isDark ? "text-purple-400" : "text-pink-600"}>
                if
              </span>{" "}
              <span className={isDark ? "text-white" : "text-slate-900"}>
                (
              </span>
              <span className={isDark ? "text-yellow-400" : "text-orange-600"}>
                passion
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {" "}
                ==={" "}
              </span>
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                "development"
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                ) {"{"}
              </span>
              <br />
              <span
                className={`ml-6 ${
                  isDark ? "text-cyan-400" : "text-violet-600"
                }`}
              >
                skills
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {" "}
                ={" "}
              </span>
              <span className={isDark ? "text-yellow-400" : "text-orange-600"}>
                ["Java", "Spring Boot", "MERN", "DSA"]
              </span>
              <br />
              <span
                className={`ml-6 ${
                  isDark ? "text-cyan-400" : "text-violet-600"
                }`}
              >
                goal
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {" "}
                ={" "}
              </span>
              <span className={isDark ? "text-green-400" : "text-green-600"}>
                "Software Engineer"
              </span>
              <br />
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {"}"}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" delay={200}>
            <div
              className={`rounded-2xl p-8 transition-all duration-700 backdrop-blur-xl ${
                isDark
                  ? "bg-slate-900/95 border-slate-700/50 shadow-2xl shadow-cyan-500/20"
                  : "bg-white/90 border-violet-200/60 shadow-xl shadow-violet-500/25"
              }`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div
                  className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-4 h-4 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <span
                  className={`text-sm font-mono ml-3 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  ~/about/journey.md
                </span>
              </div>

              <div className="font-mono text-sm space-y-5 leading-relaxed">
                <div
                  className={`text-lg ${
                    isDark ? "text-emerald-400" : "text-green-600"
                  }`}
                >
                  ## How I Got Here
                </div>
                <div className={isDark ? "text-slate-300" : "text-slate-700"}>
                  I started my journey in Computer Science during my
                  undergraduate studies at Delhi University, where I developed a
                  strong interest in programming and problem solving. During my
                  MCA at NIT Bhopal, I deepened my understanding of backend
                  systems, full stack development, and machine learning through
                  hands-on projects.
                </div>
                <div
                  className={`text-lg ${
                    isDark ? "text-cyan-400" : "text-violet-600"
                  }`}
                >
                  ## What I'm Doing
                </div>
                <div className={isDark ? "text-slate-300" : "text-slate-700"}>
                  <ul className="space-y-1">
                    <li>
                      • Building scalable backend applications using Spring Boot
                    </li>
                    <li>• Developing full stack apps using MERN stack</li>
                    <li>• Practicing Data Structures & Algorithms</li>
                    <li>• Exploring cloud technologies and system design</li>
                  </ul>
                </div>
                <div
                  className={`text-lg ${
                    isDark ? "text-purple-400" : "text-pink-600"
                  }`}
                >
                  ## Key Projects
                </div>
                <div className={isDark ? "text-slate-300" : "text-slate-700"}>
                  <ul className="space-y-1">
                    <li>• LinkedIn Backend (Spring Boot + Microservices)</li>
                    <li>• e-Voting Platform (React + Node + PostgreSQL)</li>
                    <li>• Salary Prediction App (ML + Streamlit)</li>
                  </ul>
                </div>
                <div
                  className={`mt-6 ${
                    isDark ? "text-purple-400" : "text-pink-600"
                  }`}
                >
                  {">"} Open to internships and software development
                  opportunities 🚀
                  <span className="animate-pulse ml-1">{"▋"}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge
                    key={tech.name}
                    className={`transition-all duration-300 hover:scale-105 ${tech.color}`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={400}>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <Card
                  key={skill.title}
                  className={`text-center transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-xl group ${
                    isDark
                      ? "bg-slate-900/95 border-slate-700/50 shadow-2xl shadow-cyan-500/20"
                      : "bg-white/90 border-violet-200/60 shadow-xl shadow-violet-500/25"
                  } ${skill.color}`}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`p-3 rounded-xl mx-auto w-fit transition-all duration-300 ${skill.bg} group-hover:scale-110`}
                    >
                      <skill.icon
                        className={`h-8 w-8 ${skill.color.split(" ")[0]}`}
                      />
                    </div>
                    <CardTitle
                      className={`text-lg font-mono ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`text-sm font-mono ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {skill.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
