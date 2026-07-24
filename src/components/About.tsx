import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiBriefcase, HiChartBar, HiLightBulb } from "react-icons/hi";
import { FaDatabase, FaChartLine } from "react-icons/fa";

const highlights = [
  {
    icon: FaDatabase,
    title: "Data Analytics",
    description: "Power BI, Tableau, SQL, Python & Excel",
    color: "text-primary",
  },
  {
    icon: HiAcademicCap,
    title: "B.Tech – IT",
    description: "CGPA: 8.36 / 10 · Sri Shanmugha College (2021–2025)",
    color: "text-secondary",
  },
  {
    icon: FaChartLine,
    title: "Data Insights",
    description: "KPI Monitoring, Dashboard Reports & Data Preprocessing",
    color: "text-primary",
  },
  {
    icon: HiBriefcase,
    title: "Data Analyst",
    description: "Currently working at Shastika Global Impex Pvt Ltd",
    color: "text-secondary",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="about" className="section-padding gradient-section relative" ref={ref}>
      {/* Decorative blob */}
      <div className="blob-decoration w-64 h-64 bg-primary/20 -top-20 right-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Data Analyst with a passion for transforming data into meaningful insights
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          {/* Left: Photo + Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src="/WhatsApp Image 2026-06-22 at 5.35.01 PM.jpeg"
                  alt="Jayasri S"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* Right: Description + Cards */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Data Analyst with hands-on full-stack development and business operations experience. Skilled in{" "}
                <span className="text-foreground font-medium">
                  Power BI, SQL, Python, and Excel
                </span>
                {" "}for turning raw business data into actionable insights, while also building and maintaining ERP systems and supporting end-to-end export operations, vendor coordination, and marketing.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Passionate about combining data analysis with technology to solve real-world business problems. Currently working as a{" "}
                <span className="text-primary font-medium">
                  Data Analyst
                </span>{" "}
                at Shastika Global Impex Pvt Ltd.
              </p>

              <div className="flex items-center gap-2 mb-8">
                <HiLightBulb className="text-primary text-lg" />
                <p className="text-sm text-muted-foreground italic">
                  "Turning complex data into actionable insights"
                </p>
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="glass-card p-5 group cursor-default"
                >
                  <item.icon className={`text-2xl ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;