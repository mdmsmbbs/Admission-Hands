import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Wind, Stethoscope, GraduationCap, Award, Target, Users, TrendingUp, HelpCircle } from 'lucide-react';
import MDSidebar from '@/components/md/MDSidebar';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const MDRespiratoryMedicine = () => {
  return (
    <>
      <Helmet>
        <title>MD Respiratory Medicine - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Respiratory Medicine course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for pulmonology aspirants." />
        <meta name="keywords" content="MD Respiratory Medicine, pulmonology, lung diseases, COPD, asthma, NEET PG, respiratory career, medical colleges" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Hero Section */}
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-8 border border-border"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Wind className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Respiratory Medicine
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Breathing Life into Healthcare
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Respiratory Medicine (Pulmonology) is a specialized field focused on the diagnosis and treatment of diseases affecting the lungs and respiratory system. With rising air pollution and respiratory conditions, this specialty has become increasingly vital in modern healthcare.
                </p>
              </motion.div>

              {/* Overview Section */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                  <Stethoscope className="h-8 w-8 text-primary" />
                  Specialty Overview
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Clinical Scope</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Chronic obstructive pulmonary disease (COPD)</li>
                      <li>• Asthma and allergic respiratory conditions</li>
                      <li>• Tuberculosis and respiratory infections</li>
                      <li>• Lung cancer diagnosis and management</li>
                      <li>• Interstitial lung diseases</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Procedures</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Bronchoscopy and lung biopsy</li>
                      <li>• Pulmonary function testing</li>
                      <li>• Sleep study evaluation</li>
                      <li>• Thoracentesis and pleural procedures</li>
                      <li>• Non-invasive ventilation management</li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.section>

              {/* Career Opportunities */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                  <Target className="h-8 w-8 text-primary" />
                  Career Opportunities
                </motion.h2>
                <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
                  {[
                    {
                      title: "Hospital Pulmonologist",
                      description: "Provide specialized respiratory care in hospitals and intensive care units"
                    },
                    {
                      title: "Private Practice",
                      description: "Establish respiratory clinics focusing on outpatient pulmonary care"
                    },
                    {
                      title: "Critical Care Specialist",
                      description: "Manage ventilated patients and respiratory emergencies in ICUs"
                    },
                    {
                      title: "Academic Pulmonologist",
                      description: "Combine clinical practice with teaching and research in medical institutions"
                    },
                    {
                      title: "Sleep Medicine Specialist",
                      description: "Focus on sleep disorders and sleep-related breathing problems"
                    },
                    {
                      title: "Occupational Health",
                      description: "Specialize in work-related respiratory diseases and industrial health"
                    }
                  ].map((career, index) => (
                    <motion.div
                      key={career.title}
                      className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                      variants={fadeInUp}
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-3">{career.title}</h3>
                      <p className="text-muted-foreground">{career.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Course Structure */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                  <GraduationCap className="h-8 w-8 text-primary" />
                  Course Structure & Duration
                </motion.h2>
                <motion.div className="bg-card rounded-xl p-8 border border-border" variants={fadeInUp}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">3-Year Program Structure</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 1</h4>
                            <p className="text-muted-foreground">Basic respiratory anatomy, physiology, and common pulmonary diseases</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Advanced pulmonology, interventional procedures, and critical care</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Subspecialty training, research work, and independent practice</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Respiratory pathophysiology</li>
                        <li>• Pulmonary function testing</li>
                        <li>• Bronchoscopy techniques</li>
                        <li>• Critical care medicine</li>
                        <li>• Sleep medicine principles</li>
                        <li>• Respiratory pharmacology</li>
                        <li>• Research methodology</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.section>

              {/* Top Colleges */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                  <Award className="h-8 w-8 text-primary" />
                  Top Colleges for MD Respiratory Medicine
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "King George's Medical University (KGMU), Lucknow",
                    "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS), Lucknow",
                    "Christian Medical College (CMC), Vellore",
                    "Vallabhbhai Patel Chest Institute, University of Delhi",
                    "Institute of Respiratory Medicine, Chennai",
                    "Nizam's Institute of Medical Sciences (NIMS), Hyderabad"
                  ].map((college, index) => (
                    <motion.div
                      key={college}
                      className="bg-card rounded-xl p-4 border border-border hover:shadow-md transition-all duration-300"
                      variants={fadeInUp}
                    >
                      <p className="text-foreground">{college}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Super Specializations */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                  <TrendingUp className="h-8 w-8 text-primary" />
                  Super Specializations & Fellowships
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Subspecialty Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Interventional Pulmonology</li>
                      <li>• Sleep Medicine</li>
                      <li>• Lung Transplantation</li>
                      <li>• Pulmonary Rehabilitation</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Fellowship Programs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Critical Care Medicine</li>
                      <li>• Occupational Lung Diseases</li>
                      <li>• Pediatric Pulmonology</li>
                      <li>• Thoracic Oncology</li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.section>

              {/* Skills Required */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                  <Users className="h-8 w-8 text-primary" />
                  Skills & Qualities Required
                </motion.h2>
                <motion.div className="bg-card rounded-xl p-8 border border-border" variants={fadeInUp}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Bronchoscopy expertise</li>
                        <li>• Pulmonary function interpretation</li>
                        <li>• Critical care management</li>
                        <li>• Diagnostic imaging skills</li>
                        <li>• Ventilator management</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Patience with chronic conditions</li>
                        <li>• Attention to breathing patterns</li>
                        <li>• Compassionate care approach</li>
                        <li>• Team collaboration skills</li>
                        <li>• Continuous learning mindset</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.section>

              {/* FAQ Section */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                  <HelpCircle className="h-8 w-8 text-primary" />
                  Frequently Asked Questions
                </motion.h2>
                <motion.div className="space-y-6" variants={staggerContainer}>
                  {[
                    {
                      question: "What is the future scope of respiratory medicine?",
                      answer: "Excellent future scope due to increasing air pollution, growing prevalence of COPD and asthma, and emerging respiratory infections. High demand in both urban and rural areas."
                    },
                    {
                      question: "Is MD Respiratory Medicine competitive in NEET PG?",
                      answer: "Moderately competitive. While not as competitive as dermatology or radiology, it requires good preparation and rank for government colleges."
                    },
                    {
                      question: "Can I work in ICU after MD Respiratory Medicine?",
                      answer: "Yes, respiratory medicine provides excellent training for ICU work, especially managing ventilated patients and respiratory emergencies."
                    },
                    {
                      question: "What's the difference between respiratory medicine and chest medicine?",
                      answer: "They are essentially the same specialty. 'Chest Medicine' is the older term, while 'Respiratory Medicine' or 'Pulmonology' are more commonly used now."
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border"
                      variants={fadeInUp}
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <MDSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MDRespiratoryMedicine;