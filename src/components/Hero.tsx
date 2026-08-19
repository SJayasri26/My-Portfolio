import { motion } from "framer-motion";
import { HiDownload, HiArrowDown, HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 gradient-hero overflow-hidden">
      {/* Decorative Blobs */}
      <div className="blob-decoration w-72 h-72 bg-primary/30 top-20 -left-20" />
      <div className="blob-decoration w-96 h-96 bg-secondary/20 bottom-10 -right-24" style={{ animationDelay: "3s" }} />
      <div className="blob-decoration w-48 h-48 bg-primary/20 top-1/2 left-1/3" style={{ animationDelay: "5s" }} />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Jayasri S</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/80 mb-3"
            >
              Data Analyst
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="w-16 h-1 bg-primary rounded-full mb-5 mx-auto lg:mx-0 origin-left"
            />

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground mb-4"
            >
              <HiLocationMarker className="text-primary" />
              Erode, Tamil Nadu, India
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Transforming complex data into meaningful insights. Skilled in Power BI, SQL, and Python,
              with hands-on experience in business data analysis and report optimization.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="/Jayasri_Seenu.pdf"
                download
                className="btn-primary flex items-center justify-center gap-2"
              >
                <HiDownload className="text-lg" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <HiArrowDown className="text-lg" />
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://linkedin.com/in/jayasri-s-18b972298/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://github.com/SJayasri26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:sjayasri39@gmail.com"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-xl animate-pulse" />

              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-2xl shadow-primary/20">
                <img
                  src="/JAYASRI.jpeg"
                  alt="Jayasri S - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-current"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;