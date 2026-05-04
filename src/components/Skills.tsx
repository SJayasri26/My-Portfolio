// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   SiPython, SiMysql, SiReact, SiHtml5, SiCss, SiJavascript, SiGoogle
// } from "react-icons/si";
// import { FaAws, FaChartBar, FaJava } from "react-icons/fa";
// import { HiChat, HiLightBulb, HiClock, HiUserGroup, HiVolumeUp } from "react-icons/hi";

// const leftColumn = [
//   {
//     title: "Data Analysis Tools",
//     skills: ["Power BI", "Tableau", "Excel"],
//   },
//   {
//     title: "Programming",
//     skills: ["Python", "Java"],
//   },
//   {
//     title: "Databases",
//     skills: ["MySQL"],
//   },
// ];

// const rightColumn = [
//   {
//     title: "Web Development",
//     skills: ["React", "HTML", "CSS", "JavaScript"],
//   },
//   // {
//   //   title: "Cloud",
//   //   skills: ["AWS"],
//   // },
//   {
//     title: "Tools",
//     skills: ["VS Code", "Google Workspace"],
//   },
// ];

// // const softSkills = [
// //   { icon: <HiChat />, label: "Communication" },
// //   { icon: <HiLightBulb />, label: "Problem Solving" },
// //   { icon: <HiClock />, label: "Time Management" },
// //   { icon: <HiVolumeUp />, label: "Active Listening" },
// //   { icon: <HiUserGroup />, label: "Team Collaboration" },
// // ];

// const Skills = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   return (
//     <section id="skills" className="section-padding" ref={ref}>
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12"
//         >
//           Skills
//         </motion.h2>

