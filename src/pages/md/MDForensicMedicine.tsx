import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Search, Shield, Gavel, FileSearch, Heart, Users, TrendingUp, Brain } from 'lucide-react';
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

const MDForensicMedicine: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Forensic Medicine - Legal Medicine Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Forensic Medicine programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for legal medicine." />
        <meta name="keywords" content="MD Forensic Medicine, legal medicine, forensic pathology, NEET PG, medical specialization, autopsy, medico-legal" />
        <meta property="og:title" content="MD Forensic Medicine - Legal Medicine Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Forensic Medicine in India." />
      </Helmet>

      <main className="container-custom py-8 pt-32">
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
                  <Search className="h-4 w-4" />
                  Legal Medicine Specialization
                </div>
                <h1 className="text-4xl font-bold text-foreground">MD Forensic Medicine</h1>
                <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Bridge medical knowledge with legal investigations through forensic pathology and medico-legal analysis
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
                    Forensic Medicine is the application of medical knowledge to legal problems and the administration of justice. This specialty involves investigating deaths, injuries, and other medical issues that have legal implications.
                  </p>
                  <p>
                    Forensic Medicine physicians work closely with law enforcement, courts, and legal professionals to provide medical evidence in criminal and civil cases. The field encompasses autopsy procedures, toxicology, injury interpretation, and expert testimony.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Key Areas of Practice</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Forensic pathology and autopsy</li>
                      <li>• Medico-legal examinations</li>
                      <li>• Toxicology and poison analysis</li>
                      <li>• Age and identity determination</li>
                      <li>• Sexual assault examinations</li>
                      <li>• DNA profiling and genetics</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Common Cases</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Unnatural deaths investigation</li>
                      <li>• Criminal injury assessment</li>
                      <li>• Road traffic accidents</li>
                      <li>• Occupational injuries</li>
                      <li>• Medical negligence cases</li>
                      <li>• Mass disaster victim identification</li>
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
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Government Forensic Expert</h3>
                    <p className="text-muted-foreground text-sm">Work with police departments and judicial systems as official forensic medical examiner</p>
                  </div>
                  <div className="space-y-3">
                    <Gavel className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Expert Witness</h3>
                    <p className="text-muted-foreground text-sm">Provide expert medical testimony in courts for criminal and civil litigation</p>
                  </div>
                  <div className="space-y-3">
                    <FileSearch className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Private Consultant</h3>
                    <p className="text-muted-foreground text-sm">Independent forensic consultation for legal firms and insurance companies</p>
                  </div>
                  <div className="space-y-3">
                    <Brain className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Academic Researcher</h3>
                    <p className="text-muted-foreground text-sm">Teaching and research in medical colleges and forensic science institutes</p>
                  </div>
                  <div className="space-y-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Administration</h3>
                    <p className="text-muted-foreground text-sm">Leading forensic laboratories and medico-legal departments</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">International Organizations</h3>
                    <p className="text-muted-foreground text-sm">Work with UN, WHO, and international forensic teams</p>
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
                          <li>• Basic forensic medicine principles</li>
                          <li>• Anatomy and pathology review</li>
                          <li>• Legal procedures and documentation</li>
                          <li>• Autopsy techniques fundamentals</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Clinical Practice</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced autopsy procedures</li>
                          <li>• Toxicology and laboratory methods</li>
                          <li>• Clinical forensic examinations</li>
                          <li>• Research methodology</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Independent case handling</li>
                          <li>• Court appearance training</li>
                          <li>• Dissertation completion</li>
                          <li>• Advanced forensic techniques</li>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Forensic Medicine</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AIIMS New Delhi</li>
                      <li>• AFMC Pune</li>
                      <li>• King George's Medical University, Lucknow</li>
                      <li>• Government Medical College, Nagpur</li>
                      <li>• Madras Medical College, Chennai</li>
                      <li>• Medical College, Thiruvananthapuram</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Kasturba Medical College, Manipal</li>
                      <li>• Christian Medical College, Vellore</li>
                      <li>• St. John's Medical College, Bangalore</li>
                      <li>• JSS Medical College, Mysore</li>
                      <li>• Rajiv Gandhi University of Health Sciences</li>
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
                      <li>• Detailed autopsy procedures</li>
                      <li>• Laboratory investigation skills</li>
                      <li>• Photography and documentation</li>
                      <li>• Report writing and presentation</li>
                      <li>• Legal knowledge and procedures</li>
                      <li>• Toxicology interpretation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Emotional resilience</li>
                      <li>• Attention to detail</li>
                      <li>• Objectivity and impartiality</li>
                      <li>• Strong communication skills</li>
                      <li>• Ethical integrity</li>
                      <li>• Analytical thinking</li>
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
                    <h3 className="font-semibold text-foreground mb-2">Is MD Forensic Medicine a good career choice?</h3>
                    <p className="text-muted-foreground">Yes, it offers unique career opportunities in government service, legal consulting, and academic research with good job security and social importance.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the work environment like?</h3>
                    <p className="text-muted-foreground">Work involves laboratories, autopsy rooms, courts, and crime scenes. It requires handling potentially disturbing cases with professional detachment.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Are there opportunities abroad?</h3>
                    <p className="text-muted-foreground">Yes, with additional certification, forensic medicine specialists can work internationally with UN missions, foreign governments, and international forensic organizations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the typical salary range?</h3>
                    <p className="text-muted-foreground">Government forensic experts earn ₹50,000-80,000 monthly, while private consultants can earn significantly more depending on cases and reputation.</p>
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

export default MDForensicMedicine;