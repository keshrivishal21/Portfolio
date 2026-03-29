import { useState } from "react";
import {
  AnimatedSection,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Input,
  Textarea,
  FloatingCodeElements,
  BinaryRain,
  GeometricBackground,
} from "../assets/utils";
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Clock,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactSection = ({ isDark }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const field = e.target.id || e.target.name;
    if (!field) return;

    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const trimmedForm = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (
      !trimmedForm.fullName ||
      !trimmedForm.email ||
      !trimmedForm.subject ||
      !trimmedForm.message
    ) {
      const validationMessage =
        "Please fill in your name, email, subject, and message.";
      toast.error(validationMessage);
      return;
    }

    setSending(true);
    setError("");

    const readEnv = (key) =>
      process.env[key] ? String(process.env[key]).trim() : "";

    const serviceId =
      readEnv("REACT_APP_EMAILJS_SERVICE_ID") || "service_b8v2dzp";

    const templateId =
      readEnv("REACT_APP_EMAILJS_TEMPLATE_ID") || "template_q4qaze3";

    const publicKey =
      readEnv("REACT_APP_EMAILJS_PUBLIC_KEY") || "dhjesIMD-hc_XW6N_";

    if (!publicKey) {
      setSending(false);
      toast.error(
        "EmailJS public key is missing. Add REACT_APP_EMAILJS_PUBLIC_KEY in your .env and restart the dev server."
      );
      return;
    }

    try {
      emailjs.init({ publicKey });

      await emailjs.send(serviceId, templateId, {
        firstName: trimmedForm.fullName,
        email: trimmedForm.email,
        subject: trimmedForm.subject,
        message: trimmedForm.message,
      });

      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      let details = "Failed to send message. Please try again.";

      if (typeof err?.text === "string" && err.text.trim()) {
        details = err.text;
      } else if (typeof err?.message === "string" && err.message.trim()) {
        details = err.message;
      } else if (err?.status) {
        details = `EmailJS error (${err.status})`;
      }

      if (
        err?.status === 412 &&
        typeof err?.text === "string" &&
        err.text.toLowerCase().includes("invalid grant")
      ) {
        details =
          "Email service authorization expired. Please reconnect your Gmail account in EmailJS (Email Services → Gmail → Reconnect), then try again.";
      }

      console.error("EmailJS send failed:", err);

      toast.error(details);
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "email",
      value: "vishalkeshri2001@gmail.com",
      link: "mailto:vishalkeshri2001@gmail.com",
      bgColor: isDark ? "bg-cyan-500/20" : "bg-violet-500/20",
      iconColor: isDark ? "text-cyan-400" : "text-violet-600",
    },
    {
      icon: Phone,
      label: "status",
      value: "Open to internships & full-time roles",
      bgColor: isDark ? "bg-emerald-500/20" : "bg-green-500/20",
      iconColor: isDark ? "text-emerald-400" : "text-green-600",
    },
    {
      icon: MapPin,
      label: "location",
      value: "Bhopal, India",
      bgColor: isDark ? "bg-purple-500/20" : "bg-pink-500/20",
      iconColor: isDark ? "text-purple-400" : "text-pink-600",
    },
    {
      icon: Sparkles,
      label: "availability",
      value: "Available for freelance & collaboration",
      bgColor: isDark ? "bg-yellow-500/20" : "bg-yellow-200",
      iconColor: isDark ? "text-yellow-400" : "text-yellow-600",
    },
    {
      icon: Clock,
      label: "response",
      value: "Replies within 24 hours",
      bgColor: isDark ? "bg-blue-500/20" : "bg-blue-200",
      iconColor: isDark ? "text-blue-400" : "text-blue-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/keshrivishal21",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-keshri-14b288262/",
      label: "LinkedIn",
    },
  ];

  const inputStyle = isDark
    ? "bg-slate-800/70 border border-slate-700 text-black placeholder:text-slate-400 focus:border-cyan-400 focus:ring-0"
    : "bg-white border border-slate-200 !text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:ring-0";
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 px-2 sm:px-4 lg:px-8 relative"
    >
      <FloatingCodeElements isDark={isDark} />
      <BinaryRain isDark={isDark} />
      <GeometricBackground isDark={isDark} />

      <div className="lg:max-w-7xl sm:max-w-full mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 font-mono ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {"Let's"}{" "}
              <span className={isDark ? "text-cyan-400" : "text-violet-600"}>
                Connect
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
                {"// Always down to chat about code, coffee, or cool projects"}
              </span>
              <br />
              <span className={isDark ? "text-purple-400" : "text-pink-600"}>
                if
              </span>{" "}
              <span className={isDark ? "text-white" : "text-slate-900"}>
                (
              </span>
              <span className={isDark ? "text-yellow-400" : "text-orange-600"}>
                you.haveAnIdea
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {" "}
                ||{" "}
              </span>
              <span className={isDark ? "text-yellow-400" : "text-orange-600"}>
                just.wantToSayHi
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {")"} {"{"}
              </span>
              <br />
              <span
                className={`ml-6 ${
                  isDark ? "text-cyan-400" : "text-violet-600"
                }`}
              >
                sendMessage
              </span>
              <span className={isDark ? "text-white" : "text-slate-900"}>
                ()
              </span>
              <br />
              <span className={isDark ? "text-white" : "text-slate-900"}>
                {"}"}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-8 items-stretch">
          <AnimatedSection direction="left" delay={200}>
            <div
              className={`flex flex-col justify-between rounded-2xl h-full min-h-[400px] sm:min-h-[500px] w-full p-4 sm:p-6 lg:p-8 transition-all duration-700 backdrop-blur-xl ${
                isDark
                  ? "bg-slate-900/95 border border-slate-700/50 shadow-2xl shadow-cyan-950/35"
                  : "bg-white/88 border border-slate-200/70 shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3 mb-8">
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
                    isDark ? "text-slate-400" : "text-slate-900"
                  }`}
                >
                  ~/contact/info.json
                </span>
              </div>

              <div className="font-mono text-sm space-y-6 leading-relaxed">
                <div className={isDark ? "text-cyan-400" : "text-violet-600"}>
                  {"{"}
                </div>
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="ml-6 flex items-center space-x-4 break-all"
                  >
                    <div className={`p-2 rounded-lg ${info.bgColor}`}>
                      <info.icon className={`h-5 w-5 ${info.iconColor}`} />
                    </div>
                    <div>
                      <span
                        className={isDark ? "text-white" : "text-slate-900"}
                      >
                        "{info.label}":
                      </span>
                      <span
                        className={`ml-2 ${
                          isDark ? "text-emerald-400" : "text-green-600"
                        }`}
                      >
                        "{info.value}"
                      </span>
                    </div>
                  </div>
                ))}
                <div className={isDark ? "text-cyan-400" : "text-violet-600"}>
                  {"}"}
                </div>
                <span className="animate-pulse text-cyan-400">|</span>
              </div>

              <div className="mt-1">
                <div
                  className={`text-lg font-semibold mb-6 font-mono ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {"// Social Links"}
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 border backdrop-blur-xl ${
                        isDark
                          ? "bg-slate-700/50 text-slate-400 border-slate-600/50 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20 hover:text-cyan-400 hover:bg-cyan-500/20"
                          : "bg-white/85 text-slate-600 border-slate-200/70 ring-1 ring-white/80 hover:border-violet-200 shadow-[0_20px_42px_-28px_rgba(15,23,42,0.16),0_10px_18px_-14px_rgba(148,163,184,0.18)] hover:text-violet-700 hover:bg-violet-50/90"
                      }`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={400}>
            <Card
              className={`flex flex-col justify-between rounded-2xl h-full min-h-[400px] sm:min-h-[500px] w-full p-4 sm:p-6 lg:p-8 transition-all duration-700 backdrop-blur-xl ${
                isDark
                  ? "bg-slate-900/95 border border-slate-700/50 shadow-2xl shadow-cyan-950/35"
                  : "bg-white/88 border border-slate-200/70 shadow-lg"
              }`}
            >
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3 mb-4">
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
                      isDark ? "text-slate-400" : "text-slate-900"
                    }`}
                  >
                    ~/contact/form.jsx
                  </span>
                </div>
                <CardTitle
                  className={`font-mono text-xl ${
                    isDark ? "text-slate-300" : "text-slate-900"
                  }`}
                >
                  {"Get In Touch"}
                </CardTitle>
                <p
                  className={`font-mono ${
                    isDark ? "text-slate-400" : "text-slate-700"
                  }`}
                >
                  {"// Drop me a line! I usually respond within 24 hours."}
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="fullName"
                      className={`block text-sm font-medium mb-2 font-mono ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Full Name:
                    </label>
                    <Input
                      id="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Jon Snow"
                      required
                      className={`h-11 px-4 rounded-lg transition-all duration-200 ${inputStyle}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 font-mono ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Email:
                    </label>
                    <Input
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="aegonthe6th@dragonstone.com"
                      required
                      className={`h-11 px-4 rounded-lg transition-all duration-200 ${inputStyle}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-2 font-mono ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Subject:
                    </label>
                    <Input
                      id="subject"
                      value={form.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="What's this about?"
                      required
                      className={`h-11 px-4 rounded-lg transition-all duration-200 ${inputStyle}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 font-mono ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Message:
                    </label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, or just say hi! I'd love to hear from you."
                      rows={4}
                      required
                      className={`min-h-[100px] px-4 py-3 rounded-lg transition-all duration-200 ${inputStyle}`}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={sending}
                    className={`w-full font-mono transition-all duration-300 transform hover:scale-105 ${
                      isDark
                        ? "bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25"
                        : "bg-gradient-to-r from-violet-700 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-500 shadow-lg shadow-violet-200/80"
                    }`}
                  >
                    <Terminal className="mr-2 h-5 w-5" />
                    {sending ? "Sending..." : "Send Message"}
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
