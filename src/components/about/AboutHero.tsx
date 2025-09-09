
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero: React.FC = () => {
  return (
    <section className="hero-section section-padding">
      <div className="hero-overlay"></div>
      
      <div className="container-custom max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Who We Are</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              With 12+ years of experience, Admission Hands is a reliable partner in your medical admission journey, ensuring transparency, accessibility, and ethical support.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card-elegant backdrop-blur-sm bg-white/95 p-8">
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-primary/10 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">Trusted Advisors</h3>
            <p className="text-muted-foreground">Over 12 years of dedicated service with proven results in medical college admissions across India.</p>
          </div>
          
          <div className="card-elegant backdrop-blur-sm bg-white/95 p-8">
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-secondary/10 text-secondary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">Expert Counselors</h3>
            <p className="text-muted-foreground">25+ specialized counselors with in-depth knowledge of medical education and admission processes.</p>
          </div>
          
          <div className="card-elegant backdrop-blur-sm bg-white/95 p-8">
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-accent/10 text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">Ethical Standards</h3>
            <p className="text-muted-foreground">Committed to transparency, integrity, and student-centric approach in every consultation.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
