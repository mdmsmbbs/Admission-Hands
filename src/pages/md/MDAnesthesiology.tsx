import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Syringe, Stethoscope, GraduationCap, Award, Target, Users, TrendingUp, HelpCircle } from 'lucide-react';
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

const MDAnesthesiology = () => {
  return (
    <>
      <Helmet>
        <title>MD Anesthesiology - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Anesthesiology course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for anesthesia aspirants." />
        <meta name="keywords" content="MD Anesthesiology, anesthesia course, pain management, critical care, NEET PG, anesthesia career, medical colleges" />
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
                    <Syringe className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Anesthesiology
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Masters of Pain Management and Critical Care
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Anesthesiology is a critical medical specialty focused on perioperative care, pain management, and critical care medicine. Anesthesiologists ensure patient safety and comfort during surgical procedures while managing complex physiological processes and emergency situations.
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
                      <li>• Preoperative patient assessment</li>
                      <li>• Intraoperative anesthesia management</li>
                      <li>• Postoperative pain control</li>
                      <li>• Critical care and emergency medicine</li>
                      <li>• Chronic pain management</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Procedures</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• General and regional anesthesia</li>
                      <li>• Epidural and spinal blocks</li>
                      <li>• Nerve blocks and pain interventions</li>
                      <li>• Airway management</li>
                      <li>• Intensive care monitoring</li>
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
                      title: "Hospital Anesthesiologist",
                      description: "Provide anesthesia services for surgical procedures in hospitals and medical centers"
                    },
                    {
                      title: "Critical Care Specialist",
                      description: "Manage critically ill patients in intensive care units with advanced monitoring"
                    },
                    {
                      title: "Pain Management Specialist",
                      description: "Focus on chronic pain treatment using various interventional techniques"
                    },
                    {
                      title: "Academic Anesthesiologist",
                      description: "Combine clinical practice with teaching and research in medical institutions"
                    },
                    {
                      title: "Emergency Medicine",
                      description: "Provide emergency anesthesia and critical care in trauma centers"
                    },
                    {
                      title: "Private Practice",
                      description: "Establish specialized pain management clinics and anesthesia services"
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
                            <p className="text-muted-foreground">Basic anesthesia principles, pharmacology, and monitoring techniques</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Advanced anesthesia techniques, critical care, and specialty rotations</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Pain management, research work, and subspecialty training</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Anesthesia pharmacology</li>
                        <li>• Perioperative medicine</li>
                        <li>• Pain physiology and management</li>
                        <li>• Critical care medicine</li>
                        <li>• Airway management techniques</li>
                        <li>• Regional anesthesia blocks</li>
                        <li>• Emergency resuscitation</li>
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
                  Top Colleges for MD Anesthesiology
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "King George's Medical University (KGMU), Lucknow",
                    "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS), Lucknow",
                    "Christian Medical College (CMC), Vellore",
                    "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER), Puducherry",
                    "Armed Forces Medical College (AFMC), Pune",
                    "Topiwala National Medical College (TNMC), Mumbai"
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
                    <h3 className="text-xl font-semibold text-foreground mb-4">DM Super Specializations</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Critical Care Medicine</li>
                      <li>• Cardiac Anesthesia</li>
                      <li>• Neuroanesthesia</li>
                      <li>• Pain Medicine</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Fellowship Programs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Pediatric Anesthesia</li>
                      <li>• Obstetric Anesthesia</li>
                      <li>• Regional Anesthesia</li>
                      <li>• Transplant Anesthesia</li>
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
                        <li>• Manual dexterity and precision</li>
                        <li>• Quick decision-making abilities</li>
                        <li>• Understanding of pharmacology</li>
                        <li>• Monitoring and interpretation skills</li>
                        <li>• Emergency management expertise</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Calm under pressure</li>
                        <li>• Excellent communication skills</li>
                        <li>• Attention to detail</li>
                        <li>• Team collaboration</li>
                        <li>• Compassion and empathy</li>
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
                      question: "What is the scope of MD Anesthesiology in India?",
                      answer: "Excellent scope with high demand in hospitals, trauma centers, and pain clinics. Growing opportunities in critical care and interventional pain management."
                    },
                    {
                      question: "Is anesthesiology a stressful specialty?",
                      answer: "It can be demanding due to critical decision-making and patient safety responsibilities, but offers good work-life balance compared to surgical specialties."
                    },
                    {
                      question: "What's the difference between anesthesiology and critical care?",
                      answer: "Anesthesiology focuses on perioperative care and pain management, while critical care involves long-term management of critically ill patients in ICUs."
                    },
                    {
                      question: "Can I pursue pain management after MD Anesthesiology?",
                      answer: "Yes, you can specialize in pain management through fellowship programs or DM in Pain Medicine, focusing on chronic pain treatment."
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

export default MDAnesthesiology;