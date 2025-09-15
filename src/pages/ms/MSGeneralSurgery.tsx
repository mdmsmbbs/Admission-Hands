import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Scissors, Clock, Users, Award, TrendingUp, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSGeneralSurgery = () => {
  const eligibilityRequirements = [
    "MBBS degree from recognized medical college",
    "Valid NEET PG qualification with qualifying marks",
    "Completion of mandatory rotating internship",
    "Registration with Medical Council of India (MCI)",
    "Good physical and mental health for surgical procedures"
  ];

  const careerOpportunities = [
    {
      title: "Hospital Surgeon",
      icon: Users,
      description: "Perform surgeries in government and private hospitals"
    },
    {
      title: "Surgical Consultant", 
      icon: Award,
      description: "Private practice with surgical consultation services"
    },
    {
      title: "Emergency Surgeon",
      icon: TrendingUp,
      description: "Trauma and emergency surgical procedures"
    },
    {
      title: "Academic Surgery",
      icon: BookOpen,
      description: "Teaching and research in medical colleges"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="MS General Surgery - Master of Surgery in General Surgery | AdmissionHands"
        description="Complete guide to MS General Surgery course, eligibility, career prospects, and admission process in India."
        keywords="MS General Surgery, Master of Surgery General Surgery, surgical training, NEET PG surgery"
        ogTitle="MS General Surgery - Master of Surgery"
        ogDescription="Comprehensive information about MS General Surgery specialization in India."
      />

      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="hero-overlay"></div>
        <div className="container-custom text-center relative z-10">
          <Badge className="mb-4 bg-secondary/10 text-secondary border border-secondary/20 backdrop-blur-sm">
            Master of Surgery
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MS <span className="text-secondary">General Surgery</span>
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Master comprehensive surgical techniques and become a skilled general surgeon with advanced training in diverse surgical procedures.
          </p>
        </div>
      </section>

      <div className="container-custom flex gap-6 py-6">
        <div className="flex-1">
          {/* Course Overview */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-8"
          >
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Duration</h3>
                  <p className="text-gray-600">3 Years</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Seats</h3>
                  <p className="text-gray-600">Available</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Scissors className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Type</h3>
                  <p className="text-gray-600">Surgical</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About MS General Surgery</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MS General Surgery is a comprehensive three-year postgraduate program that trains doctors in various surgical procedures. 
                  This specialization covers abdominal surgery, trauma surgery, emergency procedures, endocrine surgery, and basic surgical oncology.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  General surgeons are skilled in diagnosing and treating a wide range of surgical conditions, making them versatile healthcare professionals 
                  capable of handling diverse surgical emergencies and elective procedures.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Eligibility Criteria */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-8"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
                <div className="space-y-3">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Career Opportunities */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {careerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <opportunity.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-gray-900">{opportunity.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{opportunity.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Admission Process */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-8"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Admission Process</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MS General Surgery is competitive with good seat availability across India. A rank within top 15,000-20,000 in NEET PG 
                  typically secures admission in government colleges. Many reputed institutions admit students with ranks well below 10,000.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Admission is based on NEET PG scores followed by counseling processes conducted by national and state authorities. 
                  Candidates should prepare thoroughly for both theoretical knowledge and practical skills assessment.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        <MSSidebar />
      </div>

      <CTA />
    </div>
  );
};

export default MSGeneralSurgery;