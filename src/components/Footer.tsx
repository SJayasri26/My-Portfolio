import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center text-primary-foreground font-bold text-sm">
                JS
              </div>
              <span className="text-lg font-bold text-foreground">Jayasri S</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Data Analyst.
              Transforming complex data into meaningful insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Experience", "Projects", "Certifications", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/jayasri-s-18b972298/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://github.com/SJayasri26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="mailto:sjayasri39@gmail.com"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {currentYear} Jayasri S.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
            aria-label="Back to top"
          >
            <HiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
