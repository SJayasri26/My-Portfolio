import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCloud } from "react-icons/hi";
import { SiPython, SiDatabricks } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

const certs = [
  {
    title: "Data Analytics using Power BI",
    issuer: "Professional Training",
    desc: "Built dashboards, data models, and business insights using Power BI.",
    icon: <FaChartBar />,
  },
  {
    title: "Python Full Stack Course",
    issuer: "Udemy",
    desc: "Covered Python, backend logic, and web development fundamentals.",
    icon: <SiPython />,
  },
  {
    title: "Associate Data Analyst",
    issuer: "DataCamp",
    desc: "Focused on data cleaning, analysis, and visualization techniques.",
    icon: <SiDatabricks />,
  },
  {
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    desc: "Learned cloud fundamentals, deployment models, and services.",
    icon: <HiCloud />,
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding pb-24" ref={ref}>
      {/* ⬆️ Added pb-24 to avoid touching Contact section */}

      <div className="max-w-5xl mx-auto">
        {/* ⬆️ Increased width */}

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold gradient-text text-center mb-14"
        >
          Certifications
        </motion.h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-7 rounded-2xl border border-border 
                         hover:shadow-xl hover:-translate-y-2 
                         transition-all duration-300"
            >
              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="p-3 rounded-lg bg-primary/10 text-primary text-2xl">
                  {cert.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {cert.desc}
                  </p>
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