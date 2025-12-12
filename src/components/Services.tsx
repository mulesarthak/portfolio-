import { motion } from 'framer-motion';
import { Code, Layout, Smartphone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
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

  const services = [
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with exceptional user experiences.",
      link: "#ui-ux"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Application Design",
      description: "Designing mobile and web applications that are both functional and user-friendly.",
      link: "#application"
    },
    {
      icon: <Code size={32} />,
      title: "Website Design",
      description: "Building responsive and modern websites that engage users and drive conversions.",
      link: "#website"
    }
  ];

  return (
    <section id="services-i-provide" className="services-section" ref={ref}>
      <div className="services-container">
        {/* Header */}
        <motion.div 
          className="services-header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="services-title" variants={itemVariants}>
            <span className="services-yellow">Services</span> I Provide
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
