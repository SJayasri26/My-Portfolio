import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiBadgeCheck, HiPresentationChartBar } from "react-icons/hi";
import { SiPython } from "react-icons/si";
import { FaDatabase, FaCloud } from "react-icons/fa";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const certifications: Certification[] = [
  {
    title: "Data Analytics using Power BI",
    issuer: "Professional Training",
    description: "Built dashboards, data models, and business insights using Power BI.",
    icon: HiPresentationChartBar,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Python Full Stack Course",
    issuer: "Udemy",
    description: "Covered Python, backend logic, and web development fundamentals.",
    icon: SiPython,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Associate Data Analyst",
    issuer: "DataCamp",
    description: "Focused on data cleaning, analysis, and visualization techniques.",
    icon: FaDatabase,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    description: "Learned cloud fundamentals, deployment models, and services.",
    icon: FaCloud,
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div className="blob-decoration w-64 h-64 bg-primary/15 bottom-20 -left-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${cert.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <cert.icon className={`text-xl ${cert.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground text-sm">
                      {cert.title}
                    </h4>
                    <HiBadgeCheck className="text-primary text-base flex-shrink-0" />
                  </div>
                  <p className="text-xs text-primary font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="mt-4 pt-3 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <HiAcademicCap className="text-primary" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;