//         {/* 2 Column Layout */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Left Column */}
//           <div className="space-y-6">
//             {leftColumn.map((section, i) => (
//               <motion.div
//                 key={section.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: i * 0.1 }}
//                 className="p-6 rounded-2xl border border-purple-400/30 
//                            bg-white/5 backdrop-blur-lg 
//                            shadow-[0_0_20px_rgba(168,85,247,0.1)] 
//                            hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
//                            hover:-translate-y-2 transition-all duration-300"
//               >
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   {section.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-3">
//                   {section.skills.map((skill) => (
//                     <div
//                       key={skill}
//                       className="px-3 py-1.5 rounded-md text-sm 
//                                  border border-purple-300/30 
//                                  text-muted-foreground 
//                                  hover:bg-purple-500/10 
//                                  hover:border-purple-400 
//                                  transition-all"
//                     >
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             {rightColumn.map((section, i) => (
//               <motion.div
//                 key={section.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: i * 0.1 + 0.2 }}
//                 className="p-6 rounded-2xl border border-purple-400/30 
//                            bg-white/5 backdrop-blur-lg 
//                            shadow-[0_0_20px_rgba(168,85,247,0.1)] 
//                            hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
//                            hover:-translate-y-2 transition-all duration-300"
//               >
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   {section.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-3">
//                   {section.skills.map((skill) => (
//                     <div
//                       key={skill}
//                       className="px-3 py-1.5 rounded-md text-sm 
//                                  border border-purple-300/30 
//                                  text-muted-foreground 
//                                  hover:bg-purple-500/10 
//                                  hover:border-purple-400 
//                                  transition-all"
//                     >
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>

//         {/* Soft Skills
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.4 }}
//           className="mt-14"
//         >
//           <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
//             Soft Skills
//           </h3>

//           <div className="flex flex-wrap justify-center gap-4">
//             {softSkills.map((skill) => (
//               <div
//                 key={skill.label}
//                 className="px-4 py-2 rounded-lg 
//                            border border-purple-300/30 
//                            flex items-center gap-2 
//                            text-sm text-muted-foreground 
//                            hover:bg-purple-500/10 
//                            hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] 
//                            transition-all"
//               >
//                 <span className="text-accent">{skill.icon}</span>
//                 {skill.label}
//               </div>
//             ))}
//           </div>
//         </motion.div> */}

//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const sections = [
  {
    title: "Data Analysis Tools",
    skills: ["Power BI", "Tableau", "Excel"],
  },
  {
    title: "Programming",
    skills: ["Python", "Java"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Web Development",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Google Workspace"],
  },
];

const skillDetails = {
  "Power BI": {
    icon: "📊",
    description:
      "Microsoft's business analytics tool used to create interactive dashboards and reports. I use it to visualize data trends and generate insights from large datasets.",
    tags: ["Dashboards", "Reports", "Data viz"],
  },
  "Tableau": {
    icon: "📈",
    description:
      "A leading data visualization platform that connects to various data sources. I use Tableau to build compelling visual stories from complex data.",
    tags: ["Visual analytics", "Storytelling", "BI"],
  },
  "Excel": {
    icon: "🗂️",
    description:
      "Advanced Excel user — pivot tables, VLOOKUP, macros, and data modeling. A go-to tool for quick data analysis, reporting, and spreadsheet automation.",
    tags: ["Pivot tables", "Formulas", "Macros"],
  },
  "Python": {
    icon: "🐍",
    description:
      "My primary programming language for data analysis, automation, and scripting. Experienced with pandas, NumPy, matplotlib, and scikit-learn for data science workflows.",
    tags: ["pandas", "NumPy", "scikit-learn"],
  },
  "Java": {
    icon: "☕",
    description:
      "Solid foundation in Java for object-oriented programming, data structures, and algorithms. Used in academic projects and backend development.",
    tags: ["OOP", "Algorithms", "Backend"],
  },
  "MySQL": {
    icon: "🗄️",
    description:
      "Proficient in writing complex SQL queries, joins, aggregations, and stored procedures. Used MySQL to manage and query relational databases for data-driven applications.",
    tags: ["Queries", "Joins", "Stored procs"],
  },
  "React": {
    icon: "⚛️",
    description:
      "Building modern, component-driven web UIs with React. Comfortable with hooks, state management, and integrating APIs to build responsive single-page apps.",
    tags: ["Hooks", "SPA", "REST APIs"],
  },
  "HTML": {
    icon: "🌐",
    description:
      "Strong command of semantic HTML5 — structuring accessible, well-organized web pages that are SEO-friendly and screen-reader compatible.",
    tags: ["Semantic markup", "Accessibility", "SEO"],
  },
  "CSS": {
    icon: "🎨",
    description:
      "Crafting responsive, visually polished layouts using CSS3, Flexbox, Grid, and animations. Experienced with Tailwind CSS for utility-first styling.",
    tags: ["Flexbox", "Grid", "Tailwind"],
  },
  "JavaScript": {
    icon: "⚡",
    description:
      "Core JavaScript skills including DOM manipulation, async/await, fetch APIs, and ES6+ syntax. Used to add interactivity and logic to web applications.",
    tags: ["ES6+", "Async/await", "DOM"],
  },
  "VS Code": {
    icon: "🖥️",
    description:
      "Primary code editor with a customized setup — extensions, themes, keyboard shortcuts, and integrated terminals to maximize productivity.",
    tags: ["Extensions", "Debugging", "Git"],
  },
  "Google Workspace": {
    icon: "🔧",
    description:
      "Proficient with Docs, Sheets, Slides, and Drive for collaboration, documentation, and data management in team environments.",
    tags: ["Docs", "Sheets", "Drive"],
  },
};

const SkillPopup = ({ skill, onClose }) => {
  const detail = skillDetails[skill];
  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-sm rounded-2xl border border-purple-400/40 
                   bg-background/95 backdrop-blur-xl 
                   shadow-[0_0_40px_rgba(168,85,247,0.25)] 
                   p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full 
                     border border-purple-300/30 text-muted-foreground 
                     flex items-center justify-center text-sm
                     hover:bg-purple-500/10 hover:border-purple-400 
                     transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-300/30 
                          flex items-center justify-center text-xl">
            {detail.icon}
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">{skill}</h3>
            <p className="text-xs text-muted-foreground">
              {sections.find((s) => s.skills.includes(skill))?.title}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {detail.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {detail.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs 
                         bg-purple-500/10 border border-purple-300/30 
                         text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeSkill, setActiveSkill] = useState(null);

  const leftColumn = sections.slice(0, 3);
  const rightColumn = sections.slice(3);

  return (
    <>
      <section id="skills" className="section-padding" ref={ref}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12"
          >
            Skills
          </motion.h2>

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-5">
              {leftColumn.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-purple-400/30 
                             bg-white/5 backdrop-blur-lg 
                             shadow-[0_0_20px_rgba(168,85,247,0.1)] 
                             hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
                             hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    {section.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {section.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => setActiveSkill(skill)}
                        className="px-3 py-1.5 rounded-md text-sm 
                                   border border-purple-300/30 
                                   text-muted-foreground 
                                   hover:bg-purple-500/10 
                                   hover:border-purple-400 
                                   hover:text-foreground
                                   hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]
                                   transition-all cursor-pointer"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              {rightColumn.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="p-5 rounded-2xl border border-purple-400/30 
                             bg-white/5 backdrop-blur-lg 
                             shadow-[0_0_20px_rgba(168,85,247,0.1)] 
                             hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
                             hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    {section.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {section.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => setActiveSkill(skill)}
                        className="px-3 py-1.5 rounded-md text-sm 
                                   border border-purple-300/30 
                                   text-muted-foreground 
                                   hover:bg-purple-500/10 
                                   hover:border-purple-400 
                                   hover:text-foreground
                                   hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]
                                   transition-all cursor-pointer"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      {activeSkill && (
        <SkillPopup skill={activeSkill} onClose={() => setActiveSkill(null)} />
      )}
    </>
  );
};

export default Skills;