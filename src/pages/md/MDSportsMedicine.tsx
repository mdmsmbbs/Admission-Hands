import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Activity, Target, Users, TrendingUp, Heart, Shield, Zap, Trophy } from 'lucide-react';
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

const MDSportsMedicine: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MD Sports Medicine - Athletic Healthcare Specialization | AdmissionHands</title>
        <meta name="description" content="Complete guide to MD Sports Medicine programs in India. Learn about career opportunities, eligibility, top colleges, and admission process for sports medicine." />
        <meta name="keywords" content="MD Sports Medicine, sports injury, athletic performance, NEET PG, medical specialization, sports rehabilitation, exercise medicine" />
        <meta property="og:title" content="MD Sports Medicine - Athletic Healthcare Specialization" />
        <meta property="og:description" content="Comprehensive guide to pursuing MD in Sports Medicine in India." />
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
                  <Activity className="h-4 w-4" />
                  Athletic Healthcare Specialization
                </div>
                <h1 className="text-4xl font-bold text-foreground">MD Sports Medicine</h1>
                <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Prevention, diagnosis, and rehabilitation of sports injuries to promote athletic well-being
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
                    Sports Medicine is a specialized field focusing on the medical care of athletes and active individuals. It encompasses injury prevention, treatment, rehabilitation, and performance enhancement for sports participants at all levels.
                  </p>
                  <p>
                    With India's growing emphasis on sports and fitness, Sports Medicine has become increasingly important for athletic development, injury prevention, and promoting healthy active lifestyles.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Core Practice Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Sports injury assessment and treatment</li>
                      <li>• Exercise prescription and rehabilitation</li>
                      <li>• Performance enhancement strategies</li>
                      <li>• Nutrition and hydration guidance</li>
                      <li>• Concussion management</li>
                      <li>• Biomechanical analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Common Injuries Treated</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Musculoskeletal injuries</li>
                      <li>• Ligament and tendon tears</li>
                      <li>• Stress fractures</li>
                      <li>• Overuse injuries</li>
                      <li>• Concussions and head injuries</li>
                      <li>• Heat-related illnesses</li>
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
                    <Trophy className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Team Physician</h3>
                    <p className="text-muted-foreground text-sm">Medical support for professional sports teams and athletic organizations</p>
                  </div>
                  <div className="space-y-3">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Sports Clinic Specialist</h3>
                    <p className="text-muted-foreground text-sm">Private practice focusing on sports injury treatment and prevention</p>
                  </div>
                  <div className="space-y-3">
                    <Zap className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Performance Consultant</h3>
                    <p className="text-muted-foreground text-sm">Work with elite athletes to optimize performance and prevent injuries</p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Olympic Medical Officer</h3>
                    <p className="text-muted-foreground text-sm">Medical support for national teams and international competitions</p>
                  </div>
                  <div className="space-y-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Research Scientist</h3>
                    <p className="text-muted-foreground text-sm">Conduct research on sports performance, injury prevention, and rehabilitation</p>
                  </div>
                  <div className="space-y-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Sports Administrator</h3>
                    <p className="text-muted-foreground text-sm">Leadership roles in sports academies and fitness organizations</p>
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
                          <li>• Exercise physiology and biomechanics</li>
                          <li>• Sports nutrition fundamentals</li>
                          <li>• Anatomy and kinesiology</li>
                          <li>• Basic injury assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Second Year - Clinical Practice</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Sports injury diagnosis and treatment</li>
                          <li>• Rehabilitation techniques</li>
                          <li>• Performance assessment methods</li>
                          <li>• Field experience with sports teams</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Third Year - Specialization</h4>
                        <ul className="mt-2 space-y-1 text-muted-foreground ml-4">
                          <li>• Advanced sports medicine procedures</li>
                          <li>• Research project and dissertation</li>
                          <li>• Sports psychology integration</li>
                          <li>• Elite athlete management</li>
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
                <h2 className="text-2xl font-semibold text-primary">Top Indian Colleges for MD Sports Medicine</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Government Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lakshmibai National Institute of Physical Education, Gwalior</li>
                      <li>• Sports Authority of India, Bangalore</li>
                      <li>• AIIMS New Delhi</li>
                      <li>• Postgraduate Institute, Chandigarh</li>
                      <li>• Government Medical College, Nagpur</li>
                      <li>• NIMHANS Bangalore</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Private Colleges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Manipal Academy of Higher Education</li>
                      <li>• Christian Medical College, Vellore</li>
                      <li>• Apollo Institute of Medical Sciences</li>
                      <li>• Amrita Institute of Medical Sciences</li>
                      <li>• JSS Medical College, Mysore</li>
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
                      <li>• Injury assessment and diagnosis</li>
                      <li>• Rehabilitation program design</li>
                      <li>• Performance testing and analysis</li>
                      <li>• Exercise prescription</li>
                      <li>• Biomechanical evaluation</li>
                      <li>• Emergency medical response</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Personal Qualities</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Passion for sports and fitness</li>
                      <li>• Strong communication skills</li>
                      <li>• Team collaboration abilities</li>
                      <li>• Quick decision-making</li>
                      <li>• Motivational leadership</li>
                      <li>• Physical fitness awareness</li>
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
                    <h3 className="font-semibold text-foreground mb-2">What is the scope of Sports Medicine in India?</h3>
                    <p className="text-muted-foreground">Growing rapidly with increased focus on sports excellence, fitness awareness, and professional sports leagues. Opportunities in both government and private sectors.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Do I need to be an athlete to pursue Sports Medicine?</h3>
                    <p className="text-muted-foreground">While athletic experience is helpful, it's not mandatory. Understanding of sports, exercise, and physical fitness is more important than personal athletic achievement.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What are the earning potential and benefits?</h3>
                    <p className="text-muted-foreground">Competitive salaries with opportunities for consultation fees, team contracts, and private practice income. Travel opportunities with sports teams are additional benefits.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Can I work internationally in Sports Medicine?</h3>
                    <p className="text-muted-foreground">Yes, excellent opportunities exist globally with international sports organizations, professional teams, and sports academies worldwide.</p>
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

export default MDSportsMedicine;