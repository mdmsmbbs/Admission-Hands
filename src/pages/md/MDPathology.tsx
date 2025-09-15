import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Microscope, Stethoscope, GraduationCap, Award, Target, Users, TrendingUp, HelpCircle } from 'lucide-react';
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

const MDPathology = () => {
  return (
    <>
      <Helmet>
        <title>MD Pathology - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Pathology course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for pathology aspirants." />
        <meta name="keywords" content="MD Pathology, pathology course, laboratory medicine, histopathology, NEET PG, pathology career, medical colleges" />
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
                    <Microscope className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Pathology
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Unveiling Disease Mysteries Through Science
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Pathology is a foundational medical specialty that involves the study of disease through examination of tissues, organs, bodily fluids, and whole bodies. Pathologists are the medical detectives who provide crucial diagnostic insights that guide patient treatment decisions.
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
                      <li>• Histopathological diagnosis</li>
                      <li>• Cytopathology and fine needle aspiration</li>
                      <li>• Autopsy and forensic pathology</li>
                      <li>• Immunohistochemistry studies</li>
                      <li>• Molecular pathology diagnostics</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Techniques</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Microscopic tissue examination</li>
                      <li>• Special staining techniques</li>
                      <li>• Electron microscopy</li>
                      <li>• Digital pathology systems</li>
                      <li>• Quality control and assurance</li>
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
                      title: "Hospital Pathologist",
                      description: "Provide diagnostic pathology services in hospitals and medical centers"
                    },
                    {
                      title: "Laboratory Director",
                      description: "Lead and manage pathology laboratories with administrative responsibilities"
                    },
                    {
                      title: "Academic Pathologist",
                      description: "Combine diagnostic work with teaching and research in medical colleges"
                    },
                    {
                      title: "Forensic Pathologist",
                      description: "Specialize in autopsy work and medico-legal investigations"
                    },
                    {
                      title: "Reference Laboratory",
                      description: "Work in specialized reference labs providing expert diagnostic services"
                    },
                    {
                      title: "Digital Pathology",
                      description: "Focus on telepathology and AI-assisted diagnostic technologies"
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
                            <p className="text-muted-foreground">Basic pathology principles, histology, and fundamental diagnostic techniques</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Systematic pathology, cytopathology, and specialized diagnostic methods</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Advanced diagnostics, research work, and subspecialty training</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• General and systematic pathology</li>
                        <li>• Histopathology and cytopathology</li>
                        <li>• Immunohistochemistry techniques</li>
                        <li>• Molecular pathology methods</li>
                        <li>• Autopsy and forensic procedures</li>
                        <li>• Laboratory management</li>
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
                  Top Colleges for MD Pathology
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "King George's Medical University (KGMU), Lucknow",
                    "Christian Medical College (CMC), Vellore",
                    "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER), Puducherry",
                    "Armed Forces Medical College (AFMC), Pune",
                    "Maulana Azad Medical College (MAMC), New Delhi",
                    "Grant Medical College, Mumbai"
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
                      <li>• Surgical Pathology</li>
                      <li>• Cytopathology</li>
                      <li>• Hematopathology</li>
                      <li>• Dermatopathology</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Fellowship Programs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Forensic Pathology</li>
                      <li>• Molecular Pathology</li>
                      <li>• Pediatric Pathology</li>
                      <li>• Neuropathology</li>
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
                        <li>• Microscopic examination expertise</li>
                        <li>• Pattern recognition abilities</li>
                        <li>• Laboratory technique proficiency</li>
                        <li>• Digital pathology skills</li>
                        <li>• Quality control knowledge</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Attention to detail</li>
                        <li>• Analytical thinking</li>
                        <li>• Patience and concentration</li>
                        <li>• Continuous learning mindset</li>
                        <li>• Team collaboration skills</li>
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
                      question: "What is the future scope of pathology?",
                      answer: "Excellent future scope with advances in molecular pathology, digital pathology, and AI integration. Growing demand for specialized diagnostic services."
                    },
                    {
                      question: "Do pathologists interact with patients?",
                      answer: "Limited direct patient interaction, but pathologists may consult with clinicians and sometimes participate in multidisciplinary team meetings."
                    },
                    {
                      question: "Is pathology a good work-life balance specialty?",
                      answer: "Generally offers better work-life balance compared to clinical specialties, with regular hours and less emergency calls."
                    },
                    {
                      question: "What's the difference between MD Pathology and MD Microbiology?",
                      answer: "Pathology focuses on tissue diagnosis and disease mechanisms, while Microbiology specializes in infectious diseases and microorganisms."
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

export default MDPathology;