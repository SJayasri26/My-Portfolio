import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { HiGlobe, HiChartBar, HiLightningBolt, HiAcademicCap, HiBriefcase } from "react-icons/hi";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: HiLightningBolt,
    value: 2,
    suffix: "+",
    label: "Core Academic/Technical Projects",
    color: "text-primary",
  },
  {
    icon: HiAcademicCap,
    value: 4,
    suffix: "",
    label: "Professional Certifications Earned",
    color: "text-secondary",
  },
  {
    icon: HiChartBar,
    value: 10,
    suffix: "+",
    label: "Data & Developer Tools Mastered",
    color: "text-primary",
  },
  {
    icon: HiBriefcase,
    value: 1,
    suffix: "+",
    label: "Years of Experience (Internship & Job)",
    color: "text-secondary",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const achievements = [
  "Built an Attendance Management System featuring React, Node.js, and MySQL, streamlining data tracking and dashboard reporting.",
  "Developed a Malware URL Detection System utilizing Python and data preprocessing algorithms to accurately identify security threats.",
  "Created automated data cleaning workflows and visual reports to optimize daily KPI and operational metrics analysis.",
  "Acquired deep knowledge of cloud computing, SQL data modeling, and full stack Python development through verified credentials.",
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="achievements" className="section-padding gradient-section relative" ref={ref}>
      <div className="blob-decoration w-72 h-72 bg-secondary/15 -top-10 left-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            Measurable impact through dedicated work and continuous improvement
          </p>
        </motion.div>

        {/* Animated Stats Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="stat-card"
            >
              <stat.icon className={`text-3xl ${stat.color} mx-auto mb-3`} />
              <div className="stat-number mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
