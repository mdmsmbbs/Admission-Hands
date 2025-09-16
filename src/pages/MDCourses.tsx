import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Baby, X, Syringe, Brain, Wind, Ambulance, Microscope, Bug, Pill, Search, Home, CircleDot, Zap, Activity, Dna, GraduationCap, Stethoscope, Target, Users, Eye, Bone, HeadphonesIcon, Shield, Sparkles, FlaskConical } from "lucide-react";
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';
import MDSidebar from '@/components/md/MDSidebar';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MDCourses: React.FC = () => {
  const mdSpecializations = [
    {
      id: 'general-medicine',
      title: "MD General Medicine",
      description: "The cornerstone of adult internal medicine, empowering physicians to manage a wide range of acute and chronic diseases. Gateway to super-specialties like cardiology and endocrinology.",
      icon: Heart,
      path: '/pg-medical/md-courses/general-medicine',
      color: 'from-red-500 to-pink-500',
      animationType: 'slideUp'
    },
    {
      id: 'pediatrics',
      title: "MD Pediatrics",
      description: "Dedicated to children's health – integrating preventive care and treatment to nurture healthy growth and development from infancy through adolescence.",
      icon: Baby,
      path: '/pg-medical/md-courses/pediatrics',
      color: 'from-pink-500 to-rose-500',
      animationType: 'fadeIn'
    },
    {
      id: 'radiodiagnosis',
      title: "MD Radiodiagnosis",
      description: "Leverages cutting-edge imaging technologies such as X-rays, CT scans, MRIs and ultrasounds to reveal disease insights non-invasively for accurate diagnosis.",
      icon: X,
      path: '/pg-medical/md-courses/radiodiagnosis',
      color: 'from-blue-500 to-cyan-500',
      animationType: 'scaleIn'
    },
    {
      id: 'anesthesiology',
      title: "MD Anesthesiology",
      description: "Masters anesthetic techniques, pain management, and critical care, ensuring patient safety and comfort during surgical procedures and intensive care.",
      icon: Syringe,
      path: '/pg-medical/md-courses/anesthesiology',
      color: 'from-green-500 to-emerald-500',
      animationType: 'rotateIn'
    },
    {
      id: 'psychiatry',
      title: "MD Psychiatry",
      description: "Provides diagnosis, therapy, and rehabilitation for mental and behavioral health disorders with empathy, scientific understanding and evidence-based treatments.",
      icon: Brain,
      path: '/pg-medical/md-courses/psychiatry',
      color: 'from-purple-500 to-violet-500',
      animationType: 'slideLeft'
    },
    {
      id: 'respiratory-medicine',
      title: "MD Respiratory Medicine",
      description: "Specializes in lung and respiratory diseases, including asthma, COPD, tuberculosis, pneumonia and other pulmonary conditions affecting breathing.",
      icon: Wind,
      path: '/pg-medical/md-courses/respiratory-medicine',
      color: 'from-cyan-500 to-blue-400',
      animationType: 'bounceIn'
    },
    {
      id: 'emergency-medicine',
      title: "MD Emergency Medicine",
      description: "Focuses on rapid, lifesaving care for critically ill or injured patients where every second counts. Manages trauma, cardiac emergencies and acute medical conditions.",
      icon: Ambulance,
      path: '/pg-medical/md-courses/emergency-medicine',
      color: 'from-red-600 to-orange-500',
      animationType: 'slideRight'
    },
    {
      id: 'pathology',
      title: "MD Pathology",
      description: "Delivers critical laboratory insights by studying disease mechanisms through tissue analysis, blood tests and microscopic examination for accurate diagnosis.",
      icon: Microscope,
      path: '/pg-medical/md-courses/pathology',
      color: 'from-amber-500 to-yellow-500',
      animationType: 'flipIn'
    },
    {
      id: 'microbiology',
      title: "MD Microbiology",
      description: "Explores infectious diseases caused by microbes, bacteria, viruses and fungi, supporting diagnosis, treatment and prevention of infectious conditions.",
      icon: Bug,
      path: '/pg-medical/md-courses/microbiology',
      color: 'from-orange-500 to-red-400',
      animationType: 'zoomIn'
    },
    {
      id: 'pharmacology',
      title: "MD Pharmacology",
      description: "Discovers the action and therapeutic use of drugs, develops safer medications and innovates more effective treatments for various medical conditions.",
      icon: Pill,
      path: '/pg-medical/md-courses/pharmacology',
      color: 'from-indigo-500 to-purple-500',
      animationType: 'slideDown'
    },
    {
      id: 'forensic-medicine',
      title: "MD Forensic Medicine",
      description: "Bridges medical knowledge with legal investigations through autopsy, toxicology analysis and medico-legal examination for judicial proceedings.",
      icon: Search,
      path: '/pg-medical/md-courses/forensic-medicine',
      color: 'from-gray-600 to-slate-600',
      animationType: 'fadeScale'
    },
    {
      id: 'community-medicine',
      title: "MD Community Medicine",
      description: "Leads disease prevention and public health improvement through epidemiology, health education, community health programs and preventive healthcare strategies.",
      icon: Users,
      path: '/pg-medical/md-courses/community-medicine',
      color: 'from-teal-500 to-green-500',
      animationType: 'slideUp'
    },
    {
      id: 'immunohematology',
      title: "MD Immunohematology",
      description: "Specializes in safe blood transfusion, blood banking, hematological disorder management and immunological blood-related conditions for patient safety.",
      icon: CircleDot,
      path: '/pg-medical/md-courses/immunohematology',
      color: 'from-rose-500 to-pink-400',
      animationType: 'rotateScale'
    },
    {
      id: 'nuclear-medicine',
      title: "MD Nuclear Medicine",
      description: "Uses radioactive substances for advanced diagnostic imaging and therapeutic interventions in cancer treatment, cardiac imaging and metabolic disorders.",
      icon: Zap,
      path: '/pg-medical/md-courses/nuclear-medicine',
      color: 'from-yellow-500 to-orange-400',
      animationType: 'pulseGlow'
    },
    {
      id: 'geriatrics',
      title: "MD Geriatrics",
      description: "Focuses on medical care for the elderly, enhancing quality of life and managing age-related conditions, dementia, mobility issues and chronic diseases.",
      icon: Shield,
      path: '/pg-medical/md-courses/geriatrics',
      color: 'from-violet-500 to-purple-400',
      animationType: 'slideLeft'
    },
    {
      id: 'sports-medicine',
      title: "MD Sports Medicine",
      description: "Prevention, diagnosis, and rehabilitation of sports injuries to promote athletic well-being, performance enhancement and injury recovery for athletes.",
      icon: Activity,
      path: '/pg-medical/md-courses/sports-medicine',
      color: 'from-emerald-500 to-teal-500',
      animationType: 'bounceScale'
    },
    {
      id: 'dermatology',
      title: "MD Dermatology",
      description: "Specialized skin care and treatment of dermatological conditions, skin cancers, allergic reactions, cosmetic concerns and advanced dermatological procedures.",
      icon: Sparkles,
      path: '/pg-medical/md-courses/dermatology',
      color: 'from-pink-400 to-rose-400',
      animationType: 'fadeSlide'
    },
    {
      id: 'family-medicine',
      title: "MD Family Medicine",
      description: "Holistic healthcare across age groups and diseases with comprehensive family-centered approach, preventive care and long-term patient relationship building.",
      icon: Home,
      path: '/pg-medical/md-courses/family-medicine',
      color: 'from-green-600 to-emerald-600',
      animationType: 'spiralIn'
    }
  ];

  const getAnimationVariants = (animationType: string, index: number) => {
    const baseDelay = index * 0.05;
    
    const animations = {
      slideUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay: baseDelay, duration: 0.6, ease: "easeOut" } }
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: baseDelay, duration: 0.8, ease: "easeOut" } }
      },
      scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { delay: baseDelay, duration: 0.7, ease: "backOut" } }
      },
      rotateIn: {
        hidden: { opacity: 0, rotate: -15 },
        visible: { opacity: 1, rotate: 0, transition: { delay: baseDelay, duration: 0.8, ease: "easeOut" } }
      },
      slideLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { delay: baseDelay, duration: 0.6, ease: "easeOut" } }
      },
      slideRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { delay: baseDelay, duration: 0.6, ease: "easeOut" } }
      },
      slideDown: {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { delay: baseDelay, duration: 0.6, ease: "easeOut" } }
      },
      bounceIn: {
        hidden: { opacity: 0, scale: 0.3 },
        visible: { opacity: 1, scale: 1, transition: { delay: baseDelay, duration: 0.8, type: "spring", bounce: 0.4 } }
      },
      flipIn: {
        hidden: { opacity: 0, rotateY: 90 },
        visible: { opacity: 1, rotateY: 0, transition: { delay: baseDelay, duration: 0.8, ease: "easeOut" } }
      },
      zoomIn: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { delay: baseDelay, duration: 0.7, ease: "easeOut" } }
      },
      fadeScale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { delay: baseDelay, duration: 0.9, ease: "easeOut" } }
      },
      rotateScale: {
        hidden: { opacity: 0, scale: 0.8, rotate: 10 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { delay: baseDelay, duration: 0.8, ease: "easeOut" } }
      },
      pulseGlow: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { delay: baseDelay, duration: 0.7, ease: "easeOut" } }
      },
      bounceScale: {
        hidden: { opacity: 0, scale: 0.6 },
        visible: { opacity: 1, scale: 1, transition: { delay: baseDelay, duration: 0.9, type: "spring", bounce: 0.5 } }
      },
      fadeSlide: {
        hidden: { opacity: 0, x: 15, y: 15 },
        visible: { opacity: 1, x: 0, y: 0, transition: { delay: baseDelay, duration: 0.7, ease: "easeOut" } }
      },
      spiralIn: {
        hidden: { opacity: 0, scale: 0.7, rotate: -20 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { delay: baseDelay, duration: 0.9, ease: "easeOut" } }
      }
    };
    
    return animations[animationType as keyof typeof animations] || animations.slideUp;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MD Courses - Doctor of Medicine Specializations | AdmissionHands"
        description="Explore comprehensive MD course specializations and career opportunities. Complete guide to Doctor of Medicine programs in India with admission details."
        keywords="MD courses, Doctor of Medicine, medical specializations, MD admission, postgraduate medicine, NEET PG"
        ogTitle="MD Courses - Doctor of Medicine Specializations"
        ogDescription="Comprehensive guide to MD courses and specializations in India."
      />
      
      <main className="container-custom py-8 pt-32">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-6 border border-border"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    MD Courses
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Explore specialized medical fields and advance your career
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Doctor of Medicine (MD) is a postgraduate medical degree that provides specialized training in various medical fields. These programs combine advanced clinical training, research, and academic excellence to prepare medical professionals for specialized practice and leadership roles in healthcare.
              </p>
            </motion.div>

            {/* Overview Section */}
            <motion.section
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3" variants={fadeInUp}>
                <Stethoscope className="h-8 w-8 text-primary" />
                Program Overview
              </motion.h2>
              <motion.div className="grid md:grid-cols-2 gap-4">
                <motion.div className="bg-card rounded-xl p-4 border border-border" variants={fadeInUp}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Program Structure</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 3-year postgraduate specialization</li>
                    <li>• Advanced clinical training and practice</li>
                    <li>• Research and thesis requirements</li>
                    <li>• Subspecialty rotation opportunities</li>
                    <li>• Academic and teaching components</li>
                  </ul>
                </motion.div>
                <motion.div className="bg-card rounded-xl p-4 border border-border" variants={fadeInUp}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Career Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Specialized medical expertise</li>
                    <li>• Competitive salary packages</li>
                    <li>• Leadership opportunities in healthcare</li>
                    <li>• Research and academic career paths</li>
                    <li>• International practice opportunities</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* MD Specializations */}
            <motion.section
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3" variants={fadeInUp}>
                <Target className="h-8 w-8 text-primary" />
                MD Specializations
              </motion.h2>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mdSpecializations.map((specialization, index) => {
                  const IconComponent = specialization.icon;
                  const animationVariants = getAnimationVariants(specialization.animationType, index);
                  
                  return (
                    <motion.div
                      key={specialization.id}
                      className="bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border/50 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group min-h-[280px]"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={animationVariants}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -5,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Link to={specialization.path} className="block h-full">
                        <div className="flex flex-col h-full">
                          <div className={`w-16 h-16 bg-gradient-to-br ${specialization.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          
                          <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                            {specialization.title}
                          </h3>
                          
                          <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                            {specialization.description}
                          </p>
                          
                          <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors mt-auto">
                            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.section>

            {/* Additional Information Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Admission Process Section */}
              <motion.section
                className="card-elegant p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">Admission Process for MD in India</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    To pursue MD, candidates must have completed an MBBS degree along with a mandatory internship.
                    Admission selection is through NEET PG, India's premier national-level entrance exam for postgraduate medical courses.
                  </p>
                  <p>
                    The MD program typically spans 3 rigorous years combining theoretical learning, clinical exposure, and research.
                  </p>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-foreground">Note on Fees:</strong> Government colleges offer affordable fees, private colleges charge moderate fees,
                      while management and NRI quota seats come with higher fee structures.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Why Choose MD Section */}
              <motion.section
                className="card-elegant p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">Why Choose MD?</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    MD opens doors to rewarding medical careers in hospitals, research institutes, teaching, and private practice.
                    Graduates can advance further with DM super-specializations or fellowship programs.
                  </p>
                  <p>
                    With healthcare's increasing complexity and specialization, MD degrees have strong demand both in India and abroad.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Dna className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Advanced medical expertise</span>
                  </div>
                </div>
              </motion.section>
            </div>

          </div>

          {/* Right Sidebar - Desktop Only */}
          <div className="hidden lg:block">
            <MDSidebar />
          </div>
        </div>
      </main>
      
      <CTA />
    </div>
  );
};

export default MDCourses;