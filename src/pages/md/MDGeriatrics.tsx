import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Activity, Users, Heart, Shield, TrendingUp, Clock, BookOpen, Home } from 'lucide-react';
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

const MDGeriatrics: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Geriatrics - Elderly Care Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Geriatrics programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for elderly care medicine." />
        <meta name="keywords" content="MD Geriatrics, elderly care, geriatric medicine, NEET PG, medical specialization, aging, senior healthcare" />
        <meta property="og:title" content="MD Geriatrics - Elderly Care Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Geriatrics in India." />
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
                  <Activity className="h-4 w-4" />
                  Elderly Care Specialization
                </div>
                <h1 className="text-4xl font-bold text-foreground">MD Geriatrics</h1>
                <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Focus on medical care for the elderly, enhancing quality of life and managing age-related conditions
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
                    Geriatrics is the medical specialty focused on the health care of elderly people. With India's rapidly aging population, geriatricians play a crucial role in managing complex health conditions unique to older adults.
                  </p>
                  <p>
                    This specialty emphasizes comprehensive care addressing physical, mental, and social aspects of aging, promoting independence and quality of life for senior citizens.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Key Focus Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Multiple chronic condition management</li>
                      <li>• Cognitive assessment and dementia care</li>
                      <li>• Fall prevention and mobility</li>
                      <li>• Medication optimization</li>
                      <li>• Palliative and end-of-life care</li>
                      <li>• Functional independence maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Common Conditions</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Alzheimer's disease and dementia</li>
                      <li>• Osteoporosis and fractures</li>
                      <li>• Cardiovascular diseases</li>
                      <li>• Diabetes and complications</li>
                      <li>• Depression and anxiety in elderly</li>
                      <li>• Polypharmacy management</li>
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
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Hospital Geriatrician</h3>
                    <p className="text-muted-foreground text-sm">Manage elderly patients in hospital settings with comprehensive geriatric assessment</p>
                  </div>
                  <div className="space-y-3">
                    <Home className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Elder Care Specialist</h3>
                    <p className="text-muted-foreground text-sm">Provide specialized care in nursing homes and assisted living facilities</p>
                  </div>
                  <div className="space-y-3">
                    <Heart className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Memory Care Expert</h3>
                    <p className="text-muted-foreground text-sm">Specialize in dementia and Alzheimer's disease management and care</p>
                  </div>
                  <div className="space-y-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Academic Geriatrician</h3>
                    <p className="text-muted-foreground text-sm">Teaching and research in medical colleges and geriatric institutes</p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Palliative Care Specialist</h3>
                    <p className="text-muted-foreground text-sm">Provide comfort care and end-of-life support for elderly patients</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Policy Advisor</h3>
                    <p className="text-muted-foreground text-sm">Develop healthcare policies and programs for aging populations</p>
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
                          <li>• Aging physiology and pathology</li>
                          <li>• Geriatric assessment techniques</li>
                          <li>• Pharmacology in elderly</li>
                          <li>• Nutrition and exercise science</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Clinical Practice</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Comprehensive geriatric care</li>
                          <li>• Cognitive disorders management</li>
                          <li>• Rehabilitation medicine</li>
                          <li>• Palliative care principles</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced geriatric syndromes</li>
                          <li>• Research methodology and dissertation</li>
                          <li>• Healthcare delivery systems</li>
                          <li>• Leadership in geriatric care</li>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Geriatrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AIIMS New Delhi</li>
                      <li>• Postgraduate Institute, Chandigarh</li>
                      <li>• King George's Medical University, Lucknow</li>
                      <li>• Madras Medical College, Chennai</li>
                      <li>• Government Medical College, Nagpur</li>
                      <li>• Medical College, Thiruvananthapuram</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Christian Medical College, Vellore</li>
                      <li>• Kasturba Medical College, Manipal</li>
                      <li>• St. John's Medical College, Bangalore</li>
                      <li>• Apollo Institute of Medical Sciences</li>
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
                      <li>• Comprehensive geriatric assessment</li>
                      <li>• Cognitive testing and evaluation</li>
                      <li>• Medication review and optimization</li>
                      <li>• Functional status assessment</li>
                      <li>• Care coordination and planning</li>
                      <li>• Rehabilitation techniques</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Patience and empathy</li>
                      <li>• Excellent communication skills</li>
                      <li>• Respect for elderly dignity</li>
                      <li>• Holistic thinking approach</li>
                      <li>• Family-centered care mindset</li>
                      <li>• Cultural sensitivity</li>
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
                    <h3 className="font-semibold text-foreground mb-2">What is the scope of Geriatrics in India?</h3>
                    <p className="text-muted-foreground">Rapidly growing field due to India's aging population. Demand for geriatricians is increasing in hospitals, nursing homes, and community health centers.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Is Geriatrics emotionally challenging?</h3>
                    <p className="text-muted-foreground">It can be emotionally demanding but also highly rewarding. Focus on quality of life improvement and dignified care makes it fulfilling.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What are the career advancement opportunities?</h3>
                    <p className="text-muted-foreground">Progress from consultant to department head, medical director of elder care facilities, or policy-making roles in healthcare administration.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Is there good work-life balance in Geriatrics?</h3>
                    <p className="text-muted-foreground">Generally offers better work-life balance compared to acute care specialties, with more predictable schedules and fewer emergency calls.</p>
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

export default MDGeriatrics;