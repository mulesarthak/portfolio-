import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Palette, 
  Server,
  Terminal
} from 'lucide-react';

const Skills = () => {
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
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 78 },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={24} />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "User Research", level: 82 },
        { name: "Wireframing", level: 88 },
        { name: "Prototyping", level: 86 },
        { name: "Design Systems", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Flutterflow", level: 75 },
        
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-container">
        {/* Header */}
        <motion.div 
          className="skills-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="skills-title" variants={itemVariants}>
            <span className="skills-yellow">Skills</span> & Expertise
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category-card"
              variants={itemVariants}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-dots">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`skill-dot ${dotIndex < Math.floor(skill.level / 20) ? 'filled' : 'empty'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
