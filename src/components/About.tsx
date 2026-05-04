// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { HiAcademicCap, HiBriefcase, HiChartBar } from "react-icons/hi";

// const About = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="about" className="section-padding" ref={ref}>
//       <div className="max-w-5xl mx-auto">
        
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           className="text-3xl md:text-4xl font-bold gradient-text text-center mb-10"
//         >
//           About Me
//         </motion.h2>

//         {/* Content Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2 }}
//           className="glass-card p-8 md:p-10"
//         >
          
//           {/* Short Professional Summary */}
//           <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10 text-center">
//             Data Analyst with a strong focus on transforming data into meaningful insights. 
//             Skilled in <span className="text-foreground font-medium">Power BI, SQL, and Python</span>, 
//             with hands-on experience in analyzing business data, improving reporting efficiency, 
//             and supporting data-driven decision-making. Passionate about solving real-world problems 
//             and continuously learning new technologies.
//           </p>

//           {/* Quick Info Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
//             {/* Education */}
//             <div className="glass p-5 rounded-lg text-center hover:scale-105 transition-transform">
//               <HiAcademicCap className="text-3xl text-primary mx-auto mb-3" />
//               <h4 className="font-semibold text-foreground">B.Tech – IT</h4>
//               <p className="text-sm text-muted-foreground">CGPA: 8.36 / 10</p>
//               <p className="text-xs text-muted-foreground mt-1">
//                 Sri Shanmugha College of Engineering and Technology (2021–2025)
//               </p>
//             </div>

//             {/* Experience */}
//             <div className="glass p-5 rounded-lg text-center hover:scale-105 transition-transform">
//               <HiBriefcase className="text-3xl text-primary mx-auto mb-3" />
//               <h4 className="font-semibold text-foreground">Data Analyst Trainee</h4>
//               <p className="text-sm text-muted-foreground">
//                 Shastika Global Impex Pvt Ltd
//               </p>
//               <p className="text-xs text-muted-foreground mt-1">
//                 Current Role
//               </p>
//             </div>

//             {/* Skills Highlight */}
//             <div className="glass p-5 rounded-lg text-center hover:scale-105 transition-transform">
//               <HiChartBar className="text-3xl text-primary mx-auto mb-3" />
//               <h4 className="font-semibold text-foreground">Core Skills</h4>
//               <p className="text-sm text-muted-foreground">
//                 Power BI • SQL • Python
//               </p>
//               <p className="text-xs text-muted-foreground mt-1">
//                 Data Analytics
//               </p>
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiBriefcase, HiChartBar } from "react-icons/hi";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-10"
        >
          About Me
        </motion.h2>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >

          {/* Photo + Summary Row */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">

            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg">
                
                {/* Replace with your image path or URL */}
                <img
                  src="/jayasri.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>

            {/* Summary */}
            <p className="text-muted-foreground leading-relaxed text-center md:text-left">
              Data Analyst with a strong focus on transforming data into meaningful insights.
              Skilled in <span className="text-foreground font-medium">Power BI, SQL, and Python</span>,
              with hands-on experience in analyzing business data, improving reporting efficiency,
              and supporting data-driven decision-making. Passionate about solving real-world problems
              and continuously learning new technologies.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Education */}
            <div className="glass p-5 rounded-lg text-center hover:scale-105 transition-transform">
              <HiAcademicCap className="text-3xl text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground">B.Tech – IT</h4>
              <p className="text-sm text-muted-foreground">CGPA: 8.36 / 10</p>
              <p className="text-xs text-muted-foreground mt-1">
                Sri Shanmugha College of Engineering and Technology (2021–2025)
              </p>
            </div>

            {/* Experience */}
            <div className="glass p-5 rounded-lg text-center hover:scale-105 transition-transform">
              <HiBriefcase className="text-3xl text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground">Data Analyst Trainee</h4>
              <p className="text-sm text-muted-foreground">
                Shastika Global Impex Pvt Ltd
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Current Role
              </p>
            </div>

            {/* Skills */}
            <div className="glass p-5 rounded-lg text-center hover:scale-105 transition-transform">
              <HiChartBar className="text-3xl text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground">Core Skills</h4>
              <p className="text-sm text-muted-foreground">
                Power BI • SQL • Python
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Data Analytics
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;