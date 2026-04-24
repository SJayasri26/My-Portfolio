import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiDatabase, HiShieldCheck } from "react-icons/hi";

const projects = [
  {
    icon: <HiDatabase className="text-3xl text-primary" />,
    title: "Attendance Management System",
    points: [
      "Built a full-stack attendance tracking application using React, Node.js, and MySQL",
      "Developed dashboards for daily, weekly, monthly, and yearly attendance reporting",
      "Implemented search and filter functionalities for quick access to student data",
      "Automated calculation of attendance percentages to improve accuracy",
      "Enhanced reporting efficiency, reducing manual errors and time spent",
    ],
  },
  {
    icon: <HiShieldCheck className="text-3xl text-primary" />,
    title: "Malware URL Detection",
    points: [
      "Developed a system to classify malicious URLs using Python and data preprocessing",
      "Cleaned, transformed, and validated datasets for accurate prediction",
      "Applied algorithms to improve detection accuracy and minimize false positives",
      "Generated insights from threat data to strengthen cybersecurity measures",
      "Improved malware detection workflow, aiding safer browsing for users",
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
