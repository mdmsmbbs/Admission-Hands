import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Clock, GraduationCap, Building, Award, TrendingUp, CheckCircle, HelpCircle, Stethoscope, Target, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import MDSidebar from '@/components/md/MDSidebar';
import CTA from '@/components/CTA';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MDPediatrics: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MD Pediatrics - Child Healthcare Specialization | AdmissionHands"
        description="Complete guide to MD Pediatrics programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for child healthcare."
        keywords="MD Pediatrics, child healthcare, pediatric medicine, NEET PG, medical specialization, children's health"
        ogTitle="MD Pediatrics - Child Healthcare Specialization"
        ogDescription="Comprehensive guide to pursuing MD in Pediatrics in India."
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
                  <Baby className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    MD Pediatrics
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Dedicated to children's health and development
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MD Pediatrics is dedicated to the comprehensive healthcare of infants, children, and adolescents. This specialization focuses on the physical, mental, and social health of children from birth through young adulthood, requiring specialized knowledge as children have unique physiological and developmental needs.
              </p>
            </motion.div>

            {/* Overview Section */}
            <motion.section
              className="mb-12 card-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold text-primary mb-6">Branch Overview & Significance</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pediatrics encompasses the care of healthy children through preventive health services and the treatment of children with acute and chronic diseases. It requires specialized knowledge as children are not simply "small adults" but have unique physiological, psychological, and social needs.
                </p>
                <p>
                  Pediatricians play a crucial role in child development, vaccination programs, nutrition counseling, and family education. The field has evolved to include subspecialties addressing specific aspects of child health.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-foreground mb-2">Key Focus Areas:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Neonatal care and NICU management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Childhood infectious diseases</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Growth and developmental disorders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Pediatric emergency care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Immunization and preventive care</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                    <li>• Consultant Pediatrician in hospitals</li>
                    <li>• Private pediatric practice</li>
                    <li>• NICU specialist</li>
                    <li>• Pediatric emergency physician</li>
                    <li>• School health physician</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Specialized Roles</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Child development specialist</li>
                    <li>• Pediatric researcher</li>
                    <li>• Public health pediatrician</li>
                    <li>• Medical college faculty</li>
                    <li>• Healthcare administration</li>
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
                    <span>MBBS degree from recognized institution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>Completed mandatory internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>Qualified NEET PG examination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span>Medical council registration</span>
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
                    <p className="text-sm">Comprehensive pediatric training program</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Clinical Rotations:</h4>
                    <p className="text-sm">Pediatric wards, NICU, PICU, OPD, emergency</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Research Component:</h4>
                    <p className="text-sm">Dissertation on pediatric topic</p>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Pediatrics</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AIIMS, New Delhi</li>
                    <li>• PGIMER, Chandigarh</li>
                    <li>• JIPMER, Puducherry</li>
                    <li>• KGMU, Lucknow</li>
                    <li>• MAMC, New Delhi</li>
                    <li>• LTMMC, Mumbai</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• CMC, Vellore</li>
                    <li>• St. John's, Bangalore</li>
                    <li>• KMC, Manipal</li>
                    <li>• Amrita Institute, Kochi</li>
                    <li>• DMIMS, Wardha</li>
                    <li>• Bharati Vidyapeeth, Pune</li>
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
                <h2 className="text-2xl font-semibold text-primary">Pediatric Super-specializations</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                After MD Pediatrics, you can pursue DM/MCh in various pediatric super-specialties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Pediatric Cardiology', 'Neonatology', 'Pediatric Neurology', 
                  'Pediatric Oncology', 'Pediatric Gastroenterology', 'Pediatric Nephrology',
                  'Pediatric Intensive Care', 'Pediatric Endocrinology', 'Pediatric Surgery'
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
                <h2 className="text-2xl font-semibold text-primary">Emerging Trends in Pediatrics</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground">Telemedicine in Pediatrics</h3>
                  <p>Remote consultations and monitoring, especially beneficial for follow-up care and rural areas.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Precision Medicine</h3>
                  <p>Genetic testing and personalized treatment approaches for pediatric conditions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Mental Health Focus</h3>
                  <p>Increasing emphasis on childhood mental health and developmental disorders.</p>
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
                  <h3 className="font-semibold text-foreground mb-2">What age group does MD Pediatrics cover?</h3>
                  <p className="text-muted-foreground">MD Pediatrics covers patients from birth to 18 years, including neonates, infants, children, and adolescents.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Is MD Pediatrics a good career choice?</h3>
                  <p className="text-muted-foreground">Yes, MD Pediatrics offers excellent career prospects with high demand in both government and private sectors, good earning potential, and job satisfaction.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What skills are important for a pediatrician?</h3>
                  <p className="text-muted-foreground">Communication skills, patience, empathy, ability to work with children and families, clinical expertise, and continuous learning aptitude are essential.</p>
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

export default MDPediatrics;