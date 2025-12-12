import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Services', 'About', 'Skills', 'Projects', 'Education'];

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // If at top, set to Home
      if (scrollPosition < 100) {
        setActiveLink('Home');
        return;
      }
      
      // Check which section is currently in view
      const sections = navLinks.map(link => {
        if (link === 'Services') {
          return { name: link, element: document.getElementById('services-i-provide') };
        }
        return { name: link, element: document.getElementById(link.toLowerCase()) };
      });
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveLink(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    
    // For Services, navigate to "Services I Provide" section
    if (link === 'Services') {
      const element = document.getElementById('services-i-provide');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // For other links, scroll to sections on current page
    const sectionId = link.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-circle">
            <span className="logo-text">S</span>
          </div>
          <span className="brand-name">Sarthak.</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link}
              className={`nav-link ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Contact Button - Desktop */}
        <button className="contact-btn desktop-only" onClick={handleContactClick}>Contact Me</button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <button
              key={link}
              className={`mobile-nav-link ${activeLink === link ? 'active' : ''}`}
              onClick={() => {
                handleNavClick(link);
                setIsMobileMenuOpen(false);
              }}
            >
              {link}
            </button>
          ))}
          <button 
            className="mobile-contact-btn" 
            onClick={() => {
              handleContactClick();
              setIsMobileMenuOpen(false);
            }}
          >
            Contact Me
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;