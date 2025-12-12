import { motion } from 'framer-motion';
import { Mail, Twitter, ArrowUp, Linkedin, Dribbble, Instagram, MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (linkName: string) => {
    // For Services, navigate to "Services I Provide" section
    if (linkName === 'Services') {
      const element = document.getElementById('services-i-provide');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // For other links, scroll to sections
    const sectionId = linkName.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sarthak-mule-37bb21248/', label: 'LinkedIn' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Twitter, href: 'https://x.com/home', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-section">
      {/* Top Section - Let's Connect */}
      <div className="footer-top">
        <div className="footer-top-container">
          <div className="footer-top-content">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="footer-title"
            >
              Let's Connect there
            </motion.h2>
            
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-main-container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="footer-company"
            >
              <div className="footer-logo">
                <div className="footer-logo-circle">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="footer-logo-text">Sarthak</span>
              </div>
              <p className="footer-description">
                Designing seamless user experiences and building powerful digital products.
              </p>
             
              <div className="footer-social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="footer-social-link"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="footer-column"
            >
              <h4>Navigation</h4>
              <ul className="footer-links">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => handleNavClick(link.name)}
                      whileHover={{ x: 5 }}
                      className="footer-link-button"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="footer-column"
            >
              <h4>Contact</h4>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <span>+91 9730916509</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="footer-contact-item">
                  <Globe className="footer-contact-icon" />
                  <span>www.sarthak.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <span>sarthakmule2@gmail.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span>Nagpur, Maharashtra, India</span>
                </motion.div>
              </div>
              
              
            </motion.div>

            {/* Newsletter */}
            
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="footer-copyright"
          >
            © 2026 Sarthak. All rights reserved.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="footer-scroll-top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
