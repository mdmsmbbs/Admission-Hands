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

const MDMicrobiology = () => {
  return (
    <>
      <Helmet>
        <title>MD Microbiology - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Microbiology course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for microbiology aspirants." />
        <meta name="keywords" content="MD Microbiology, microbiology course, infectious diseases, laboratory medicine, NEET PG, microbiology career, medical colleges" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container-custom py-8 pt-32">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Hero Section */}
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-6 border border-border"
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
                      MD Microbiology
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Defending Health Through Microbial Science
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Microbiology is a specialized field that focuses on the study of microorganisms including bacteria, viruses, fungi, and parasites that cause infections in humans. Microbiologists play a crucial role in diagnosing infectious diseases, developing antimicrobial strategies, and advancing public health through infection control.
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
                      <li>• Bacterial culture and identification</li>
                      <li>• Viral diagnostics and molecular testing</li>
                      <li>• Antimicrobial sensitivity testing</li>
                      <li>• Infection control and prevention</li>
                      <li>• Outbreak investigation and epidemiology</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Laboratory Techniques</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Advanced microscopy and staining</li>
                      <li>• Molecular diagnostic methods</li>
                      <li>• Automated culture systems</li>
                      <li>• Immunological assays</li>
                      <li>• Quality assurance protocols</li>
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
                      title: "Hospital Microbiologist",
                      description: "Lead microbiology departments in hospitals providing critical diagnostic services"
                    },
                    {
                      title: "Infection Control Officer",
                      description: "Develop and implement infection prevention strategies in healthcare settings"
                    },
                    {
                      title: "Public Health Microbiologist",
                      description: "Work with government agencies on disease surveillance and outbreak control"
                    },
                    {
                      title: "Research Scientist",
                      description: "Conduct research on antimicrobial resistance and new diagnostic methods"
                    },
                    {
                      title: "Pharmaceutical Industry",
                      description: "Work in drug development, quality control, and regulatory affairs"
                    },
                    {
                      title: "Academic Professor",
                      description: "Teach and research in medical colleges and universities"
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
                            <p className="text-muted-foreground">Basic microbiology, bacteriology, and laboratory techniques</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Virology, mycology, parasitology, and clinical correlation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Advanced diagnostics, research, and subspecialty training</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Medical bacteriology and antibiotic resistance</li>
                        <li>• Clinical virology and molecular diagnostics</li>
                        <li>• Medical mycology and parasitology</li>
                        <li>• Immunology and serology</li>
                        <li>• Infection control and epidemiology</li>
                        <li>• Laboratory management and quality control</li>
                        <li>• Research methodology and biostatistics</li>
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
                  Top Colleges for MD Microbiology
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "Christian Medical College (CMC), Vellore",
                    "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER), Puducherry",
                    "King George's Medical University (KGMU), Lucknow",
                    "Institute of Medical Sciences, Banaras Hindu University (BHU), Varanasi",
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
                      <li>• Clinical Microbiology</li>
                      <li>• Medical Virology</li>
                      <li>• Infection Control</li>
                      <li>• Antimicrobial Stewardship</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Certifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Molecular Diagnostics</li>
                      <li>• Tuberculosis Microbiology</li>
                      <li>• Hospital Infection Control</li>
                      <li>• Public Health Microbiology</li>
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
                        <li>• Laboratory technique proficiency</li>
                        <li>• Microscopy and culture methods</li>
                        <li>• Molecular diagnostic techniques</li>
                        <li>• Data analysis and interpretation</li>
                        <li>• Quality control procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Attention to detail and precision</li>
                        <li>• Strong analytical thinking</li>
                        <li>• Good communication skills</li>
                        <li>• Research aptitude</li>
                        <li>• Team collaboration abilities</li>
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
                      question: "What is the scope of MD Microbiology in the current scenario?",
                      answer: "Excellent scope with increasing focus on infection control, antimicrobial resistance, and emerging infectious diseases. Growing demand in hospitals, research, and pharmaceutical industries."
                    },
                    {
                      question: "Can I pursue research after MD Microbiology?",
                      answer: "Yes, MD Microbiology offers excellent research opportunities in infectious diseases, vaccine development, antimicrobial resistance, and molecular diagnostics."
                    },
                    {
                      question: "Is MD Microbiology different from MD Pathology?",
                      answer: "Yes, Microbiology specifically focuses on infectious agents and diseases, while Pathology has a broader scope including non-infectious diseases and tissue diagnosis."
                    },
                    {
                      question: "What are the job opportunities in private sector?",
                      answer: "Private hospitals, diagnostic laboratories, pharmaceutical companies, biotechnology firms, and medical device companies offer good opportunities."
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

export default MDMicrobiology;