// import { motion } from "framer-motion";
// import { HiDownload, HiLocationMarker, HiArrowDown } from "react-icons/hi";

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-visible">
//       <div className="max-w-5xl w-full mx-auto flex flex-col items-start text-left">

//         {/* Greeting */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-muted-foreground text-base mb-2"
//         >
//           Hello, I'm
//         </motion.p>

//         {/* Name (FIXED COMPLETELY) */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-5xl md:text-7xl font-bold gradient-text mb-3 leading-[1.2] pb-2 overflow-visible"
//         >
//           Jayasri Seenu
//         </motion.h1>

//         {/* Role */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.25 }}
//           className="text-xl md:text-2xl font-semibold text-foreground mb-4"
//         >
//           Data Analyst
//         </motion.h2>

//         {/* Divider */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 0.3 }}
//           className="w-12 h-[2px] bg-primary mb-5 origin-left"
//         />

//         {/* Location */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="flex items-center gap-2 text-muted-foreground mb-6"
//         >
//           <HiLocationMarker className="text-primary" />
//           Salem, Tamil Nadu, India
//         </motion.p>

//         {/* Summary */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-muted-foreground max-w-xl leading-relaxed mb-10"
//         >
//           Passionate about transforming raw data into actionable insights and helping
//           businesses make smarter, data-driven decisions.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6 }}
//           className="flex flex-wrap gap-4"
//         >
//           <a
//             href="/Jayasri_Seenu_Resume.pdf"
//             download
//             className="btn-gradient inline-flex items-center gap-2 px-6 py-3 text-base"
//           >
//             <HiDownload className="text-lg" />
//             Download Resume
//           </a>

//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 px-6 py-3 text-base rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors"
//           >
//             <HiArrowDown className="text-lg" />
//             Contact Me
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { HiDownload, HiLocationMarker, HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center md:items-start text-center md:text-left">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm sm:text-base text-muted-foreground mb-2"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-3 leading-tight"
        >
          Jayasri Seenu
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-4"
        >
          Data Analyst
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="w-10 sm:w-12 h-[2px] bg-primary mb-4 origin-center md:origin-left"
        />

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base text-muted-foreground mb-5"
        >
          <HiLocationMarker className="text-primary" />
          Salem, Tamil Nadu, India
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base text-muted-foreground max-w-md md:max-w-xl leading-relaxed mb-8"
        >
          Passionate about transforming raw data into actionable insights and helping
          businesses make smarter, data-driven decisions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="/Jayasri_Seenu_Resume.pdf"
            download
            className="btn-gradient flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base w-full sm:w-auto"
          >
            <HiDownload className="text-lg" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors w-full sm:w-auto"
          >
            <HiArrowDown className="text-lg" />
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;