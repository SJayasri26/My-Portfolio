// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   SiPython, SiMysql, SiPostgresql,
//   SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
//   SiFlask, SiJira, SiGit, SiGoogle
// } from "react-icons/si";
// import { VscCode } from "react-icons/vsc";
// import { FaAws, FaChartBar, FaJava, FaMicrosoft } from "react-icons/fa";
// import { HiChartBar, HiChat, HiLightBulb, HiClock, HiUserGroup, HiVolumeUp } from "react-icons/hi";

// const leftColumn = [
//   {
//     title: "Data Analysis Tools",
//     skills: ["Power BI", "Tableau", "Excel"],
//     icon: <FaChartBar />,
//   },
//   {
//     title: "Programming",
//     skills: ["Python", "Java"],
//     icon: <SiPython />,
//   },
//   {
//     title: "Databases",
//     skills: ["MySQL"],
//     icon: <SiMysql />,
//   },
// ];

// const rightColumn = [
//   {
//     title: "Web Development",
//     skills: ["React", "HTML", "CSS", "JavaScript"],
//     icon: <SiReact />,
//   },
//   {
//     title: "Cloud",
//     skills: ["AWS"],
//     icon: <FaAws />,
//   },
//   {
//     title: "Tools",
//     skills: ["VS Code", "Google Workspace"],
//     icon: <SiGoogle />,
//   },
// ];

// const softSkills = [
//   { icon: <HiChat />, label: "Communication" },
//   { icon: <HiLightBulb />, label: "Problem Solving" },
//   { icon: <HiClock />, label: "Time Management" },
//   { icon: <HiVolumeUp />, label: "Active Listening" },
//   { icon: <HiUserGroup />, label: "Team Collaboration" },
// ];

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
//         <div className="grid md:grid-cols-2 gap-10">

//           {/* Left Column */}
//           <div className="space-y-8">
//             {leftColumn.map((section, i) => (
//               <motion.div
//                 key={section.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <h3 className="text-lg font-semibold text-foreground mb-3">
//                   {section.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-3">
//                   {section.skills.map((skill) => (
//                     <div
//                       key={skill}
//                       className="glass-card px-4 py-2 rounded-lg text-sm text-muted-foreground"
//                     >
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             {rightColumn.map((section, i) => (
//               <motion.div
//                 key={section.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: i * 0.1 + 0.2 }}
//               >
//                 <h3 className="text-lg font-semibold text-foreground mb-3">
//                   {section.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-3">
//                   {section.skills.map((skill) => (
//                     <div
//                       key={skill}
//                       className="glass-card px-4 py-2 rounded-lg text-sm text-muted-foreground"
//                     >
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>

//         {/* Soft Skills */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.4 }}
//           className="mt-14"
//         >
//           <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
//             Soft Skills
//           </h3>

//           <div className="flex flex-wrap justify-center gap-4">
//             {softSkills.map((skill) => (
//               <div
//                 key={skill.label}
//                 className="glass-card px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-muted-foreground"
//               >
//                 <span className="text-accent">{skill.icon}</span>
//                 {skill.label}
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython, SiMysql, SiReact, SiHtml5, SiCss, SiJavascript, SiGoogle
} from "react-icons/si";
import { FaAws, FaChartBar, FaJava } from "react-icons/fa";
import { HiChat, HiLightBulb, HiClock, HiUserGroup, HiVolumeUp } from "react-icons/hi";

const leftColumn = [
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
];

const rightColumn = [
  {
    title: "Web Development",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Cloud",
    skills: ["AWS"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Google Workspace"],
  },
];

// const softSkills = [
//   { icon: <HiChat />, label: "Communication" },
//   { icon: <HiLightBulb />, label: "Problem Solving" },
//   { icon: <HiClock />, label: "Time Management" },
//   { icon: <HiVolumeUp />, label: "Active Listening" },
//   { icon: <HiUserGroup />, label: "Team Collaboration" },
// ];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12"
        >
          Skills
        </motion.h2>

        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Column */}
          <div className="space-y-6">
            {leftColumn.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-purple-400/30 
                           bg-white/5 backdrop-blur-lg 
                           shadow-[0_0_20px_rgba(168,85,247,0.1)] 
                           hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
                           hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-md text-sm 
                                 border border-purple-300/30 
                                 text-muted-foreground 
                                 hover:bg-purple-500/10 
                                 hover:border-purple-400 
                                 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumn.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="p-6 rounded-2xl border border-purple-400/30 
                           bg-white/5 backdrop-blur-lg 
                           shadow-[0_0_20px_rgba(168,85,247,0.1)] 
                           hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
                           hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-md text-sm 
                                 border border-purple-300/30 
                                 text-muted-foreground 
                                 hover:bg-purple-500/10 
                                 hover:border-purple-400 
                                 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Soft Skills
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-14"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Soft Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.label}
                className="px-4 py-2 rounded-lg 
                           border border-purple-300/30 
                           flex items-center gap-2 
                           text-sm text-muted-foreground 
                           hover:bg-purple-500/10 
                           hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] 
                           transition-all"
              >
                <span className="text-accent">{skill.icon}</span>
                {skill.label}
              </div>
            ))}
          </div>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Skills;
