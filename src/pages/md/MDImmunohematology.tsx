import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { CircleDot, Droplets, Microscope, Shield, Heart, Activity, TrendingUp, Users } from 'lucide-react';
import MDSidebar from '@/components/md/MDSidebar';
import CTA from '@/components/CTA';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const MDImmunohematology: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Immunohematology - Blood Banking Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Immunohematology programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for blood banking." />
        <meta name="keywords" content="MD Immunohematology, blood banking, transfusion medicine, NEET PG, medical specialization, blood safety, hematology" />
        <meta property="og:title" content="MD Immunohematology - Blood Banking Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Immunohematology in India." />
      </Helmet>

      <main className="container-custom py-8 pt-24">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <motion.section
              className="mb-12"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="text-center mb-8" variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium mb-6">
                  <CircleDot className="h-4 w-4" />
                  Blood Banking Specialization
                </div>
                <h1 className="text-4xl font-bold text-foreground">MD Immunohematology</h1>
                <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Specialize in safe blood transfusion and hematological disorder management
                </p>
              </motion.div>
            </motion.section>

            {/* Specialty Overview */}
            <motion.section
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="card-elegant p-8" variants={fadeInUp}>
                <h2 className="text-2xl font-semibold text-primary">Specialty Overview & Significance</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Immunohematology, also known as Blood Banking and Transfusion Medicine, focuses on ensuring safe blood transfusion practices and managing blood-related disorders. This critical specialty serves as the backbone of modern medical care.
                  </p>
                  <p>
                    Specialists in this field work to prevent transfusion reactions, maintain blood bank operations, and provide expert consultation on complex hematological conditions requiring transfusion support.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Core Specialization Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Blood grouping and compatibility testing</li>
                      <li>• Antibody identification and resolution</li>
                      <li>• Transfusion medicine protocols</li>
                      <li>• Apheresis procedures</li>
                      <li>• Quality assurance in blood banking</li>
                      <li>• Molecular immunohematology</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Clinical Applications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Emergency transfusion support</li>
                      <li>• Surgical blood management</li>
                      <li>• Hemolytic disease management</li>
                      <li>• Massive transfusion protocols</li>
                      <li>• Platelet disorders treatment</li>
                      <li>• Stem cell transplant support</li>
                    </ul>
                  </div>
                </div>
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
              <motion.div className="card-elegant p-8" variants={fadeInUp}>
                <h2 className="text-2xl font-semibold text-primary">Career Opportunities & Professional Roles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <div className="space-y-3">
                    <Droplets className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Blood Bank Director</h3>
                    <p className="text-muted-foreground text-sm">Lead hospital blood banks and transfusion services with full operational responsibility</p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Transfusion Safety Officer</h3>
                    <p className="text-muted-foreground text-sm">Ensure compliance with blood safety regulations and quality standards</p>
                  </div>
                  <div className="space-y-3">
                    <Microscope className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Reference Laboratory</h3>
                    <p className="text-muted-foreground text-sm">Work in specialized reference labs for complex immunohematology problems</p>
                  </div>
                  <div className="space-y-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Academic Researcher</h3>
                    <p className="text-muted-foreground text-sm">Teaching and research in medical colleges and transfusion medicine institutes</p>
                  </div>
                  <div className="space-y-3">
                    <Activity className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Clinical Consultant</h3>
                    <p className="text-muted-foreground text-sm">Provide expert consultation for complex transfusion cases</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Regulatory Affairs</h3>
                    <p className="text-muted-foreground text-sm">Work with health authorities on blood safety policies and regulations</p>
                  </div>
                </div>
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
              <motion.div className="card-elegant p-8" variants={fadeInUp}>
                <h2 className="text-2xl font-semibold text-primary">Course Structure & Duration</h2>
                <div className="mt-6">
                  <div className="bg-muted/50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-foreground mb-3">3-Year MD Program Structure</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground">First Year - Foundation</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Basic immunology and hematology</li>
                          <li>• Blood group systems</li>
                          <li>• Routine blood banking procedures</li>
                          <li>• Quality control principles</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Clinical Practice</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Complex antibody investigations</li>
                          <li>• Transfusion reactions and complications</li>
                          <li>• Apheresis and specialized procedures</li>
                          <li>• Molecular techniques in blood banking</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced problem-solving cases</li>
                          <li>• Research project and dissertation</li>
                          <li>• Blood bank management</li>
                          <li>• Regulatory compliance training</li>
                        </ul>
                      </div>
                    </div>
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
              <motion.div className="card-elegant p-8" variants={fadeInUp}>
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Immunohematology</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AIIMS New Delhi</li>
                      <li>• JIPMER Puducherry</li>
                      <li>• King George's Medical University, Lucknow</li>
                      <li>• Postgraduate Institute, Chandigarh</li>
                      <li>• Sanjay Gandhi Postgraduate Institute, Lucknow</li>
                      <li>• Medical College, Thiruvananthapuram</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Christian Medical College, Vellore</li>
                      <li>• Kasturba Medical College, Manipal</li>
                      <li>• St. John's Medical College, Bangalore</li>
                      <li>• Armed Forces Medical College, Pune</li>
                      <li>• Amrita Institute of Medical Sciences</li>
                    </ul>
                  </div>
                </div>
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
              <motion.div className="card-elegant p-8" variants={fadeInUp}>
                <h2 className="text-2xl font-semibold text-primary">Skills & Qualities Required</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Technical Skills</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Laboratory technique mastery</li>
                      <li>• Blood bank equipment operation</li>
                      <li>• Quality control and assurance</li>
                      <li>• Data analysis and interpretation</li>
                      <li>• Regulatory compliance knowledge</li>
                      <li>• Emergency response protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Attention to detail</li>
                      <li>• Decision-making under pressure</li>
                      <li>• Strong analytical thinking</li>
                      <li>• Team leadership</li>
                      <li>• Communication skills</li>
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
              <motion.div className="card-elegant p-8" variants={fadeInUp}>
                <h2 className="text-2xl font-semibold text-primary">Frequently Asked Questions</h2>
                <div className="space-y-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the scope of Immunohematology in India?</h3>
                    <p className="text-muted-foreground">High demand in hospitals, blood banks, and diagnostic laboratories. Essential for all major medical procedures requiring transfusion support.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Is night duty common in this specialty?</h3>
                    <p className="text-muted-foreground">Yes, as blood banking services operate 24/7 for emergency transfusions. However, senior positions often have more regular hours.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What are the salary prospects?</h3>
                    <p className="text-muted-foreground">Competitive salaries ranging from ₹40,000-70,000 in government and ₹50,000-1,00,000+ in private sector, with excellent growth potential.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Can I work internationally?</h3>
                    <p className="text-muted-foreground">Yes, with additional certifications. Opportunities exist in Gulf countries, UK, USA, and other developed nations.</p>
                  </div>
                </div>
              </motion.div>
            </motion.section>
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

export default MDImmunohematology;