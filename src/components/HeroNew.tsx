import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import portimage from '../assets/portimage.jpg';

const HeroNew = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePortfolioClick = () => {
    const element = document.getElementById('services-i-provide');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section id="home" className="hero-section" ref={ref}>
      <div className="hero-container">
        {/* Left Column - Text Content */}
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hello-badge" variants={itemVariants}>
            Hello There!
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            I'm <span className="highlighted-name">Sarthak Mule</span>,<br />
            UI/UX Designer & Full Stack Developer<br />
            Based in India.
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I'm an experienced Developer in this field, collaborating with various companies and startups.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <button className="portfolio-btn" onClick={handlePortfolioClick}>
              View My Portfolio
              <ArrowDown size={16} />
            </button>
            <button className="hire-btn">
              Let's Connect
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Hero Image */}
        <motion.div
          className="hero-right"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="hero-image-container">
            <img 
              src={portimage} 
              alt="Sarthak Mule - Portfolio" 
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Services Strip */}
      <div className="services-strip">
        <div className="services-content">
          <span>App Design</span>
          <span className="separator">•</span>
          <span>Website Design</span>
          <span className="separator">•</span>
          <span>Dashboard</span>
          <span className="separator">•</span>
          <span>Wireframe</span>
          <span>Business websites</span>
          <span className="separator">•</span>
          <span>Product pages</span>
          <span className="separator">•</span>
          <span>Admin panels</span>
          <span className="separator">•</span>
          <span>Cart</span>
          <span className="separator">•</span>
          <span>Wishlist</span>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
