import { Code2, Lightbulb, Target, Wrench } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const qualities = [
  {
    icon: Code2,
    title: "Technischer Fokus",
    description: "Ich verstehe, was unter der Haube passiert – und baue Lösungen, die stabil laufen.",
  },
  {
    icon: Target,
    title: "Prozessdenken",
    description: "Bevor ich automatisiere, verstehe ich den Prozess. Die beste Automatisierung ist oft die einfachste.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatische Umsetzung",
    description: "Keine Over-Engineering. Keine unnötige Komplexität. Lösungen, die funktionieren.",
  },
  {
    icon: Wrench,
    title: "Wartbare Systeme",
    description: "Alles, was ich baue, kann auch von anderen verstanden und angepasst werden.",
  },
];

const technologies = [
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Make", icon: "/icons/make.svg" },
  { name: "UiPath", icon: "/icons/uipath.svg" },
  { name: "OpenAI", icon: "/icons/openai.svg" },
  { name: "Gemini", icon: "/icons/gemini.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },

  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

const About = () => {
  return (
    <section id="ueber-mich" className="section-padding bg-card">
      <div className="container-section max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column: Profilbild + Social + Technologien */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {/* Top: Profilbild + Social, zentriert */}
            <div className="flex flex-col items-center gap-6">
              {/* Profilbild */}
              <img
                src="/images/clarissa-heinemann.webp"
                alt="Profilbild von Clarissa Heinemann"
                className="w-60 h-60 object-cover rounded-2xl shadow-lg"
              />

              {/* Social Media */}
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/clarissa-heinemann-832620170" target="_blank" rel="noreferrer">
                  <FaLinkedin className="w-6 h-6 text-primary hover:text-accent transition-colors" />
                </a>
                <a href="https://www.tiktok.com/@tech.glitch" target="_blank" rel="noreferrer">
                  <FaTiktok className="w-6 h-6 text-primary hover:text-accent transition-colors" />
                </a>
                <a href="https://www.instagram.com/issi.tech.glitch/" target="_blank" rel="noreferrer">
                  <FaInstagram className="w-6 h-6 text-primary hover:text-accent transition-colors" />
                </a>
                <a href="https://github.com/issi-tech-glitch" target="_blank" rel="noreferrer">
                  <FaGithub className="w-6 h-6 text-primary hover:text-accent transition-colors" />
                </a>
              </div>

              <div className="flex flex-col gap-0 items-center text-center">
                <h4>Clarissa Heinemann</h4>
                <p className="text-sm text-muted-foreground">M.Sc. Information Systems</p>
              </div>
            </div>

            {/* Technologien, linksbündig */}
            <div className="mt-4 w-full flex flex-col items-start">
              <h3 className="text-lg font-semibold text-foreground mb-4">Technologien und APIs</h3>
              <div className="flex flex-wrap gap-6 items-start">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="relative group w-12 h-12 flex items-center justify-center"
                  >
                    {/* Icon */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain transition-transform transition-opacity duration-300 transform group-hover:scale-110 group-hover:rotate-3 group-hover:opacity-10"
                    />

                    {/* Text overlay */}
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Right Column: Text + Qualities */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Text */}
            <div>
              <p className="text-sm font-mono text-primary mb-3">ÜBER MICH</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Hi, ich bin <span className="gradient-text">Clarissa</span>{" "}
              </h2>
              {/* Profil-Statement */}
              <div className="mt-6 max-w-2xl space-y-4">
                <p className="text-lg text-muted-foreground">
                  Ich habe einen Master in Information Systems mit Fokus auf Softwareentwicklung
                  und Künstliche Intelligenz und arbeite seit mehreren Jahren praktisch an
                  daten- und prozessgetriebenen Systemen.
                </p>

                <p className="text-lg text-muted-foreground">
                  Mein Hintergrund reicht von KI- und Datenprojekten im Studium und in der Forschung
                  bis hin zu produktiver Arbeit in <span className="text-foreground font-medium">Robotic Process Automation </span>
                  und als <span className="text-foreground font-medium">Data Engineer</span>.
                </p>

                <p className="text-lg text-muted-foreground">
                  Heute verbinde ich dieses technische Fundament mit einem klaren Ziel:
                  Automatisierungen zu bauen, die Prozesse wirklich vereinfachen –
                  stabil, wartbar und verständlich für Teams.
                </p>
              </div>

            </div>

            {/* Qualities Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div
                  key={quality.title}
                  className="p-6 rounded-xl border border-border bg-background opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <quality.icon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{quality.title}</h3>
                  <p className="text-sm text-muted-foreground">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
