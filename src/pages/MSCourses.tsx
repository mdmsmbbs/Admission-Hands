import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Bone, Eye, HeadphonesIcon, Baby, Heart, Brain, Users, CircleDot, Activity, Target, Zap, GraduationCap, Stethoscope, Dna } from "lucide-react";
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';
import MSSidebar from '@/components/ms/MSSidebar';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MSCourses: React.FC = () => {
  const msSpecializations = [
    {
      id: 'general-surgery',
      title: "MS General Surgery",
      description: "The backbone of surgical disciplines, MS General Surgery equips surgeons with skills to perform a wide variety of surgeries involving the abdomen, soft tissues, and emergency trauma care.",
      icon: Scissors,
      path: '/pg-medical/ms-courses/general-surgery',
      color: 'text-red-500'
    },
    {
      id: 'orthopedics',
      title: "MS Orthopedics",
      description: "Dedicated to disorders and injuries of the musculoskeletal system including bones, joints, ligaments, and muscles. Orthopaedic surgeons restore mobility and function.",
      icon: Bone,
      path: '/pg-medical/ms-courses/orthopedics',
      color: 'text-blue-500'
    },
    {
      id: 'ophthalmology',
      title: "MS Ophthalmology",
      description: "Specializes in eye diseases, vision correction surgeries, and management of disorders affecting the visual system. Ophthalmologists perform cataract and retinal surgeries.",
      icon: Eye,
      path: '/pg-medical/ms-courses/ophthalmology',
      color: 'text-green-500'
    },
    {
      id: 'ent',
      title: "MS ENT (Otolaryngology)",
      description: "Covers diseases related to ear, nose, and throat including hearing loss, sinus disorders, and voice problems. This branch blends medical and surgical treatments.",
      icon: HeadphonesIcon,
      path: '/pg-medical/ms-courses/ent',
      color: 'text-purple-500'
    },
    {
      id: 'obstetrics-gynecology',
      title: "MS Obstetrics & Gynecology",
      description: "Focuses on women's reproductive health, pregnancy, childbirth, and disorders of the female reproductive system. It balances surgical interventions with maternal care.",
      icon: Baby,
      path: '/pg-medical/ms-courses/obstetrics-gynecology',
      color: 'text-pink-500'
    },
    {
      id: 'cardiothoracic-surgery',
      title: "MS Cardiothoracic Surgery",
      description: "Concentrates on surgical care of the heart, lungs, esophagus, and other organs in the thoracic cavity. This includes coronary artery bypass and valve replacements.",
      icon: Heart,
      path: '/pg-medical/ms-courses/cardiothoracic-surgery',
      color: 'text-red-600'
    },
    {
      id: 'neurosurgery',
      title: "MS Neurosurgery",
      description: "Specialized in surgical treatment of brain, spinal cord, and peripheral nerve disorders. Neurosurgeons manage trauma, tumors, and vascular malformations.",
      icon: Brain,
      path: '/pg-medical/ms-courses/neurosurgery',
      color: 'text-indigo-500'
    },
    {
      id: 'plastic-surgery',
      title: "MS Plastic Surgery",
      description: "Focuses on reconstructive and cosmetic surgery to correct deformities, injuries, and enhance aesthetics. This specialization covers burns and trauma reconstruction.",
      icon: Users,
      path: '/pg-medical/ms-courses/plastic-surgery',
      color: 'text-amber-500'
    },
    {
      id: 'urology',
      title: "MS Urology",
      description: "Deals with the urinary tract system and male reproductive organs, addressing conditions like kidney stones, urinary cancers, and prostate disorders.",
      icon: CircleDot,
      path: '/pg-medical/ms-courses/urology',
      color: 'text-cyan-500'
    },
    {
      id: 'pediatric-surgery',
      title: "MS Pediatric Surgery",
      description: "Dedicated to surgical treatment of diseases, trauma, and congenital conditions in infants, children, and adolescents. Handles complex congenital malformations.",
      icon: Baby,
      path: '/pg-medical/ms-courses/pediatric-surgery',
      color: 'text-rose-500'
    },
    {
      id: 'surgical-oncology',
      title: "MS Surgical Oncology",
      description: "A focused branch dealing with the surgical removal of tumors and cancers. Surgical oncologists work closely with oncology teams for comprehensive cancer care.",
      icon: Target,
      path: '/pg-medical/ms-courses/surgical-oncology',
      color: 'text-orange-500'
    },
    {
      id: 'trauma-surgery',
      title: "MS Trauma Surgery",
      description: "A specialty addressing traumatic injuries and life-threatening emergencies, providing surgical and critical care support for polytrauma patients.",
      icon: Activity,
      path: '/pg-medical/ms-courses/trauma-surgery',
      color: 'text-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MS Courses - Master of Surgery Specializations | AdmissionHands"
        description="Explore MS course specializations and surgical career opportunities. Complete guide to Master of Surgery programs in India."
        keywords="MS courses, Master of Surgery, surgical specializations, MS admission, postgraduate surgery"
        ogTitle="MS Courses - Master of Surgery Specializations"
        ogDescription="Comprehensive guide to MS courses and surgical specializations in India."
      />
      
      <main className="container-custom py-8 pt-32">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-6 border border-border"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    MS Courses
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Explore specialized surgical fields and advance your career
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Master of Surgery (MS) is a postgraduate medical degree that provides specialized training in various surgical fields. These programs combine advanced clinical training, research, and academic excellence to prepare medical professionals for specialized surgical practice and leadership roles in healthcare.
              </p>
            </motion.div>

            {/* Overview Section */}
            <motion.section
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3" variants={fadeInUp}>
                <Stethoscope className="h-8 w-8 text-primary" />
                Program Overview
              </motion.h2>
              <motion.div className="grid md:grid-cols-2 gap-4">
                <motion.div className="bg-card rounded-xl p-4 border border-border" variants={fadeInUp}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Program Structure</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 3-year postgraduate specialization</li>
                    <li>• Advanced surgical training and practice</li>
                    <li>• Research and thesis requirements</li>
                    <li>• Super-specialty rotation opportunities</li>
                    <li>• Academic and teaching components</li>
                  </ul>
                </motion.div>
                <motion.div className="bg-card rounded-xl p-4 border border-border" variants={fadeInUp}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Career Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Specialized surgical expertise</li>
                    <li>• Competitive career opportunities</li>
                    <li>• Leadership opportunities in healthcare</li>
                    <li>• Research and academic career paths</li>
                    <li>• International practice opportunities</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* MS Specializations */}
            <motion.section
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3" variants={fadeInUp}>
                <Target className="h-8 w-8 text-primary" />
                Master of Surgery Specializations
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground mb-6 text-center" variants={fadeInUp}>
                Choose from diverse surgical specializations and build expertise in your chosen field.
              </motion.p>
              <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {msSpecializations.map((specialization, index) => {
                  const IconComponent = specialization.icon;
                  
                  return (
                    <motion.div
                      key={specialization.id}
                      className="bg-gradient-to-br from-card to-card/80 rounded-lg p-2 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.02, duration: 0.4, ease: "easeOut" },
                        },
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <Link to={specialization.path} className="block h-full">
                        <div className="flex flex-col items-center text-center h-full">
                          <div className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-2 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xs font-semibold text-foreground mb-1 leading-tight">{specialization.title}</h3>
                          <p className="text-[10px] text-muted-foreground mb-2 line-clamp-3 flex-grow">{specialization.description}</p>
                          <div className="flex items-center text-primary font-medium text-[10px] group-hover:text-primary/80 transition-colors">
                            Learn More <ArrowRight className="ml-1 h-2 w-2" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.section>

            {/* Additional Information Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Admission Process Section */}
              <motion.section
                className="card-elegant p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">Admission Process for MS in India</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    To pursue MS, candidates must hold an MBBS degree with a compulsory completed internship. 
                    Admission is through NEET PG, the national-level entrance exam for medical postgraduate courses.
                  </p>
                  <p>
                    The MS program duration is typically 3 years combining clinical training, surgical skill development, and research experience.
                  </p>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-foreground">Note on Fees:</strong> Government colleges provide affordable fee structures, 
                      private colleges charge moderate to high fees, and management or NRI quota seats have higher fee demands.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Why Choose MS Section */}
              <motion.section
                className="card-elegant p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">Why Choose MS?</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    MS offers rewarding careers in surgery across hospitals, healthcare institutes, and academic centers. 
                    Graduates can advance to super-specialty fellowships or develop expertise in niche surgical fields.
                  </p>
                  <p>
                    With rising demand for skilled surgeons in India and globally, MS qualifications open doors to diverse clinical and research opportunities.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Dna className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Advanced surgical expertise</span>
                  </div>
                </div>
              </motion.section>
            </div>

          </div>

          {/* Right Sidebar - Desktop Only */}
          <div className="hidden lg:block">
            <MSSidebar />
          </div>
        </div>
      </main>
      
      <CTA />
    </div>
  );
};

export default MSCourses;