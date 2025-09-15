import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Pill, Stethoscope, GraduationCap, Award, Target, Users, TrendingUp, HelpCircle } from 'lucide-react';
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

const MDPharmacology = () => {
  return (
    <>
      <Helmet>
        <title>MD Pharmacology - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Pharmacology course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for pharmacology aspirants." />
        <meta name="keywords" content="MD Pharmacology, pharmacology course, drug research, clinical trials, NEET PG, pharmacology career, medical colleges" />
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
                    <Pill className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Pharmacology
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Advancing Medicine Through Drug Science
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Pharmacology is a specialized field that focuses on the study of drugs and their effects on the human body. Pharmacologists play a crucial role in drug development, clinical trials, therapeutic optimization, and ensuring safe and effective medication use in healthcare settings.
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
                      <li>• Drug mechanism and action studies</li>
                      <li>• Clinical trial design and monitoring</li>
                      <li>• Adverse drug reaction assessment</li>
                      <li>• Therapeutic drug monitoring</li>
                      <li>• Rational drug therapy guidance</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Research Areas</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• New drug discovery and development</li>
                      <li>• Pharmacokinetics and pharmacodynamics</li>
                      <li>• Toxicology and safety assessment</li>
                      <li>• Personalized medicine approaches</li>
                      <li>• Drug interaction studies</li>
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
                      title: "Clinical Pharmacologist",
                      description: "Work in hospitals optimizing drug therapy and conducting clinical trials"
                    },
                    {
                      title: "Drug Development Researcher",
                      description: "Lead pharmaceutical research in drug discovery and development"
                    },
                    {
                      title: "Regulatory Affairs Specialist",
                      description: "Work with regulatory bodies for drug approval and safety monitoring"
                    },
                    {
                      title: "Academic Professor",
                      description: "Teach pharmacology and conduct research in medical institutions"
                    },
                    {
                      title: "Pharmaceutical Industry",
                      description: "Work in R&D, medical affairs, and clinical development roles"
                    },
                    {
                      title: "Drug Safety Officer",
                      description: "Monitor and assess drug safety in clinical and post-market settings"
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
                            <p className="text-muted-foreground">Basic pharmacology principles, drug metabolism, and toxicology</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Clinical pharmacology, drug interactions, and research methodology</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Advanced research, thesis work, and specialized training</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Pharmacokinetics and pharmacodynamics</li>
                        <li>• Clinical trial methodology</li>
                        <li>• Drug development processes</li>
                        <li>• Regulatory guidelines and ethics</li>
                        <li>• Biostatistics and data analysis</li>
                        <li>• Pharmacovigilance and drug safety</li>
                        <li>• Molecular pharmacology</li>
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
                  Top Colleges for MD Pharmacology
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "King George's Medical University (KGMU), Lucknow",
                    "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER), Puducherry",
                    "Institute of Medical Sciences, Banaras Hindu University (BHU), Varanasi",
                    "Christian Medical College (CMC), Vellore",
                    "Maulana Azad Medical College (MAMC), New Delhi",
                    "Armed Forces Medical College (AFMC), Pune"
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
                  Career Advancement & Specializations
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Subspecialty Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Clinical Pharmacology</li>
                      <li>• Pharmacovigilance</li>
                      <li>• Regulatory Affairs</li>
                      <li>• Pharmacoeconomics</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Certifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Good Clinical Practice (GCP)</li>
                      <li>• Drug Development</li>
                      <li>• Pharmacogenomics</li>
                      <li>• Clinical Data Management</li>
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
                        <li>• Drug development knowledge</li>
                        <li>• Statistical analysis proficiency</li>
                        <li>• Research methodology expertise</li>
                        <li>• Regulatory guidelines understanding</li>
                        <li>• Laboratory techniques</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Strong analytical mindset</li>
                        <li>• Attention to detail</li>
                        <li>• Scientific curiosity</li>
                        <li>• Ethical integrity</li>
                        <li>• Communication skills</li>
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
                      question: "What is the scope of MD Pharmacology in India?",
                      answer: "Excellent scope in pharmaceutical industry, clinical research, regulatory affairs, and academic institutions. Growing opportunities in drug development and personalized medicine."
                    },
                    {
                      question: "Can I work in pharmaceutical companies after MD Pharmacology?",
                      answer: "Yes, MD Pharmacology graduates are highly sought after in pharmaceutical companies for R&D, clinical development, medical affairs, and regulatory roles."
                    },
                    {
                      question: "Is MD Pharmacology suitable for clinical practice?",
                      answer: "While primarily research-oriented, clinical pharmacologists work in hospitals for drug therapy optimization, adverse drug reaction monitoring, and clinical trials."
                    },
                    {
                      question: "What are the research opportunities in pharmacology?",
                      answer: "Extensive research opportunities in drug discovery, clinical trials, pharmacogenomics, drug safety, and pharmaceutical innovation with good funding prospects."
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

export default MDPharmacology;