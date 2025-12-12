import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Award, Target, ArrowRight } from 'lucide-react';
import sarthakResume from '../assets/Sarthak resume (2).pdf';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  const skills = [
    "UX/UI Design", "Mobile App Design", "Website Design", 
    "Design System", "Prototype", "Wireframe Design"
  ];

  const stats = [
    { icon: <Target size={24} />, number: "15+", label: "Project Completed" },
    { icon: <Award size={24} />, number: "5+", label: "Industry Covered" },
    { icon: <User size={24} />, number: "1+", label: "Years of Experience" }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        {/* Left Column - Image */}
        <motion.div
          className="about-left"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="image-container">
            {/* Yellow Background Circle */}
            <div className="yellow-circle">
              {/* Skill Tags Inside Circle */}
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-tag-circle about-skill-${index % 2 === 0 ? 'yellow' : 'green'}`}
                  style={{
                    position: 'absolute',
                    top: `${30 + (index * 35)}px`,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          className="about-right"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="about-title" variants={itemVariants}>
            <span className="about-yellow">About</span> Me
          </motion.h2>
          
          <motion.h3 className="about-subtitle" variants={itemVariants}>
            Who is Sarthak Mule?
          </motion.h3>
          
          <motion.p className="about-description" variants={itemVariants}>
            I'm an experienced UI/UX Designer & Full Stack Developer with 18+ years in the field, 
            collaborating with various companies and startups. I specialize in creating intuitive, 
            user-centered designs that bridge the gap between aesthetics and functionality. 
            My expertise spans from concept ideation to implementation, ensuring seamless digital experiences.
          </motion.p>
          
          {/* Statistics */}
          <motion.div className="stats-vertical-container" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-vertical-item">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Download CV Button and Signature */}
          <div className="download-signature-row">
            <a 
              href={sarthakResume} 
              download="Sarthak resume (2).pdf"
              className="download-cv-btn"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Download CV
              <ArrowRight size={16} />
            </a>
            
            <div className="signature">
              Sarthak Mule
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
