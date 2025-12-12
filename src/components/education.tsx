import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
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

  const educationData = [
    {
      period: "2016 - 2020",
      institution: "Maharishi Vidya Mandir Bhandara",
      degree: "CBSE"
    },
    {
      period: "2020 - 2022",
      institution: "The Lord's Public School Bhandara",
      degree: "HSC"
    },
    {
      period: "2022 - 2026",
      institution: "G.H. Raisoni College of Engineering and Management Nagpur",
      degree: "B-tech in Computer Science and Engineering"
      
    }
  ];

  const workExperienceData = [
    {
      period: "Dec 2024",
      company: "Sunflag Iron and Steel Industry Pvt.ltd",
      role: "Full Stack Developer"
    },
    {
      period: "june 2025 - dec 2025",
      company: "BoostNow Solution LLP",
      role: "FullStack Developer"
    },
    {
      period: "Jan 2026 - March 2026",
      company: "MediGhar",
      role: "UI/UX Designer"
    }
  ];

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="education-container">
        {/* Header */}
        <motion.div 
          className="education-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="education-title" variants={itemVariants}>
            My <span className="education-orange">Academic and Professional Journey</span>
          </motion.h2>
        </motion.div>

        {/* Cards Container */}
        <motion.div 
          className="education-cards-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Education Card */}
          <motion.div 
            className="education-card"
            variants={itemVariants}
          >
            <div className="card-header">
              <GraduationCap size={24} className="card-icon" />
              <h3 className="card-title">Education</h3>
            </div>
            <div className="card-content">
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-info">
                    <div className="timeline-institution">{item.institution}</div>
                    <div className="timeline-degree">{item.degree}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Card */}
          <motion.div 
            className="education-card"
            variants={itemVariants}
          >
            <div className="card-header">
              <Briefcase size={24} className="card-icon" />
              <h3 className="card-title">Work Experience</h3>
            </div>
            <div className="card-content">
              {workExperienceData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-info">
                    <div className="timeline-institution">{item.company}</div>
                    <div className="timeline-degree">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;