import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { CircleDot, Sparkles, Shield, Users, TrendingUp, Heart, Activity, BookOpen } from 'lucide-react';
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

const MDDermatology: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Dermatology - Skin Care Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Dermatology programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for dermatology." />
        <meta name="keywords" content="MD Dermatology, skin care, dermatological conditions, NEET PG, medical specialization, cosmetic dermatology, skin diseases" />
        <meta property="og:title" content="MD Dermatology - Skin Care Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Dermatology in India." />
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
                    <CircleDot className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      MD Dermatology
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Specialized Skin and Cosmetic Care
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium">
                  <CircleDot className="h-4 w-4" />
                  Skin Care Specialization
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
                    Dermatology is the medical specialty dealing with the skin, hair, nails, and mucous membranes. It encompasses both medical and surgical aspects of skin care, including cosmetic procedures and dermatologic surgery.
                  </p>
                  <p>
                    With increasing awareness about skin health and cosmetic concerns, dermatology has become one of the most sought-after medical specialties, offering excellent career prospects and patient satisfaction.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Medical Dermatology</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Acne and acne scarring</li>
                      <li>• Eczema and psoriasis</li>
                      <li>• Skin infections and allergies</li>
                      <li>• Autoimmune skin disorders</li>
                      <li>• Skin cancer detection and treatment</li>
                      <li>• Hair and nail disorders</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Cosmetic Dermatology</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Anti-aging treatments</li>
                      <li>• Laser therapy and procedures</li>
                      <li>• Chemical peels and microdermabrasion</li>
                      <li>• Botox and dermal fillers</li>
                      <li>• Scar revision and removal</li>
                      <li>• Skin rejuvenation techniques</li>
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
                    <Sparkles className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Cosmetic Dermatologist</h3>
                    <p className="text-muted-foreground text-sm">Specialize in aesthetic procedures and cosmetic skin treatments</p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Medical Dermatologist</h3>
                    <p className="text-muted-foreground text-sm">Focus on treating skin diseases and medical dermatological conditions</p>
                  </div>
                  <div className="space-y-3">
                    <Activity className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Dermatopathologist</h3>
                    <p className="text-muted-foreground text-sm">Specialize in microscopic examination of skin tissue samples</p>
                  </div>
                  <div className="space-y-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Academic Dermatologist</h3>
                    <p className="text-muted-foreground text-sm">Teaching and research in medical colleges and dermatology institutes</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Pediatric Dermatologist</h3>
                    <p className="text-muted-foreground text-sm">Specialize in skin conditions affecting children and adolescents</p>
                  </div>
                  <div className="space-y-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Clinic Owner</h3>
                    <p className="text-muted-foreground text-sm">Establish and manage specialized dermatology and cosmetic clinics</p>
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
                          <li>• Basic dermatology and skin anatomy</li>
                          <li>• Dermatopathology fundamentals</li>
                          <li>• Common skin conditions</li>
                          <li>• Basic diagnostic procedures</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Clinical Practice</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced dermatological procedures</li>
                          <li>• Cosmetic dermatology techniques</li>
                          <li>• Laser therapy and treatments</li>
                          <li>• Dermatological surgery</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced cosmetic procedures</li>
                          <li>• Research project and dissertation</li>
                          <li>• Complex case management</li>
                          <li>• Practice management skills</li>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Dermatology</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AIIMS New Delhi</li>
                      <li>• Postgraduate Institute, Chandigarh</li>
                      <li>• King George's Medical University, Lucknow</li>
                      <li>• Madras Medical College, Chennai</li>
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
                      <li>• Visual diagnosis and pattern recognition</li>
                      <li>• Dermatological procedures and surgery</li>
                      <li>• Laser operation and cosmetic techniques</li>
                      <li>• Microscopic examination skills</li>
                      <li>• Patient counseling and education</li>
                      <li>• Aesthetic sense and artistic ability</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Attention to detail</li>
                      <li>• Patient and empathetic nature</li>
                      <li>• Good communication skills</li>
                      <li>• Steady hands for procedures</li>
                      <li>• Continuous learning mindset</li>
                      <li>• Professional presentation</li>
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
                    <h3 className="font-semibold text-foreground mb-2">Is Dermatology very competitive to get into?</h3>
                    <p className="text-muted-foreground">Yes, Dermatology is one of the most competitive medical specialties due to high demand, good work-life balance, and lucrative career prospects.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the earning potential in Dermatology?</h3>
                    <p className="text-muted-foreground">Excellent earning potential, especially in cosmetic dermatology. Private practice can be very lucrative with proper location and reputation.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How important is cosmetic dermatology today?</h3>
                    <p className="text-muted-foreground">Very important and growing rapidly. Increasing aesthetic awareness and disposable income drive demand for cosmetic procedures.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What is the work-life balance like?</h3>
                    <p className="text-muted-foreground">Generally excellent work-life balance with fewer emergencies compared to other specialties. Most procedures are elective and scheduled.</p>
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

export default MDDermatology;