import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Bone, Clock, Users, Award, TrendingUp, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSOrthopedics = () => {
  const eligibilityRequirements = [
    "MBBS degree from recognized medical college",
    "Valid NEET PG qualification with qualifying marks", 
    "Completion of mandatory rotating internship",
    "Registration with Medical Council of India (MCI)",
    "Physical fitness for orthopedic procedures"
  ];

  const careerOpportunities = [
    {
      title: "Orthopedic Surgeon",
      icon: Users,
      description: "Perform bone and joint surgeries in hospitals"
    },
    {
      title: "Sports Medicine Specialist",
      icon: Award,
      description: "Treat sports-related injuries and rehabilitation"
    },
    {
      title: "Trauma Surgeon",
      icon: TrendingUp,
      description: "Handle emergency fractures and trauma cases"
    },
    {
      title: "Joint Replacement Specialist",
      icon: BookOpen,
      description: "Specialized in knee and hip replacement surgeries"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="MS Orthopedics - Master of Surgery in Orthopedics | AdmissionHands"
        description="Complete guide to MS Orthopedics course, eligibility, career prospects, and admission process in India."
        keywords="MS Orthopedics, Master of Surgery Orthopedics, bone surgery, NEET PG orthopedics"
        ogTitle="MS Orthopedics - Master of Surgery"
        ogDescription="Comprehensive information about MS Orthopedics specialization in India."
      />

      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="hero-overlay"></div>
        <div className="container-custom text-center relative z-10">
          <Badge className="mb-4 bg-secondary/10 text-secondary border border-secondary/20 backdrop-blur-sm">
            Master of Surgery
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MS <span className="text-secondary">Orthopedics</span>
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Specialize in musculoskeletal system disorders and become an expert in bone, joint, and soft tissue surgeries.
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
                  <Bone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Type</h3>
                  <p className="text-gray-600">Surgical</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About MS Orthopedics</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MS Orthopedics is a specialized three-year postgraduate program focusing on the diagnosis and surgical treatment of 
                  musculoskeletal disorders. This includes fractures, joint diseases, spine disorders, sports injuries, and congenital deformities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Orthopedic surgeons are highly skilled professionals who perform complex procedures including joint replacements, 
                  arthroscopic surgeries, trauma surgeries, and reconstructive procedures to restore mobility and function.
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
                  MS Orthopedics is highly competitive with limited seats across India. A rank within top 5,000-8,000 in NEET PG 
                  is typically required for admission in government colleges. Top institutions prefer candidates with ranks below 3,000.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Due to high demand and excellent career prospects, orthopedics requires excellent NEET PG preparation. 
                  The counseling process includes both national and state quota allocations.
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

export default MSOrthopedics;