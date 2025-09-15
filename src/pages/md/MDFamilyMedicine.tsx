import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Home, Heart, Users, Shield, TrendingUp, Activity, BookOpen, Globe } from 'lucide-react';
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

const MDFamilyMedicine: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Family Medicine - Comprehensive Healthcare Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Family Medicine programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for family medicine." />
        <meta name="keywords" content="MD Family Medicine, family healthcare, primary care, NEET PG, medical specialization, comprehensive care, family physician" />
        <meta property="og:title" content="MD Family Medicine - Comprehensive Healthcare Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Family Medicine in India." />
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
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Family Medicine
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Comprehensive Family-Centered Healthcare
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium">
                  <Home className="h-4 w-4" />
                  Comprehensive Healthcare Specialization
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
                    Family Medicine is a comprehensive primary care specialty that provides continuous, coordinated healthcare for individuals and families across all ages, genders, diseases, and organ systems. It emphasizes the doctor-patient relationship and community-based care.
                  </p>
                  <p>
                    Family physicians serve as the first point of contact in the healthcare system, providing preventive care, managing chronic conditions, and coordinating specialist referrals when needed.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Core Practice Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Preventive care and health screening</li>
                      <li>• Chronic disease management</li>
                      <li>• Women's health and family planning</li>
                      <li>• Pediatric and adolescent care</li>
                      <li>• Geriatric care and aging</li>
                      <li>• Mental health and counseling</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Age Group Coverage</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Newborn and infant care</li>
                      <li>• Childhood development and vaccination</li>
                      <li>• Adolescent health and guidance</li>
                      <li>• Adult health maintenance</li>
                      <li>• Elderly care and support</li>
                      <li>• End-of-life care coordination</li>
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
                    <Heart className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Primary Care Physician</h3>
                    <p className="text-muted-foreground text-sm">Provide comprehensive primary healthcare in clinics and community health centers</p>
                  </div>
                  <div className="space-y-3">
                    <Home className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Family Practice Owner</h3>
                    <p className="text-muted-foreground text-sm">Establish and manage private family medicine practice</p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Hospital Medicine</h3>
                    <p className="text-muted-foreground text-sm">Work as hospitalist managing admitted patients in hospital settings</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Community Health Leader</h3>
                    <p className="text-muted-foreground text-sm">Lead community health programs and public health initiatives</p>
                  </div>
                  <div className="space-y-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Academic Family Medicine</h3>
                    <p className="text-muted-foreground text-sm">Teaching and research in medical colleges and family medicine programs</p>
                  </div>
                  <div className="space-y-3">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">International Health</h3>
                    <p className="text-muted-foreground text-sm">Work with global health organizations and underserved populations</p>
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
                          <li>• Primary care principles</li>
                          <li>• Family dynamics and communication</li>
                          <li>• Preventive medicine fundamentals</li>
                          <li>• Basic clinical skills across age groups</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Clinical Practice</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Comprehensive family care</li>
                          <li>• Chronic disease management</li>
                          <li>• Community medicine integration</li>
                          <li>• Behavioral health and counseling</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced family medicine procedures</li>
                          <li>• Research project and dissertation</li>
                          <li>• Practice management and leadership</li>
                          <li>• Quality improvement initiatives</li>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Family Medicine</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AIIMS New Delhi</li>
                      <li>• Postgraduate Institute, Chandigarh</li>
                      <li>• King George's Medical University, Lucknow</li>
                      <li>• Government Medical College, Nagpur</li>
                      <li>• Medical College, Thiruvananthapuram</li>
                      <li>• JIPMER Puducherry</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Christian Medical College, Vellore</li>
                      <li>• Kasturba Medical College, Manipal</li>
                      <li>• St. John's Medical College, Bangalore</li>
                      <li>• JSS Medical College, Mysore</li>
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
                      <li>• Comprehensive health assessment</li>
                      <li>• Preventive care planning</li>
                      <li>• Chronic disease management</li>
                      <li>• Health promotion and education</li>
                      <li>• Basic procedural skills</li>
                      <li>• Care coordination abilities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Excellent communication skills</li>
                      <li>• Empathy and compassion</li>
                      <li>• Long-term relationship building</li>
                      <li>• Cultural sensitivity</li>
                      <li>• Collaborative teamwork</li>
                      <li>• Lifelong learning commitment</li>
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
                    <h3 className="font-semibold text-foreground mb-2">What is the scope of Family Medicine in India?</h3>
                    <p className="text-muted-foreground">Growing rapidly with healthcare system reforms emphasizing primary care. Excellent opportunities in both urban and rural settings.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How does Family Medicine differ from General Medicine?</h3>
                    <p className="text-muted-foreground">Family Medicine focuses on comprehensive care across all ages and prevention, while General Medicine primarily deals with adult internal medicine and acute care.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the work-life balance like?</h3>
                    <p className="text-muted-foreground">Generally good work-life balance with more predictable hours compared to hospital-based specialties. Flexibility to choose practice setting and schedule.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Are there opportunities for subspecialization?</h3>
                    <p className="text-muted-foreground">Yes, fellowship opportunities exist in sports medicine, geriatrics, addiction medicine, palliative care, and other focused areas within family medicine.</p>
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

export default MDFamilyMedicine;