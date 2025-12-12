import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Form = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      transition: {
        duration: 0.8,
      },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const emailSubject = `New Contact Form Submission from ${formData.name}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.interest}

Message:
${formData.message}
    `.trim();
    
    try {
      // Using a simple email service (you'll need to set up a backend service)
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          subject: emailSubject,
        }),
      });
      
      if (response.ok) {
        // Success - reset form
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          interest: '', 
          message: '' 
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto if direct email fails
      const mailtoLink = `mailto:sarthakmule2@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      // Reset form after mailto
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        interest: '', 
        message: '' 
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="form-section" ref={ref}>
      <div className="form-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="form-grid"
        >
          {/* Left Section - Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="form-left"
          >
            <motion.div variants={itemVariants} className="form-header">
              <div className="form-header-line">
                <div className="form-orange-line"></div>
                <h2 className="form-title">Contact Us</h2>
              </div>
              <h3 className="form-subtitle">
                Let's Talk for <span className="form-orange-text">Your Next Projects</span>
              </h3>
              
            </motion.div>

            <motion.div variants={itemVariants} className="form-contact-list">
              <div className="form-contact-item">
                <div className="form-contact-icon">
                  <FaPhone />
                </div>
                <p className="form-contact-text">+91 9730916509</p>
              </div>

              <div className="form-contact-item">
                <div className="form-contact-icon">
                  <FaEnvelope />
                </div>
                <p className="form-contact-text">sarthakmule2@gmail.com</p>
              </div>

              

              <div className="form-contact-item">
                <div className="form-contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <p className="form-contact-text">Nagpur, Maharashtra, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="form-right"
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="form-content"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    I'm Interested in*
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>


                
              </div>

              <div className="form-group">
                <label className="form-label">
                  Your Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  placeholder="Enter here.."
                />
              </div>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-success-message"
                >
                  Message sent successfully!
                </motion.div>
              )}

              <div className="form-button-container">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="form-button-left"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="form-button-right"
                >
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;