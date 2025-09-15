import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Home, Users, TrendingUp, Shield, Heart, Activity, Globe, BookOpen } from 'lucide-react';
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

const MDCommunityMedicine: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Community Medicine - Public Health Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Community Medicine programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for public health." />
        <meta name="keywords" content="MD Community Medicine, public health, preventive medicine, NEET PG, medical specialization, epidemiology, community health" />
        <meta property="og:title" content="MD Community Medicine - Public Health Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Community Medicine in India." />
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
                  <Home className="h-4 w-4" />
                  Public Health Specialization
                </div>
                <h1 className="text-4xl font-bold text-foreground">MD Community Medicine</h1>
                <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Lead disease prevention and public health improvement through epidemiology and health education
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
                    Community Medicine, also known as Preventive and Social Medicine, focuses on health promotion, disease prevention, and improving health outcomes at the population level. This specialty bridges clinical medicine with public health policy.
                  </p>
                  <p>
                    Community Medicine physicians work to understand health patterns in populations, implement prevention strategies, and develop health policies that benefit entire communities rather than individual patients.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Core Focus Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Epidemiology and disease surveillance</li>
                      <li>• Health promotion and education</li>
                      <li>• Environmental health assessment</li>
                      <li>• Health policy development</li>
                      <li>• Community health programs</li>
                      <li>• Biostatistics and research methods</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Health Challenges Addressed</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Infectious disease control</li>
                      <li>• Non-communicable disease prevention</li>
                      <li>• Maternal and child health</li>
                      <li>• Occupational health hazards</li>
                      <li>• Environmental pollution</li>
                      <li>• Health inequalities</li>
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
                    <h3 className="font-semibold text-foreground">Public Health Officer</h3>
                    <p className="text-muted-foreground text-sm">Lead government health programs and policy implementation at district and state levels</p>
                  </div>
                  <div className="space-y-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Epidemiologist</h3>
                    <p className="text-muted-foreground text-sm">Study disease patterns and outbreak investigations for health authorities</p>
                  </div>
                  <div className="space-y-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Academic Researcher</h3>
                    <p className="text-muted-foreground text-sm">Teaching and research in medical colleges and public health institutes</p>
                  </div>
                  <div className="space-y-3">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">International Health</h3>
                    <p className="text-muted-foreground text-sm">Work with WHO, UNICEF, and other global health organizations</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">NGO Leadership</h3>
                    <p className="text-muted-foreground text-sm">Lead health programs in non-governmental organizations and foundations</p>
                  </div>
                  <div className="space-y-3">
                    <Activity className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Health Administration</h3>
                    <p className="text-muted-foreground text-sm">Administrative roles in hospitals and health system management</p>
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
                          <li>• Epidemiology fundamentals</li>
                          <li>• Biostatistics and research methods</li>
                          <li>• Health education principles</li>
                          <li>• Environmental health basics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Application</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Field work and community surveys</li>
                          <li>• Disease surveillance systems</li>
                          <li>• Health program planning</li>
                          <li>• Data analysis and interpretation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Independent research project</li>
                          <li>• Health policy analysis</li>
                          <li>• Advanced epidemiological methods</li>
                          <li>• Community intervention programs</li>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Community Medicine</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AIIMS New Delhi</li>
                      <li>• JIPMER Puducherry</li>
                      <li>• King George's Medical University, Lucknow</li>
                      <li>• Maulana Azad Medical College, Delhi</li>
                      <li>• Grant Medical College, Mumbai</li>
                      <li>• Medical College, Thiruvananthapuram</li>
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
                      <li>• Statistical analysis and interpretation</li>
                      <li>• Research design and methodology</li>
                      <li>• Data collection and survey techniques</li>
                      <li>• Health program evaluation</li>
                      <li>• Policy analysis and development</li>
                      <li>• Geographic Information Systems (GIS)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Strong communication skills</li>
                      <li>• Leadership and teamwork</li>
                      <li>• Cultural sensitivity</li>
                      <li>• Problem-solving abilities</li>
                      <li>• Social awareness</li>
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
                    <h3 className="font-semibold text-foreground mb-2">What is the scope of Community Medicine in India?</h3>
                    <p className="text-muted-foreground">High demand in government health services, NGOs, international organizations, and academic institutions. Growing importance with health policy focus.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Is field work mandatory in Community Medicine?</h3>
                    <p className="text-muted-foreground">Yes, extensive field work is essential including community surveys, health program implementation, and rural health center postings.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Can I work internationally after MD Community Medicine?</h3>
                    <p className="text-muted-foreground">Yes, opportunities exist with WHO, UNICEF, CDC, and other international health organizations, especially with additional public health qualifications.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the typical career progression?</h3>
                    <p className="text-muted-foreground">Start as Assistant Professor or Health Officer, progress to District Health Officer, State Program Director, or international organization leadership roles.</p>
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

export default MDCommunityMedicine;