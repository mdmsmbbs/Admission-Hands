import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Brain, Clock, Users, Award, TrendingUp, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSNeurosurgery = () => {
  const eligibilityRequirements = [
    "MBBS degree from recognized medical college",
    "Exceptional NEET PG scores (top ranks required)",
    "Completion of mandatory rotating internship",
    "Registration with Medical Council of India (MCI)",
    "Excellent manual dexterity and precision skills"
  ];

  const careerOpportunities = [
    {
      title: "Neurosurgeon",
      icon: Users,
      description: "Perform complex brain and spinal surgeries"
    },
    {
      title: "Pediatric Neurosurgeon",
      icon: Award,
      description: "Specialized neurological surgeries for children"
    },
    {
      title: "Spine Surgeon",
      icon: TrendingUp,
      description: "Advanced spinal cord and vertebral surgeries"
    },
    {
      title: "Academic Neurosurgeon",
      icon: BookOpen,
      description: "Teaching and research in neurosurgical medicine"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="MS Neurosurgery - Master of Surgery in Neurosurgery | AdmissionHands"
        description="Complete guide to MS Neurosurgery course, eligibility, career prospects, and admission process in India."
        keywords="MS Neurosurgery, Master of Surgery Neurosurgery, brain surgery, NEET PG neurosurgery"
        ogTitle="MS Neurosurgery - Master of Surgery"
        ogDescription="Comprehensive information about MS Neurosurgery specialization in India."
      />

      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="hero-overlay"></div>
        <div className="container-custom text-center relative z-10">
          <Badge className="mb-4 bg-secondary/10 text-secondary border border-secondary/20 backdrop-blur-sm">
            Master of Surgery
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MS <span className="text-secondary">Neurosurgery</span>
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Master the most complex surgical procedures involving the brain, spine, and nervous system with precision and expertise.
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
                  <p className="text-gray-600">Very Limited</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Type</h3>
                  <p className="text-gray-600">Highly Specialized</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About MS Neurosurgery</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MS Neurosurgery is the most challenging and prestigious three-year postgraduate program focusing on surgical treatment of 
                  disorders affecting the brain, spinal cord, and peripheral nervous system. This field requires exceptional skill and precision.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Neurosurgeons perform life-saving procedures including brain tumor removal, trauma surgery, epilepsy surgery, 
                  and complex spinal operations, making it one of the most demanding yet rewarding medical specialties.
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
                  MS Neurosurgery is extremely competitive with very limited seats. Only top 500-1000 ranks in NEET PG 
                  can secure admission in government colleges. This is one of the most sought-after specialties in medicine.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The field demands exceptional dedication, years of training, and continuous learning. Career prospects are excellent 
                  with opportunities for high-level specialization and international recognition.
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

export default MSNeurosurgery;