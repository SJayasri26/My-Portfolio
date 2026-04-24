import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  { icon: <HiPhone className="text-3xl" />, href: "tel:+918838452292", label: "Phone" },
  { icon: <HiMail className="text-3xl" />, href: "mailto:sjayasri39@gmail.com", label: "Email" },
  { icon: <FaGithub className="text-3xl" />, href: "https://github.com/SJayasri26", label: "GitHub", external: true },
  { icon: <FaLinkedin className="text-3xl" />, href: "https://linkedin.com/in/jayasri-s-18b972298", label: "LinkedIn", external: true },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding pt-24 pb-28" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold gradient-text mb-6"
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-12 max-w-md mx-auto"
        >
          Let’s connect and build something meaningful together.
        </motion.p>

        {/* Contact Icons */}
        <div className="flex justify-center flex-wrap gap-6">

          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="group relative p-5 rounded-2xl 
                         glass-card 
                         border border-border 
                         hover:border-primary/40 
                         hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] 
                         hover:-translate-y-2 
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>

              {/* Tooltip (on hover) */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                               text-xs text-muted-foreground opacity-0 
                               group-hover:opacity-100 transition">
                {link.label}
              </span>
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Contact;