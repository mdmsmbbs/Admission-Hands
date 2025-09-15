import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, GraduationCap, Building, Award, TrendingUp, CheckCircle, HelpCircle, Stethoscope, Target, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import MDSidebar from '@/components/md/MDSidebar';
import CTA from '@/components/CTA';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MDGeneralMedicine: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MD General Medicine - Internal Medicine Specialization | AdmissionHands"
        description="Comprehensive guide to MD General Medicine programs in India. Learn about career opportunities, eligibility, top colleges, and admission process."
        keywords="MD General Medicine, Internal Medicine, NEET PG, medical specialization, MBBS, postgraduate medicine"
        ogTitle="MD General Medicine - Internal Medicine Specialization"
        ogDescription="Complete guide to pursuing MD in General Medicine in India."
      />
      
      <main className="container-custom py-8 pt-32">
        <div className="flex gap-8">
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
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    MD General Medicine
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Master comprehensive patient care and clinical excellence
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MD General Medicine, also known as Internal Medicine, is the foundation of clinical practice focusing on comprehensive adult patient care. This specialty covers the prevention, diagnosis, and treatment of adult diseases, making it one of the most versatile and essential medical specializations.
              </p>
            </motion.div>

            {/* Specialty Overview */}
            <motion.section
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" variants={fadeInUp}>
                <Stethoscope className="h-8 w-8 text-primary" />
                Specialty Overview
              </motion.h2>
              <motion.div className="grid md:grid-cols-2 gap-6">
                <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Focus Areas</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Cardiovascular diseases</li>
                    <li>• Respiratory disorders</li>
                    <li>• Endocrine conditions</li>
                    <li>• Gastrointestinal diseases</li>
                    <li>• Infectious diseases</li>
                  </ul>
                </motion.div>
                <motion.div className="bg-card rounded-xl p-6 border border-border" variants={fadeInUp}>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Clinical Competencies</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Patient assessment and diagnosis</li>
                    <li>• Treatment planning and management</li>
                    <li>• Critical care medicine</li>
                    <li>• Emergency medicine skills</li>
                    <li>• Research and evidence-based practice</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* Career Opportunities */}
            <motion.section
              className="mb-12 card-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold text-primary mb-6">Career Opportunities & Healthcare Roles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Clinical Practice</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Consultant Physician in hospitals</li>
                    <li>• Private practice as Internal Medicine specialist</li>
                    <li>• Emergency medicine physician</li>
                    <li>• ICU/Critical care specialist</li>
                    <li>• Hospitalist in tertiary care centers</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Academic & Research</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Medical college faculty</li>
                    <li>• Clinical research coordinator</li>
                    <li>• Medical writing and journalism</li>
                    <li>• Healthcare administration</li>
                    <li>• Pharmaceutical industry roles</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Eligibility & Course Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.section
                className="card-elegant p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Eligibility Criteria</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>MBBS degree from recognized medical college</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>Completed mandatory rotating internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>Valid NEET PG score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>Registration with Medical Council of India/State</span>
                  </li>
                </ul>
              </motion.section>

              <motion.section
                className="card-elegant p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Course Structure</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground">Duration: 3 Years</h3>
                    <p className="text-sm">Intensive clinical and theoretical training</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Year 1-2:</h4>
                    <p className="text-sm">Core clinical rotations, ward duties, OPD exposure</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Year 3:</h4>
                    <p className="text-sm">Advanced subspecialty rotations, research project, thesis</p>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Top Colleges */}
            <motion.section
              className="mb-12 card-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-6">
                <Building className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD General Medicine</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AIIMS, New Delhi</li>
                    <li>• PGIMER, Chandigarh</li>
                    <li>• JIPMER, Puducherry</li>
                    <li>• King George's Medical University, Lucknow</li>
                    <li>• MAMC, New Delhi</li>
                    <li>• Grant Medical College, Mumbai</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Christian Medical College, Vellore</li>
                    <li>• St. John's Medical College, Bangalore</li>
                    <li>• Kasturba Medical College, Manipal</li>
                    <li>• JSS Medical College, Mysore</li>
                    <li>• Amrita Institute, Kochi</li>
                    <li>• Apollo Institute, Hyderabad</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Super-specializations */}
            <motion.section
              className="mb-12 card-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">Super-specialization Options</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                After completing MD General Medicine, you can pursue DM (Doctorate of Medicine) in various super-specialties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Cardiology', 'Gastroenterology', 'Nephrology', 'Neurology', 
                  'Endocrinology', 'Rheumatology', 'Oncology', 'Infectious Diseases',
                  'Critical Care Medicine'
                ].map((specialty, index) => (
                  <div key={index} className="bg-muted/50 p-3 rounded-lg text-center">
                    <span className="font-medium text-foreground">{specialty}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Emerging Trends */}
            <motion.section
              className="mb-12 card-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">Emerging Trends</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground">Telemedicine & Digital Health</h3>
                  <p>Integration of AI-powered diagnostic tools and remote patient monitoring systems.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Precision Medicine</h3>
                  <p>Personalized treatment approaches based on genetic profiling and biomarkers.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Geriatric Care Focus</h3>
                  <p>Specialized care for aging population with multiple comorbidities.</p>
                </div>
              </div>
            </motion.section>

            {/* FAQs */}
            <motion.section
              className="mb-12 card-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What is the scope after MD General Medicine?</h3>
                  <p className="text-muted-foreground">MD General Medicine offers broad career opportunities including clinical practice, teaching, research, and further super-specialization. It's one of the most versatile medical specialties.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Is MD General Medicine difficult to clear in NEET PG?</h3>
                  <p className="text-muted-foreground">MD General Medicine is moderately competitive with good seat availability across India. A rank within top 20,000-25,000 in NEET PG typically secures admission in government colleges.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What's the difference between MD General Medicine and other MD branches?</h3>
                  <p className="text-muted-foreground">MD General Medicine provides comprehensive internal medicine training, while other branches like MD Pediatrics or MD Psychiatry focus on specific patient populations or organ systems.</p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <MDSidebar />
          </div>
        </div>
      </main>

      <CTA />
    </div>
  );
};

export default MDGeneralMedicine;