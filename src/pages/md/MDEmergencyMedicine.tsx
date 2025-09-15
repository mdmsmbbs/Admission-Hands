import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Ambulance, Stethoscope, GraduationCap, Award, Target, Users, TrendingUp, HelpCircle } from 'lucide-react';
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

const MDEmergencyMedicine = () => {
  return (
    <>
      <Helmet>
        <title>MD Emergency Medicine - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Emergency Medicine course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for emergency medicine aspirants." />
        <meta name="keywords" content="MD Emergency Medicine, emergency medicine course, critical care, trauma, NEET PG, emergency career, medical colleges" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8 pt-32">
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
                    <Ambulance className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Emergency Medicine
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Frontline Heroes Saving Lives
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Emergency Medicine is a dynamic specialty focused on the immediate decision-making and intervention for patients with acute illnesses and injuries. Emergency physicians are trained to handle a wide spectrum of medical emergencies across all age groups and body systems.
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
                      <li>• Trauma and accident management</li>
                      <li>• Cardiac and respiratory emergencies</li>
                      <li>• Poisoning and overdose treatment</li>
                      <li>• Pediatric and geriatric emergencies</li>
                      <li>• Disaster and mass casualty management</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Procedures</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Advanced life support protocols</li>
                      <li>• Emergency intubation and airway management</li>
                      <li>• Central line insertion and procedures</li>
                      <li>• Emergency surgery and wound management</li>
                      <li>• Point-of-care ultrasound</li>
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
                      title: "Emergency Department Physician",
                      description: "Work in hospital emergency departments providing immediate care to critical patients"
                    },
                    {
                      title: "Trauma Center Specialist",
                      description: "Specialize in trauma care and work in dedicated trauma centers"
                    },
                    {
                      title: "Critical Care Medicine",
                      description: "Manage critically ill patients in intensive care units"
                    },
                    {
                      title: "Pre-hospital Emergency Care",
                      description: "Work with ambulance services and emergency medical systems"
                    },
                    {
                      title: "Disaster Management",
                      description: "Lead emergency response teams during natural disasters and mass casualties"
                    },
                    {
                      title: "Academic Emergency Medicine",
                      description: "Combine clinical practice with teaching and research in emergency medicine"
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
                            <p className="text-muted-foreground">Basic emergency medicine principles, life support, and foundational skills</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Advanced emergency procedures, trauma management, and specialty rotations</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Leadership training, research work, and subspecialty focus</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Advanced trauma life support (ATLS)</li>
                        <li>• Emergency pharmacology</li>
                        <li>• Critical care procedures</li>
                        <li>• Toxicology and poisoning management</li>
                        <li>• Emergency ultrasound</li>
                        <li>• Disaster management protocols</li>
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
                  Top Colleges for MD Emergency Medicine
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "Christian Medical College (CMC), Vellore",
                    "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER), Puducherry",
                    "King George's Medical University (KGMU), Lucknow",
                    "Lokmanya Tilak Municipal Medical College (LTMMC), Mumbai",
                    "Madras Medical College, Chennai",
                    "Government Medical College, Thiruvananthapuram"
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
                      <li>• Trauma Surgery</li>
                      <li>• Critical Care Medicine</li>
                      <li>• Emergency Pediatrics</li>
                      <li>• Toxicology</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Fellowship Programs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Emergency Ultrasound</li>
                      <li>• Disaster Medicine</li>
                      <li>• Sports Medicine</li>
                      <li>• Wilderness Medicine</li>
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
                        <li>• Rapid assessment and triage</li>
                        <li>• Advanced life support procedures</li>
                        <li>• Emergency surgery skills</li>
                        <li>• Multi-system medical knowledge</li>
                        <li>• Leadership and crisis management</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Calm under extreme pressure</li>
                        <li>• Quick decision-making ability</li>
                        <li>• Physical and emotional stamina</li>
                        <li>• Excellent communication skills</li>
                        <li>• Adaptability and flexibility</li>
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
                      question: "Is MD Emergency Medicine very stressful?",
                      answer: "Yes, it can be highly stressful due to life-and-death situations, but it's also extremely rewarding. Proper training and stress management techniques help cope with the demands."
                    },
                    {
                      question: "What are the working hours like in emergency medicine?",
                      answer: "Emergency physicians typically work in shifts (8-12 hours) including nights, weekends, and holidays. Shift-based work can offer flexibility but requires adaptation."
                    },
                    {
                      question: "Is there good scope for emergency medicine in India?",
                      answer: "Yes, growing scope with increasing trauma cases, better emergency infrastructure, and rising awareness of emergency care importance in India."
                    },
                    {
                      question: "Can I do emergency medicine after any clinical MD?",
                      answer: "Yes, many emergency medicine programs accept candidates from various clinical backgrounds, though some prefer those with prior emergency or critical care experience."
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

export default MDEmergencyMedicine;