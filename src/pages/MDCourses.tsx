import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Baby, X, Syringe, Brain, Wind, Ambulance, Microscope, Bug, Pill, Search, Home, CircleDot, Zap, Activity, Dna, GraduationCap, Stethoscope, Target } from "lucide-react";
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
      color: 'text-red-500'
    },
    {
      id: 'pediatrics',
      title: "MD Pediatrics",
      description: "Dedicated to children's health – integrating preventive care and treatment to nurture healthy growth and development.",
      icon: Baby,
      path: '/pg-medical/md-courses/pediatrics',
      color: 'text-pink-500'
    },
    {
      id: 'radiodiagnosis',
      title: "MD Radiodiagnosis",
      description: "Leverages cutting-edge imaging technologies such as X-rays and MRIs to reveal disease insights non-invasively.",
      icon: X,
      path: '/pg-medical/md-courses/radiodiagnosis',
      color: 'text-blue-500'
    },
    {
      id: 'anesthesiology',
      title: "MD Anesthesiology",
      description: "Masters anesthetic techniques, pain management, and critical care, ensuring patient safety during procedures.",
      icon: Syringe,
      path: '/pg-medical/md-courses/anesthesiology',
      color: 'text-green-500'
    },
    {
      id: 'psychiatry',
      title: "MD Psychiatry",
      description: "Provides diagnosis, therapy, and rehabilitation for mental and behavioral health disorders with empathy and science.",
      icon: Brain,
      path: '/pg-medical/md-courses/psychiatry',
      color: 'text-purple-500'
    },
    {
      id: 'respiratory-medicine',
      title: "MD Respiratory Medicine",
      description: "Specializes in lung and respiratory diseases, including asthma, COPD, and tuberculosis.",
      icon: Wind,
      path: '/pg-medical/md-courses/respiratory-medicine',
      color: 'text-cyan-500'
    },
    {
      id: 'emergency-medicine',
      title: "MD Emergency Medicine",
      description: "Focuses on rapid, lifesaving care for critically ill or injured patients where every second counts.",
      icon: Ambulance,
      path: '/pg-medical/md-courses/emergency-medicine',
      color: 'text-red-600'
    },
    {
      id: 'pathology',
      title: "MD Pathology",
      description: "Delivers critical laboratory insights by studying disease mechanisms through tissue and fluid analysis.",
      icon: Microscope,
      path: '/pg-medical/md-courses/pathology',
      color: 'text-amber-500'
    },
    {
      id: 'microbiology',
      title: "MD Microbiology",
      description: "Explores infectious diseases caused by microbes, supporting diagnosis and immunology advancements.",
      icon: Bug,
      path: '/pg-medical/md-courses/microbiology',
      color: 'text-orange-500'
    },
    {
      id: 'pharmacology',
      title: "MD Pharmacology",
      description: "Discovers the action and therapeutic use of drugs and innovates safer, effective treatments.",
      icon: Pill,
      path: '/pg-medical/md-courses/pharmacology',
      color: 'text-indigo-500'
    },
    {
      id: 'forensic-medicine',
      title: "MD Forensic Medicine",
      description: "Bridges medical knowledge with legal investigations through autopsy and medico-legal analysis.",
      icon: Search,
      path: '/pg-medical/md-courses/forensic-medicine',
      color: 'text-gray-600'
    },
    {
      id: 'community-medicine',
      title: "MD Community Medicine",
      description: "Leads disease prevention and public health improvement through epidemiology and health education.",
      icon: Home,
      path: '/pg-medical/md-courses/community-medicine',
      color: 'text-teal-500'
    },
    {
      id: 'immunohematology',
      title: "MD Immunohematology",
      description: "Specializes in safe blood transfusion and hematological disorder management.",
      icon: CircleDot,
      path: '/pg-medical/md-courses/immunohematology',
      color: 'text-rose-500'
    },
    {
      id: 'nuclear-medicine',
      title: "MD Nuclear Medicine",
      description: "Uses radioactive substances for advanced diagnostic imaging and therapeutic interventions.",
      icon: Zap,
      path: '/pg-medical/md-courses/nuclear-medicine',
      color: 'text-yellow-500'
    },
    {
      id: 'geriatrics',
      title: "MD Geriatrics",
      description: "Focuses on medical care for the elderly, enhancing quality of life and managing age-related conditions.",
      icon: Activity,
      path: '/pg-medical/md-courses/geriatrics',
      color: 'text-violet-500'
    },
    {
      id: 'sports-medicine',
      title: "MD Sports Medicine",
      description: "Prevention, diagnosis, and rehabilitation of sports injuries to promote athletic well-being.",
      icon: Activity,
      path: '/pg-medical/md-courses/sports-medicine',
      color: 'text-emerald-500'
    },
    {
      id: 'dermatology',
      title: "MD Dermatology",
      description: "Specialized skin care and treatment of dermatological conditions and cosmetic concerns.",
      icon: CircleDot,
      path: '/pg-medical/md-courses/dermatology',
      color: 'text-pink-400'
    },
    {
      id: 'family-medicine',
      title: "MD Family Medicine",
      description: "Holistic healthcare across age groups and diseases with comprehensive family-centered approach.",
      icon: Home,
      path: '/pg-medical/md-courses/family-medicine',
      color: 'text-green-600'
    }
  ];

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
              <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {mdSpecializations.map((specialization, index) => {
                  const IconComponent = specialization.icon;
                  
                  return (
                    <motion.div
                      key={specialization.id}
                      className="bg-gradient-to-br from-card to-card/80 rounded-lg p-2 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.02, duration: 0.4, ease: "easeOut" },
                        },
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <Link to={specialization.path} className="block h-full">
                        <div className="flex flex-col items-center text-center h-full">
                          <div className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-2 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xs font-semibold text-foreground mb-1 leading-tight">{specialization.title}</h3>
                          <p className="text-[10px] text-muted-foreground mb-2 line-clamp-3 flex-grow">{specialization.description}</p>
                          <div className="flex items-center text-primary font-medium text-[10px] group-hover:text-primary/80 transition-colors">
                            Learn More <ArrowRight className="ml-1 h-2 w-2" />
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