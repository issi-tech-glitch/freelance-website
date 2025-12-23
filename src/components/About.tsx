import { ChevronRight, Code2, Lightbulb, Target, Wrench } from "lucide-react";
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

const techGroups = [
  {
    title: "Automatisierung & Backend",
    items: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Make", icon: "/icons/make.svg" },
      { name: "UiPath", icon: "/icons/uipath.svg" },
      { name: "FastAPI", icon: "/icons/fastapi.svg" },
    ],
  },
  {
    title: "Daten und KI",
    items: [
      { name: "OpenAI API", icon: "/icons/openai.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
      { name: "Streamlit", icon: "/icons/streamlit.svg" },
      { name: "Pandas", icon: "/icons/pandas.svg" },
    ],
  }
];

const certifications = [
  {
    title: "UiPath Certified Advanced RPA Developer v1.0",
    issuer: "UiPath",
    icon: "/icons/uipath.svg",
    link: "https://cp.certmetrics.com/uipath/en/public/verify/credential/BJ5EXLGC12B1Q8KE", // optional
  },
  {
    title: "Make Advanced & AI Automation Explorer",
    issuer: "Make",
    icon: "/icons/make.svg",
    link: "https://www.credly.com/users/clarissa-heinemann",
  }
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
                <p className="text-sm text-muted-foreground">M.Sc. Information Systems (Software & KI)</p>
              </div>
            </div>

            {/* Technologien */}
            <div className="mt-4 w-full flex flex-col items-start gap-6">
              <h3 className="text-lg font-semibold text-foreground">
                Technologien & Tools
              </h3>

              <div className="flex flex-col gap-5 w-full">
                {techGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs font-medium text-muted-foreground mb-3">
                      {group.title}
                    </p>

                    <div className="flex flex-wrap gap-5">
                      {group.items.map((tech) => (
                        <div
                          key={tech.name}
                          className="relative group w-12 h-12 flex items-center justify-center"
                        >
                          {/* Icon */}
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className={`
                            object-contain transition-transform transition-opacity duration-300
                            transform group-hover:scale-110 group-hover:rotate-3 group-hover:opacity-10
                            ${tech.name === "FastAPI" ? "w-9 h-9" : "w-12 h-12"}
                          `}
                          />

                          {/* Text overlay */}
                          <span
                            className="
                            absolute inset-0
                            flex items-center justify-center
                            text-[11px] font-semibold
                            text-muted-foreground
                            opacity-0
                            transition-opacity duration-300
                            group-hover:opacity-100
                            text-center
                            "
                          >
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zertifizierungen */}
            <div className="mt-8 w-full flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-foreground">
                Zertifizierungen
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
          group
          flex items-center gap-3
          transition-colors
        "
                  >
                    {/* Badge / Icon */}
                    <img
                      src={cert.icon}
                      alt={cert.title}
                      className="w-10 h-10 object-contain"
                    />

                    {/* Text */}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground leading-tight">
                        {cert.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </span>
                    </div>
                  </a>
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
              <div className="mt-6 max-w-2xl space-y-6">
                <p className="text-lg text-muted-foreground">
                  Ich habe einen <span className="text-foreground font-medium">Master in Information Systems</span> mit Schwerpunkt Softwareentwicklung
                  und Künstliche Intelligenz und arbeite seit mehreren Jahren praktisch an
                  daten- und prozessgetriebenen Systemen.
                </p>

                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      Mehrjährige Erfahrung aus <span className="text-foreground font-medium">KI- und Datenprojekten </span>
                      im Studium, in der Forschung und in der Praxis
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      Projektbezogene Arbeit in <span className="text-foreground font-medium">Robotic Process Automation (RPA)</span>
                      und als <span className="text-foreground font-medium">Data Engineer</span>
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      Fokus auf <span className="text-foreground font-medium">stabile, wartbare Automatisierungen</span>,
                      die Prozesse wirklich vereinfachen
                    </span>
                  </li>
                </ul>
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
