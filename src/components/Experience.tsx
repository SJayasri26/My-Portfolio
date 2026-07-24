import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiBadgeCheck, HiLocationMarker } from "react-icons/hi";

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  logoText: string;
  logoBg: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Data Analyst",
    company: "Shastika Global Impex Pvt Ltd",
    type: "On-site",
    duration: "Mar 2026 – Current",
    location: "Erode, Tamil Nadu, India",
    logoText: "SG",
    logoBg: "from-primary to-yellow-500",
    responsibilities: [
      "Verified, cleaned, filtered, and maintained 2,000+ farmer records, ensuring data accuracy and consistency.",
      "Collected and maintained international buyer and market data for export business development.",
      "Prepared business reports and operational dashboards using Excel and Power BI.",
      "Collaborated with stall designers to finalize booth design and create posters, and represented the company at Agri Index 2026, engaging directly with farmers across Tamil Nadu and other states."
    ]
  },
  {
    role: "Data Analytics Intern",
    company: "iViewsense Pvt Ltd",
    type: "Remote",
    duration: "Jul 2023 – Jul 2024",
    location: "Remote",
    logoText: "IV",
    logoBg: "from-secondary to-indigo-500",
    responsibilities: [
      "Worked with real-time datasets to develop comprehensive reports and dashboards.",
      "Applied data cleaning, preprocessing, and visualization techniques.",
      "Generated actionable insights for client campaigns using Power BI and Excel.",
      "Maintained documentation for data workflows and reporting processes.",
      "Assisted senior analysts in performance analysis and predictive modeling."
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="experience" className="section-padding gradient-section relative" ref={ref}>
      <div className="blob-decoration w-72 h-72 bg-primary/15 bottom-10 right-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            Building expertise through real-world business and data analytics roles
          </p>
        </motion.div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="glass-card p-6 sm:p-8 md:p-10"
            >
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.logoBg} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg`}>
                  {exp.logoText}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-xs text-muted-foreground px-3 py-1 rounded-full glass">
                      📅 {exp.duration}
                    </span>
                    <span className="text-xs text-muted-foreground px-3 py-1 rounded-full glass">
                      📍 {exp.type}
                    </span>
                    <span className="text-xs text-muted-foreground px-3 py-1 rounded-full glass flex items-center gap-1">
                      <HiLocationMarker className="text-xs text-primary" /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <HiBriefcase className="text-primary text-base" /> Key Responsibilities & Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.responsibilities.map((resp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                    className="flex gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <HiBadgeCheck className="text-primary text-lg" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1 align-middle pt-1">{resp}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;