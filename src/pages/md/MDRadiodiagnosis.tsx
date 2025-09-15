import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { RadiationIcon, Stethoscope, GraduationCap, Award, Target, Users, TrendingUp, HelpCircle } from 'lucide-react';
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

const MDRadiodiagnosis = () => {
  return (
    <>
      <Helmet>
        <title>MD Radiodiagnosis (Radiology) - Career Guide, Admission & Scope | Admission Hands</title>
        <meta name="description" content="Complete guide to MD Radiodiagnosis course - admission process, career opportunities, top colleges, and specialization details. Expert guidance for radiology aspirants." />
        <meta name="keywords" content="MD Radiodiagnosis, MD Radiology, radiology course, medical imaging, NEET PG, radiology career, medical colleges" />
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
                    <RadiationIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Radiodiagnosis (Radiology)
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Master the Art of Medical Imaging and Diagnosis
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MD Radiodiagnosis is a specialized medical field that uses advanced imaging technologies like X-rays, CT scans, MRI, ultrasound, and nuclear medicine to diagnose diseases and guide treatments. This field combines cutting-edge technology with clinical expertise to provide crucial diagnostic insights.
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
                      <li>• Diagnostic imaging interpretation</li>
                      <li>• Image-guided interventional procedures</li>
                      <li>• Emergency radiology services</li>
                      <li>• Pediatric and specialized imaging</li>
                      <li>• Radiation safety and protection</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Technologies</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Computed Tomography (CT)</li>
                      <li>• Magnetic Resonance Imaging (MRI)</li>
                      <li>• Ultrasound and Doppler studies</li>
                      <li>• Nuclear medicine imaging</li>
                      <li>• Mammography and specialized imaging</li>
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
                      title: "Hospital Radiologist",
                      description: "Work in hospitals providing diagnostic imaging services and emergency radiology support"
                    },
                    {
                      title: "Interventional Radiologist",
                      description: "Perform minimally invasive procedures using image guidance for treatment"
                    },
                    {
                      title: "Academic Radiologist",
                      description: "Combine clinical practice with teaching and research in medical institutions"
                    },
                    {
                      title: "Teleradiology Specialist",
                      description: "Provide remote imaging interpretation services using digital platforms"
                    },
                    {
                      title: "Private Practice",
                      description: "Establish independent imaging centers and diagnostic facilities"
                    },
                    {
                      title: "Research Scientist",
                      description: "Advance imaging technology and develop new diagnostic techniques"
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
                            <p className="text-muted-foreground">Basic radiological anatomy, physics, and fundamental imaging techniques</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 2</h4>
                            <p className="text-muted-foreground">Systematic radiology, advanced imaging modalities, and clinical rotations</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-foreground">Year 3</h4>
                            <p className="text-muted-foreground">Subspecialty training, research work, and independent practice preparation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Learning Areas</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Radiological anatomy and pathology</li>
                        <li>• Cross-sectional imaging interpretation</li>
                        <li>• Radiation physics and safety</li>
                        <li>• Image processing and digital radiography</li>
                        <li>• Emergency and trauma imaging</li>
                        <li>• Pediatric and specialized imaging</li>
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
                  Top Colleges for MD Radiodiagnosis
                </motion.h2>
                <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                  {[
                    "All India Institute of Medical Sciences (AIIMS), New Delhi",
                    "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
                    "King George's Medical University (KGMU), Lucknow",
                    "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS), Lucknow",
                    "Christian Medical College (CMC), Vellore",
                    "Armed Forces Medical College (AFMC), Pune",
                    "Kasturba Medical College (KMC), Manipal",
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
                    <h3 className="text-xl font-semibold text-foreground mb-4">DM Super Specializations</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Interventional Radiology</li>
                      <li>• Neuroradiology</li>
                      <li>• Musculoskeletal Radiology</li>
                      <li>• Cardiovascular Radiology</li>
                    </ul>
                  </motion.div>
                  <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Fellowship Programs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Pediatric Radiology</li>
                      <li>• Breast Imaging</li>
                      <li>• Emergency Radiology</li>
                      <li>• Nuclear Medicine</li>
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
                        <li>• Strong analytical and observational skills</li>
                        <li>• Attention to detail and pattern recognition</li>
                        <li>• Computer proficiency and digital literacy</li>
                        <li>• Understanding of physics and technology</li>
                        <li>• Excellent visual-spatial skills</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Personal Qualities</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Patience and concentration</li>
                        <li>• Communication skills</li>
                        <li>• Continuous learning mindset</li>
                        <li>• Team collaboration abilities</li>
                        <li>• Ethical responsibility</li>
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
                      question: "What is the NEET PG cutoff for MD Radiodiagnosis?",
                      answer: "The cutoff varies yearly and by category. Generally, it's competitive due to the popularity of the specialty. Government colleges require higher ranks compared to private institutions."
                    },
                    {
                      question: "Is MD Radiodiagnosis a good career choice?",
                      answer: "Yes, it offers excellent career prospects with high demand in hospitals, growing scope in telemedicine, good work-life balance, and opportunities for subspecialization."
                    },
                    {
                      question: "What's the difference between MD Radiodiagnosis and Nuclear Medicine?",
                      answer: "MD Radiodiagnosis covers all imaging modalities including X-ray, CT, MRI, and ultrasound, while Nuclear Medicine specifically focuses on radioactive tracer-based imaging and therapy."
                    },
                    {
                      question: "Can I pursue interventional radiology after MD Radiodiagnosis?",
                      answer: "Yes, you can pursue DM Interventional Radiology after completing MD Radiodiagnosis, which opens opportunities for minimally invasive procedures."
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

export default MDRadiodiagnosis;