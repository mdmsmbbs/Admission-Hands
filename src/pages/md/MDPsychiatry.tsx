import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Brain, Stethoscope, GraduationCap, Award, Target, Users, TrendingUp, HelpCircle } from 'lucide-react';
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

const MDPsychiatry = () => {
  return (
    <>
      <Helmet>
        <title>MD Psychiatry - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Psychiatry course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for psychiatry aspirants." />
        <meta name="keywords" content="MD Psychiatry, psychiatry course, mental health, NEET PG, psychiatry career, medical colleges, psychology" />
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
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Psychiatry
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Healing Minds and Transforming Lives
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Psychiatry is a medical specialty dedicated to the diagnosis, treatment, and prevention of mental health disorders. Psychiatrists combine medical knowledge with psychological understanding to provide comprehensive care for patients experiencing various mental health conditions.
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
                      <li>• Mental health disorder diagnosis</li>
                      <li>• Psychopharmacological treatment</li>
                      <li>• Psychotherapy and counseling</li>
                      <li>• Crisis intervention and emergency care</li>
                      <li>• Rehabilitation and community care</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Common Conditions</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Depression and anxiety disorders</li>
                      <li>• Bipolar disorder and schizophrenia</li>
                      <li>• Substance abuse and addiction</li>
                      <li>• Childhood and adolescent disorders</li>
                      <li>• Personality and behavioral disorders</li>
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
                      title: "Hospital Psychiatrist",
                      description: "Provide inpatient and outpatient psychiatric services in general and specialized hospitals"
                    },
                    {
                      title: "Private Practice",
                      description: "Establish independent psychiatric clinics offering personalized mental health care"
                    },
                    {
                      title: "Community Mental Health",
                      description: "Work in community centers providing accessible mental health services"
                    },
                    {
                      title: "Academic Psychiatrist",
                      description: "Combine clinical practice with teaching and research in medical institutions"
                    },
                    {
                      title: "Forensic Psychiatrist",
                      description: "Specialize in legal aspects of mental health and criminal justice system"
                    },
                    {
                      title: "Child Psychiatrist",
                      description: "Focus on mental health disorders in children and adolescents"
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
                            <p className="text-muted-foreground">Basic psychiatric principles, neuroscience, and clinical assessment methods</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Advanced psychopathology, psychopharmacology, and psychotherapy techniques</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Specialized training, research work, and subspecialty exposure</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Psychiatric assessment and diagnosis</li>
                        <li>• Psychopharmacology and therapeutics</li>
                        <li>• Psychotherapy techniques</li>
                        <li>• Neuroscience and brain imaging</li>
                        <li>• Crisis intervention methods</li>
                        <li>• Community mental health</li>
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
                  Top Colleges for MD Psychiatry
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "National Institute of Mental Health and Neurosciences (NIMHANS), Bangalore",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "King George's Medical University (KGMU), Lucknow",
                    "Central Institute of Psychiatry (CIP), Ranchi",
                    "Christian Medical College (CMC), Vellore",
                    "Institute of Psychiatry and Human Behaviour (IPHB), Goa",
                    "Lokmanya Tilak Municipal Medical College (LTMMC), Mumbai"
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
                      <li>• Child and Adolescent Psychiatry</li>
                      <li>• Forensic Psychiatry</li>
                      <li>• Addiction Psychiatry</li>
                      <li>• Geriatric Psychiatry</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Fellowship Programs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Neuropsychiatry</li>
                      <li>• Consultation-Liaison Psychiatry</li>
                      <li>• Emergency Psychiatry</li>
                      <li>• Psychotherapy Training</li>
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
                        <li>• Psychiatric assessment techniques</li>
                        <li>• Psychopharmacology knowledge</li>
                        <li>• Psychotherapy skills</li>
                        <li>• Crisis intervention abilities</li>
                        <li>• Research and analytical skills</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Empathy and compassion</li>
                        <li>• Excellent communication skills</li>
                        <li>• Patience and understanding</li>
                        <li>• Emotional resilience</li>
                        <li>• Non-judgmental attitude</li>
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
                      question: "What is the scope of psychiatry in India?",
                      answer: "Excellent scope with growing awareness of mental health. Increasing demand in hospitals, private practice, and government mental health programs."
                    },
                    {
                      question: "Is MD Psychiatry emotionally demanding?",
                      answer: "Yes, it can be emotionally challenging, but it's also highly rewarding. Proper self-care and professional support systems help manage the emotional aspects."
                    },
                    {
                      question: "What's the difference between psychiatry and psychology?",
                      answer: "Psychiatrists are medical doctors who can prescribe medications and provide medical treatments, while psychologists focus primarily on therapy and counseling."
                    },
                    {
                      question: "Can I specialize in child psychiatry after MD?",
                      answer: "Yes, you can pursue fellowships or specialized training in child and adolescent psychiatry after completing MD Psychiatry."
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

export default MDPsychiatry;