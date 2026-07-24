import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SiMysql, SiPython } from "react-icons/si";
import { FaChartBar, FaChartLine, FaFileExcel, FaReact, FaHtml5, FaJs, FaJava, FaGoogle, FaCode, FaDatabase, FaGithub, FaNodeJs } from "react-icons/fa";

type SkillCategory = "data" | "dev_tools";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number; // percentage
  category: SkillCategory;
}

const skills: Skill[] = [
  // Data Analysis & Databases
  { name: "Power BI", icon: FaChartLine, level: 90, category: "data" },
  { name: "Tableau", icon: FaChartBar, level: 85, category: "data" },
  { name: "Advanced Excel", icon: FaFileExcel, level: 90, category: "data" },
  { name: "MySQL", icon: SiMysql, level: 85, category: "data" },
  { name: "PostgreSQL", icon: FaDatabase, level: 80, category: "data" },
  { name: "Data Analytics", icon: FaChartBar, level: 88, category: "data" },

  // Programming, Web Dev & Tools
  { name: "Python", icon: SiPython, level: 80, category: "dev_tools" },
  { name: "Java", icon: FaJava, level: 75, category: "dev_tools" },
  { name: "React", icon: FaReact, level: 80, category: "dev_tools" },
  { name: "Node.js", icon: FaNodeJs, level: 75, category: "dev_tools" },
  { name: "HTML & CSS", icon: FaHtml5, level: 90, category: "dev_tools" },
  { name: "Tailwind CSS", icon: FaCode, level: 85, category: "dev_tools" },
  { name: "Vite", icon: FaCode, level: 80, category: "dev_tools" },
  { name: "JavaScript", icon: FaJs, level: 80, category: "dev_tools" },
  { name: "Git/GitHub", icon: FaGithub, level: 85, category: "dev_tools" },
  { name: "VS Code", icon: FaCode, level: 85, category: "dev_tools" },
  { name: "Google Workspace", icon: FaGoogle, level: 85, category: "dev_tools" },
  { name: "Zoho Workspace", icon: FaCode, level: 80, category: "dev_tools" },
  { name: "Antigravity IDE", icon: FaCode, level: 85, category: "dev_tools" },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("data");

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="blob-decoration w-80 h-80 bg-secondary/15 top-20 -left-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            A blend of data analysis techniques and software development capabilities
          </p>
        </motion.div>

        {/* Category Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-2xl p-1.5 inline-flex gap-1">
            <button
              onClick={() => setActiveCategory("data")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === "data"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📊 Data & Analytics
            </button>
            <button
              onClick={() => setActiveCategory("dev_tools")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === "dev_tools"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              💻 Programming & Tools
            </button>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              className="glass-card p-5 group cursor-default"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary text-lg" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{skill.name}</h4>
              </div>




            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;