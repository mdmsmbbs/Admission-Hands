import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Zap, Atom, Microscope, Shield, TrendingUp, Activity, Users, Heart } from 'lucide-react';
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

const MDNuclearMedicine: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Nuclear Medicine - Radioisotope Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Nuclear Medicine programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for nuclear medicine." />
        <meta name="keywords" content="MD Nuclear Medicine, radioisotopes, molecular imaging, NEET PG, medical specialization, nuclear imaging, PET scan" />
        <meta property="og:title" content="MD Nuclear Medicine - Radioisotope Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Nuclear Medicine in India." />
      </Helmet>

      <main className="container-custom py-8 pt-32">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <motion.section 
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 mb-12 border border-border/50"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="absolute inset-0 bg-grid-small opacity-30" />
              <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Nuclear Medicine
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Advanced Imaging and Therapeutic Solutions
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium">
                  <Zap className="h-4 w-4" />
                  Nuclear Medicine Specialization
                </div>
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
                    Nuclear Medicine is a unique medical specialty that uses radioactive materials for both diagnosis and treatment of diseases. It provides functional imaging that shows how organs and tissues are working, not just their structure.
                  </p>
                  <p>
                    This cutting-edge field combines radiology, internal medicine, and physics to provide personalized medicine approaches with molecular imaging and targeted radiotherapy.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Diagnostic Applications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• PET/CT and SPECT imaging</li>
                      <li>• Cardiac perfusion studies</li>
                      <li>• Bone scintigraphy</li>
                      <li>• Thyroid and parathyroid imaging</li>
                      <li>• Brain and neurological studies</li>
                      <li>• Tumor detection and staging</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Therapeutic Applications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Radioactive iodine therapy</li>
                      <li>• Peptide receptor radionuclide therapy</li>
                      <li>• Bone pain palliation</li>
                      <li>• Selective internal radiation therapy</li>
                      <li>• Lymphoma treatment</li>
                      <li>• Neuroendocrine tumor therapy</li>
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
                    <Atom className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Nuclear Medicine Physician</h3>
                    <p className="text-muted-foreground text-sm">Perform diagnostic imaging and therapeutic procedures in hospitals and imaging centers</p>
                  </div>
                  <div className="space-y-3">
                    <Microscope className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Research Scientist</h3>
                    <p className="text-muted-foreground text-sm">Develop new radiopharmaceuticals and imaging techniques in research institutions</p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Radiation Safety Officer</h3>
                    <p className="text-muted-foreground text-sm">Ensure compliance with radiation safety regulations and protocols</p>
                  </div>
                  <div className="space-y-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Academic Leader</h3>
                    <p className="text-muted-foreground text-sm">Teaching and training in medical colleges and nuclear medicine programs</p>
                  </div>
                  <div className="space-y-3">
                    <Activity className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Clinical Consultant</h3>
                    <p className="text-muted-foreground text-sm">Provide specialized consultation for complex nuclear medicine cases</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Department Director</h3>
                    <p className="text-muted-foreground text-sm">Lead nuclear medicine departments in major medical centers</p>
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
                          <li>• Nuclear physics and radiochemistry</li>
                          <li>• Radiation biology and safety</li>
                          <li>• Basic imaging techniques</li>
                          <li>• Radiopharmaceutical preparation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Clinical Training</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Diagnostic nuclear medicine procedures</li>
                          <li>• PET/CT and SPECT imaging</li>
                          <li>• Therapeutic nuclear medicine</li>
                          <li>• Image interpretation and reporting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced therapeutic procedures</li>
                          <li>• Research project and dissertation</li>
                          <li>• Quality control and management</li>
                          <li>• Emerging technologies training</li>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Nuclear Medicine</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AIIMS New Delhi</li>
                      <li>• Postgraduate Institute, Chandigarh</li>
                      <li>• Sanjay Gandhi Postgraduate Institute, Lucknow</li>
                      <li>• King George's Medical University, Lucknow</li>
                      <li>• NIMHANS Bangalore</li>
                      <li>• Tata Memorial Centre, Mumbai</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Christian Medical College, Vellore</li>
                      <li>• Apollo Hospitals Educational Trust</li>
                      <li>• Manipal Academy of Higher Education</li>
                      <li>• Amrita Institute of Medical Sciences</li>
                      <li>• Fortis Healthcare Academy</li>
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
                      <li>• Understanding of nuclear physics</li>
                      <li>• Image interpretation and analysis</li>
                      <li>• Radiation safety protocols</li>
                      <li>• Equipment operation and maintenance</li>
                      <li>• Radiopharmaceutical knowledge</li>
                      <li>• Quality control procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Strong analytical thinking</li>
                      <li>• Attention to detail</li>
                      <li>• Patient communication skills</li>
                      <li>• Team collaboration</li>
                      <li>• Continuous learning mindset</li>
                      <li>• Safety consciousness</li>
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
                    <h3 className="font-semibold text-foreground mb-2">Is radiation exposure a concern in Nuclear Medicine?</h3>
                    <p className="text-muted-foreground">With proper safety protocols and ALARA principles, radiation exposure is well within safe limits. Regular monitoring ensures practitioner safety.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the scope of Nuclear Medicine in India?</h3>
                    <p className="text-muted-foreground">Growing field with increasing demand for PET scans, therapeutic procedures, and molecular imaging. Limited specialists create excellent career prospects.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Can women pursue this specialty?</h3>
                    <p className="text-muted-foreground">Yes, with proper radiation safety measures. Pregnancy planning requires temporary assignment modifications, but career progression remains unaffected.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What are the salary prospects?</h3>
                    <p className="text-muted-foreground">Excellent earning potential with government positions starting at ₹50,000-80,000 and private sector offering ₹80,000-1,50,000+ monthly.</p>
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

export default MDNuclearMedicine;