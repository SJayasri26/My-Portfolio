import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string[];
  problem: string;
  solution: string;
  achievements: string[];
  github: string;
  demo: string;
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Attendance Management System",
    category: "Web Development",
    technologies: ["React", "Node.js", "MySQL", "Express"],
    problem: "Manual attendance tracking leads to reporting errors and high administrative overhead.",
    solution: "Developed a full-stack tracking application with visual reporting dashboards for easy, automated data management.",
    achievements: [
      "Built interactive dashboards for daily, weekly, monthly, and yearly reporting.",
      "Implemented search and filter functionalities for quick access to student data.",
      "Automated calculations of attendance percentages to improve speed and accuracy.",
    ],
    github: "https://github.com/SJayasri26",
    demo: "#",
    gradient: "from-blue-500/20 to-indigo-500/20",
    emoji: "📅",
  },
  {
    id: 2,
    title: "Malware URL Detection System",
    category: "Data Analysis",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    problem: "Rising security threats from malicious URLs requiring efficient, automated classification.",
    solution: "Built a classification system using Python and data preprocessing to analyze URLs and filter out potential threats.",
    achievements: [
      "Cleaned, transformed, and validated raw datasets to ensure high prediction quality.",
      "Applied machine learning algorithms to minimize false positives and optimize accuracy.",
      "Extracted security insights from threat datasets to help protect user browsing.",
    ],
    github: "https://github.com/SJayasri26",
    demo: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
    emoji: "🛡️",
  },
  {
    id: 3,
    title: "Shastika Global Impex ERP System",
    category: "Web Development",
    technologies: ["React", "Node.js", "PostgreSQL"],
    problem: "Business operations required an integrated system to manage access, quality control, and container dispatch efficiently.",
    solution: "Developed an ERP system to streamline operations, including role-based access control and various business modules.",
    achievements: [
      "Implemented role-based access control, session timeout, and audit logging for security.",
      "Built ERP modules including Quality Control to monitor standards.",
      "Developed Container Loading/Dispatch modules to track operational logistics.",
    ],
    github: "https://github.com/SJayasri26",
    demo: "#",
    gradient: "from-green-500/20 to-emerald-500/20",
    emoji: "🏭",
  },
];

const categories = ["All", "Data Analysis", "Web Development"];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="blob-decoration w-80 h-80 bg-primary/15 top-0 -right-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Real-world projects demonstrating business & data analytics expertise
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              layout
              className="glass-card overflow-hidden group"
            >
              {/* Project Header with gradient */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-6xl">{project.emoji}</span>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full glass text-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass text-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <HiExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-destructive/80 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-500/80 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Achievements</p>
                  <ul className="space-y-1">
                    {project.achievements.map((ach, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-medium flex items-center gap-1"
                    >
                      <HiCode className="text-xs" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
