import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiAcademicCap, HiShieldCheck } from "react-icons/hi";

const experiences = [
  {
    title: "Data Analysis",
    company: "Shastika Global Impex Pvt Ltd",
    // period: "Current",
    type: "Full-time",
    badge: "Current",
    icon: HiBriefcase,
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    typeColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    points: [
      "Analyze complex business data to identify trends and actionable insights",
      "Perform data cleaning, validation, and transformation for accurate reporting",
      "Collaborate cross-functionally to understand requirements and deliver dashboards",
      "Automate recurring reporting tasks using scripts to improve efficiency",
      "Monitor KPIs and provide recommendations to optimize business processes",
    ],
  },
  {
    title: "Data Analytics Intern",
    company: "iViewsense Pvt Ltd",
    period: "Jul 2023 – Jul 2024",
    type: "Internship",
    badge: "1 Year",
    icon: HiAcademicCap,
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/30",
    badgeColor: "bg-violet-500/10 text-violet-400 border border-violet-500/30",
    typeColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    points: [
      "Worked with real-time datasets to develop comprehensive reports and dashboards",
      "Applied data cleaning, preprocessing, and visualization techniques",
      "Generated actionable insights for client campaigns using Power BI and Excel",
      "Maintained documentation for data workflows and reporting processes",
      "Assisted senior analysts in performance analysis and predictive modeling",
    ],
  },
  // {
  //   title: "Cyber Security Intern",
  //   company: "K7 Cyber Security",
  //   period: "Jan 2024 – Feb 2024",
  //   type: "Internship",
  //   badge: "2 Months",
  //   icon: HiShieldCheck,
  //   color: "from-rose-500 to-pink-500",
  //   borderColor: "border-rose-500/30",
  //   badgeColor: "bg-rose-500/10 text-rose-400 border border-rose-500/30",
  //   typeColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  //   points: [
  //     "Analyzed malware and performed URL detection to prevent threats",
  //     "Conducted data validation and verification for security processes",
  //     "Prepared detailed reports on findings and presented to the team",
  //     "Contributed to developing strategies for efficient malware detection",
  //     "Assisted in automating repetitive tasks for security checks",
  //   ],
  // },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground text-sm mb-12"
        >
          {experiences.filter(e => e.type === "Internship").length} Internships &nbsp;·&nbsp;{" "}
          {experiences.filter(e => e.type === "Full-time").length} Full-time Role
        </motion.p>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 timeline-line" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className={`relative mb-10 pl-12 md:pl-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot with icon */}
                <div
                  className={`absolute top-2 left-3 md:left-auto flex items-center justify-center w-5 h-5 rounded-full bg-primary ${
                    i % 2 === 0 ? "md:right-[-10px]" : "md:left-[-10px]"
                  }`}
                >
                  <Icon className="text-white text-[10px]" />
                </div>

                <div className={`glass-card p-6 border ${exp.borderColor} hover:shadow-lg transition-shadow duration-300`}>

                  {/* Top badges row */}
                  <div className={`flex flex-wrap gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${exp.typeColor}`}>
                      {exp.type}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                  </div>

                  {/* Period */}
                  <span className="text-xs font-medium text-primary">{exp.period}</span>

                  {/* Title & Company */}
                  <h3 className="text-lg font-bold text-foreground mt-1">{exp.title}</h3>

                  {/* Company with gradient accent */}
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.company}
                  </p>

                  {/* Divider */}
                  <div className={`w-full h-px bg-gradient-to-r ${exp.color} opacity-20 mb-3`} />

                  {/* Points */}
                  <ul className={`space-y-1.5 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.points.map((p, j) => (
                      <li key={j} className={`flex items-start gap-1.5 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} shrink-0`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;