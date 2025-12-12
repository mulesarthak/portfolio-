import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, Zap, Briefcase } from 'lucide-react';
import ful2win from '../assets/ful2win.png';
import dastarkhawnui from '../assets/dastarkhawnui.png';
import mykardui from '../assets/mykardui.png';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: 'Ful2Win',
      shortDescription: 'Ful2Win is a fast-paced, reward-based gaming platform offering quick skill challenges and a smooth, modern user experience',
      fullDescription: 'Ful2Win is a fast-paced, reward-based gaming platform offering quick, skill-based challenges. I worked on both UI/UX and development — designing clean, modern screens and building smooth, responsive, and optimized gameplay interfaces for a seamless user experience.',
      image: ful2win,
      tags: ['UI Design', 'UX Research', 'React.js', 'Node.js', 'MongoDB'],
      duration: '3 months',
      teamSize: '4 members',
      problem: 'Traditional e-commerce platforms suffer from poor user experience, high cart abandonment rates, and lack of personalization. Users struggle with complex checkout processes and irrelevant product recommendations.',
      solution: 'Designed and developed a modern e-commerce platform with AI-powered recommendations, one-click checkout, and intuitive user interface. Implemented microservices architecture for scalability and real-time inventory management.',
      whatBuilt: 'Complete frontend application with React.js, responsive design system, component library, admin dashboard, and mobile-first approach.',
      keyFeatures: [
        'Reward-Based Gameplay System',
        'Leaderboards & Ranking System',
        'Real-Time Updates & Match Results',
        'Consistent Cross-Device Experience',
        'Easy Login & Onboarding'
      ],
      techStack: {
        frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js', 'Express.js', 'RESTful APIs'],
        database: ['MongoDB', 'Redis'],
        tools: ['VS Code', 'AWS', 'Git', 'Figma']
      },
      responsibilities: [
        'Led UI/UX design process from wireframes to final implementation',
        'Developed responsive frontend components and pages',
        'Implemented state management and API integrations',
        'Conducted user research and usability testing',
        'Collaborated with backend team for API design',
        'Optimized application performance and loading speeds'
      ],
      screenshots: [
        { title: 'Homepage Design', description: 'Modern, clean homepage with personalized recommendations' },
        { title: 'Product Detail Page', description: 'Comprehensive product information with 360° view' },
        { title: 'Checkout Process', description: 'Streamlined 3-step checkout with multiple payment options' },
        { title: 'User Dashboard', description: 'Personal dashboard with order history and preferences' }
      ],
      results: {
        conversion: '40% increase in conversion rates',
        abandonment: '60% reduction in cart abandonment',
        users: '10,000+ active users within 3 months',
        satisfaction: '4.8/5 user satisfaction rating',
        performance: '95% uptime and 2-second average load time'
      },
      conclusion: 'Ful2Win successfully transformed the e-commerce experience by combining modern design with powerful functionality. The project demonstrates how user-centered design and cutting-edge technology can create exceptional digital experiences that drive business results.',
      whatILearned: [
        'Advanced React state management with complex game logic',
        'Optimizing performance for real-time multiplayer features',
        'Creating responsive designs that work across all devices',
        'Implementing smooth animations and micro-interactions',
        'Working with agile development methodologies',
        'Balancing UI aesthetics with functional requirements'
      ]
    },
    {
      id: 2,
      title: 'Dastarkhawn',
      shortDescription: 'Dastarkhawn is a food-ordering platform that offers a smooth and modern experience for exploring menus, and placing orders.',
      fullDescription: 'Dastarkhawn is a food-ordering and delivery platform designed to offer users a seamless and convenient way to browse menus, place orders, and enjoy meals from their favorite restaurants. The project focuses on creating a clean and intuitive UI with smooth navigation, making it easy for users to explore cuisines, track their orders, and complete secure payments.',
      image: dastarkhawnui,
      tags: ['Mobile UI', 'User Research', 'Flutter', 'Firebase', 'Security'],
      duration: '4 months',
      teamSize: '5 members',
      problem: 'Traditional banking apps are complex, slow, and lack security features. Users face difficulties in managing finances, tracking expenses, and performing secure transactions on mobile devices.',
      solution: 'Created a user-friendly mobile banking app with biometric authentication, AI-powered insights, and intuitive financial management tools designed specifically for mobile-first experience.',
      whatBuilt: 'Complete mobile application UI design, user flow optimization, interactive prototypes, and design system for Flutter development.',
      keyFeatures: [
        'Clean & Modern UI',
        'Menu Display with Item Details',
        'Quick Ordering System',
        'User Profiles & Order History',
        'Smart Search & Filters',
        
      ],
      techStack: {
        frontend: ['Flutter', 'Dart', 'Material Design 3'],
        backend: ['Firebase', 'Node.js'],
        security: ['SSL/TLS', 'Biometric SDK', 'Encryption'],
        tools: ['VSCode', 'Figma', 'Flutterflow']
      },
      responsibilities: [
        'Designed complete mobile UI/UX from concept to final screens',
        'Created user flows and interaction patterns',
        'Developed design system and component library',
        'Conducted usability testing with 50+ users',
        'Collaborated with developers on implementation',
        'Ensured accessibility and compliance standards'
      ],
      screenshots: [
        { title: 'Login Screen', description: 'Secure biometric authentication interface' },
        { title: 'Dashboard', description: 'Financial overview with spending insights' },
        { title: 'Transfer Money', description: 'Intuitive P2P payment flow' },
        { title: 'Budget Planner', description: 'AI-powered budget recommendations' }
      ],
      results: {
        security: '99.9% security compliance achieved',
        users: '5,000+ beta users onboarded',
        rating: '4.8/5 app store rating',
        efficiency: '60% reduction in transaction time',
        satisfaction: '92% user satisfaction rate'
      },
      conclusion: 'Dastarkhawn successfully modernized mobile banking experience by prioritizing security, simplicity, and intelligent features. The project demonstrates how thoughtful design can transform complex financial operations into intuitive mobile experiences.',
      whatILearned: [
        'Mobile-first design principles and responsive layouts',
        'Biometric authentication implementation',
        'Security best practices in financial applications',
        'User experience optimization for mobile interfaces',
        'Cross-platform compatibility testing',
        'Agile development in mobile app projects'
      ]
    },
    {
      id: 3,
      title: 'MyKard',
      shortDescription: 'MyKard is a digital business card platform that allows users to create, share, and manage smart digital cards.',
      fullDescription: 'MyKard is a digital business card and networking platform designed to help users create, share, and manage their smart digital cards effortlessly. It replaces traditional paper cards with a modern, interactive, and instantly shareable solution.',
      image: mykardui,
      tags: ['Data Visualization', 'Dashboard', 'Analytics', 'Health Tech', 'Python'],
      duration: '5 months',
      teamSize: '6 members',
      problem: 'Health data is scattered across multiple devices and apps, making it difficult for users to get a comprehensive view of their health. Lack of actionable insights and personalized recommendations leads to poor health management.',
      solution: 'Built a unified health dashboard that integrates data from wearables, medical devices, and manual inputs to provide comprehensive health insights with AI-powered recommendations and beautiful data visualizations.',
      whatBuilt: 'Interactive dashboard with real-time data visualization, health metrics tracking, personalized insights engine, and responsive design for web and mobile.',
      keyFeatures: [
        'Users can create, customize, and share professional digital business cards',
        'Comprehensive profile management with personal information, titles, companies, locations',
        'Support ticket management system for customer service',
        'Guided user setup process with professional title selection',
    
      ],
      techStack: {
        frontend: ['React.js', 'Next.js', 'TypeScript'],
        backend: ['REST APIs', 'SQL', 'Firebase'],
        analytics: ['Machine Learning', 'Statistical Analysis'],
        tools: ['VS Code', 'Figma']
      },
      responsibilities: [
        'Designed complex data visualization components',
        'Developed interactive dashboard interfaces',
        'Created responsive charts and graphs',
        'Implemented real-time data updates',
        'Worked with data scientists on insight algorithms',
        'Ensured HIPAA compliance and data security'
      ],
      screenshots: [
        { title: 'Main Dashboard', description: 'Comprehensive health overview with key metrics' },
        { title: 'Vitals Tracking', description: 'Real-time vital signs monitoring interface' },
        { title: 'Health Insights', description: 'AI-powered personalized recommendations' },
        { title: 'Reports', description: 'Detailed health reports and trends analysis' }
      ],
      results: {
        integration: '15+ health devices integrated',
        compliance: '100% HIPAA compliance maintained',
        engagement: '75% improvement in user engagement',
        insights: '92% accuracy in health predictions',
        satisfaction: '4.7/5 user satisfaction rating'
      },
      conclusion: 'Health Dashboard successfully transformed how users monitor and manage their health by unifying scattered data into actionable insights. The project demonstrates the power of data visualization and AI in improving personal health outcomes.',
      whatILearned: [
        'Advanced data visualization with D3.js and Chart.js',
        'Real-time data processing and dashboard updates',
        'Healthcare data privacy and compliance regulations',
        'Complex data integration from multiple sources',
        'User-centered design for health applications',
        'Performance optimization for large datasets'
      ]
    }
  ];

  const project = projectsData.find(p => p.id === parseInt(id || '1'));

  // Debug: Log the current project and short description
  console.log('Current project:', project?.title);
  console.log('Short description:', project?.shortDescription);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  // Scroll to project section when component mounts
  useEffect(() => {
    const projectElement = document.getElementById('project-detail');
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

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

  return (
    <div id="project-detail" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: window.innerWidth < 768 ? '0.75rem 0.25rem' : '1rem 0.5rem',
        width: '100%'
      }}>
        {/* Project Title at Top Center */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: window.innerWidth < 768 ? '1.5rem' : '2rem' }}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div style={{
            background: '#1a4d2e',
            borderRadius: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
            padding: window.innerWidth < 768 ? '0.5rem 0.75rem' : '0.75rem 1rem',
            boxShadow: '0 8px 20px rgba(26, 77, 46, 0.3)',
            display: 'inline-block',
            marginBottom: '1rem',
            maxWidth: window.innerWidth < 768 ? '90vw' : '95vw',
            width: window.innerWidth < 768 ? 'auto' : 'auto'
          }}>
            <h1 style={{ 
              fontSize: window.innerWidth < 768 ? 'clamp(1.5rem, 4vw, 2rem)' : 'clamp(1.75rem, 5vw, 3.5rem)', 
              lineHeight: window.innerWidth < 768 ? 1.2 : 1.1, 
              fontWeight: 900, 
              marginBottom: '0',
              background: 'linear-gradient(to right, #facc15, #eab308, #ca8a04)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              wordBreak: window.innerWidth < 768 ? 'break-word' : 'normal'
            }}>
              {project.title}
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants} style={{ marginBottom: window.innerWidth < 768 ? '1rem' : '1.5rem' }}>
            <div 
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                borderRadius: window.innerWidth < 768 ? '0.5rem' : '0.75rem', 
                boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '100%'
              }}
              onClick={() => setIsZoomed(true)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: window.innerWidth < 768 ? '30vh' : '40vh', 
                  minHeight: window.innerWidth < 768 ? '150px' : '200px',
                  objectFit: 'contain',
                  transition: 'transform 0.7s ease',
                  display: 'block'
                }}
              />
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: 'linear-gradient(to top, rgba(17, 24, 39, 0.8) 0%, transparent 50%, transparent 100%)', 
                opacity: 0, 
                transition: 'opacity 0.5s ease' 
              }}></div>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }}>
                Click to zoom
              </div>
            </div>
          </motion.div>

          {/* Three Info Containers */}
          <div style={{ marginBottom: window.innerWidth < 768 ? '1rem' : '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              gap: window.innerWidth < 768 ? '0.5rem' : '0.75rem', 
              flexWrap: 'wrap',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row'
            }}>
              {/* About Container */}
              <div style={{ 
                flex: '1', 
                minWidth: window.innerWidth < 768 ? '100%' : '280px',
                background: '#1a4d2e',
                borderRadius: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
                padding: window.innerWidth < 768 ? '0.75rem' : '1rem',
                color: 'white',
                boxShadow: '0 8px 20px rgba(26, 77, 46, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    padding: '0.5rem', 
                    borderRadius: '0.5rem' 
                  }}>
                    <Briefcase size={window.innerWidth < 768 ? 16 : 20} style={{ color: '#facc15' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: window.innerWidth < 768 ? '1rem' : '1.25rem', 
                    fontWeight: 'bold', 
                    margin: 0, 
                    color: '#facc15' 
                  }}>About</h3>
                </div>
                <p style={{ 
                  fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem', 
                  lineHeight: 1.5, 
                  margin: 0, 
                  color: 'white' 
                }}>
                  {project.shortDescription}
                </p>
              </div>

              {/* Features Container */}
              <div style={{ 
                flex: '1', 
                minWidth: window.innerWidth < 768 ? '100%' : '280px',
                background: '#1a4d2e',
                borderRadius: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
                padding: window.innerWidth < 768 ? '0.75rem' : '1rem',
                color: 'white',
                boxShadow: '0 8px 20px rgba(26, 77, 46, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    padding: '0.5rem', 
                    borderRadius: '0.5rem' 
                  }}>
                    <Zap size={window.innerWidth < 768 ? 16 : 20} style={{ color: '#facc15' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: window.innerWidth < 768 ? '1rem' : '1.25rem', 
                    fontWeight: 'bold', 
                    margin: 0, 
                    color: '#facc15' 
                  }}>Features</h3>
                </div>
                <ul style={{ 
                  fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem', 
                  lineHeight: 1.5, 
                  margin: 0, 
                  paddingLeft: '1rem', 
                  color: 'white' 
                }}>
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Container */}
              <div style={{ 
                flex: '1', 
                minWidth: window.innerWidth < 768 ? '100%' : '280px',
                background: '#1a4d2e',
                borderRadius: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
                padding: window.innerWidth < 768 ? '0.75rem' : '1rem',
                color: 'white',
                boxShadow: '0 8px 20px rgba(26, 77, 46, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    padding: '0.5rem', 
                    borderRadius: '0.5rem' 
                  }}>
                    <Cpu size={window.innerWidth < 768 ? 16 : 20} style={{ color: '#facc15' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: window.innerWidth < 768 ? '1rem' : '1.25rem', 
                    fontWeight: 'bold', 
                    margin: 0, 
                    color: '#facc15' 
                  }}>Tech Stack</h3>
                </div>
                <div style={{ 
                  fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem', 
                  lineHeight: 1.5, 
                  color: 'white' 
                }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#facc15' }}>Frontend:</strong> {project.techStack.frontend.join(', ')}
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#facc15' }}>Backend:</strong> {project.techStack.backend.join(', ')}
                  </div>
                  <div>
                    <strong style={{ color: '#facc15' }}>Tools:</strong> {project.techStack.tools.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsibilities and Learned Containers */}
          <div style={{ marginBottom: window.innerWidth < 768 ? '1rem' : '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              gap: window.innerWidth < 768 ? '0.5rem' : '0.75rem', 
              flexWrap: 'wrap',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row'
            }}>
              {/* Responsibilities Container */}
              <div style={{ 
                flex: '1', 
                minWidth: window.innerWidth < 768 ? '100%' : '280px',
                background: '#1a4d2e',
                borderRadius: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
                padding: window.innerWidth < 768 ? '0.75rem' : '1rem',
                color: 'white',
                boxShadow: '0 8px 20px rgba(26, 77, 46, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    padding: '0.5rem', 
                    borderRadius: '0.5rem' 
                  }}>
                    <Briefcase size={window.innerWidth < 768 ? 16 : 20} style={{ color: '#facc15' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: window.innerWidth < 768 ? '1rem' : '1.25rem', 
                    fontWeight: 'bold', 
                    margin: 0, 
                    color: '#facc15' 
                  }}>Your Responsibilities</h3>
                </div>
                <ul style={{ 
                  fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem', 
                  lineHeight: 1.5, 
                  margin: 0, 
                  paddingLeft: '1rem', 
                  color: 'white' 
                }}>
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} style={{ marginBottom: '0.25rem' }}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              {/* What I Learned Container */}
              <div style={{ 
                flex: '1', 
                minWidth: window.innerWidth < 768 ? '100%' : '280px',
                background: '#1a4d2e',
                borderRadius: window.innerWidth < 768 ? '0.5rem' : '0.75rem',
                padding: window.innerWidth < 768 ? '0.75rem' : '1rem',
                color: 'white',
                boxShadow: '0 8px 20px rgba(26, 77, 46, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    padding: '0.5rem', 
                    borderRadius: '0.5rem' 
                  }}>
                    <Lightbulb size={window.innerWidth < 768 ? 16 : 20} style={{ color: '#facc15' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: window.innerWidth < 768 ? '1rem' : '1.25rem', 
                    fontWeight: 'bold', 
                    margin: 0, 
                    color: '#facc15' 
                  }}>What I Learned From This Project</h3>
                </div>
                <ul style={{ 
                  fontSize: window.innerWidth < 768 ? '0.75rem' : '0.875rem', 
                  lineHeight: 1.5, 
                  margin: 0, 
                  paddingLeft: '1rem', 
                  color: 'white' 
                }}>
                  {project.whatILearned.map((learning, index) => (
                    <li key={index} style={{ marginBottom: '0.25rem' }}>{learning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Zoom Modal */}
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                cursor: 'pointer'
              }}
              onClick={() => setIsZoomed(false)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                  }}
                />
                <button
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}
                  onClick={() => setIsZoomed(false)}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
