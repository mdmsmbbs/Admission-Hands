
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Split animations to improve performance
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Optimize animation settings for better performance
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.3
      } 
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      className="relative hero-section w-full min-h-[90vh] flex items-center" 
      style={{
        backgroundImage: "url('/lovable-uploads/1692a314-14b2-49c4-a02f-8451de49799d.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      role="banner"
    >
      {/* Enhanced gradient overlay */}
      <div className="hero-overlay"></div>
      
      <div className="container-custom relative z-10 py-16">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Enhanced badge */}
          <div className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium mb-6 inline-block backdrop-blur-sm">
            Medical Admission Experts
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
            Your Journey to Medical Excellence
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6">
            Starts Here
          </h2>
          
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl">
            Expert guidance for MBBS, PG (MD/MS) &amp; SS (Courses) Admissions
            in top medical colleges.
          </p>
          
          {isMounted && (
            <motion.div 
              className="space-y-3 mb-6 w-full"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={containerAnimation}
            >
              {/* Enhanced feature list */}
              <motion.div variants={itemAnimation} className="card-elegant p-4 flex items-center backdrop-blur-sm bg-white/95">
                <Check size={20} className="text-primary mr-3 flex-shrink-0" />
                <span className="text-card-foreground font-medium">Complete Admission Support — From eligibility to enrollment</span>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="card-elegant p-4 flex items-center backdrop-blur-sm bg-white/95">
                <Check size={20} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-card-foreground font-medium">Transparent Process — No hidden fees</span>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="card-elegant p-4 flex items-center backdrop-blur-sm bg-white/95">
                <Check size={20} className="text-secondary mr-3 flex-shrink-0" />
                <span className="text-card-foreground font-medium">Latest Seat & Fee Insights — Stay informed, choose wisely</span>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="card-elegant p-4 flex items-center backdrop-blur-sm bg-white/95">
                <Check size={20} className="text-primary mr-3 flex-shrink-0" />
                <span className="text-card-foreground font-medium">Trusted Nationwide — Preferred by aspirants across India & abroad</span>
              </motion.div>
            </motion.div>
          )}
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link 
              to="/services" 
              className="btn-primary px-6 py-3 text-lg inline-flex items-center justify-center group"
            >
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <Link 
              to="/know-us" 
              className="btn-outline border-white text-white hover:bg-white hover:text-primary px-6 py-3 text-lg backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
