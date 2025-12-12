import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import ful2winlogo from '../assets/ful2winlogo.jpg';
import Dastarkhawn from '../assets/Dastarkhawn.png';
import mykard from '../assets/mykard.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const navigate = useNavigate();

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

  const projects = [
    {
      id: 1,
      title: 'Ful2Win',
      description: 'Ful2Win is a fast-paced, reward-based gaming platform offering quick skill challenges and a smooth, modern user experience.',
      image: ful2winlogo,
    },
    {
      id: 2,
      title: 'Dastarkhawn',
      description: 'Dastarkhawn is a food-ordering platform that offers a smooth and modern experience for exploring menus, and placing orders.',
      image: Dastarkhawn,
    },
    {
      id: 3,
      title: 'MyKard',
      description: 'MyKard is a digital business card platform that allows users to create, share, and manage smart digital cards.',
      image: mykard,
    },
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        {/* Header */}
        <motion.div 
          className="projects-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="projects-title" variants={itemVariants}>
            <span className="projects-yellow">Projects</span> & Portfolio
          </motion.h2>
          
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.id === 2 ? 'project-card-small-image' : ''} cursor-pointer hover:shadow-xl transition-shadow duration-300`}
              variants={itemVariants}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={project.id === 2 || project.id === 3 ? { objectFit: 'contain' } : {}}
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
