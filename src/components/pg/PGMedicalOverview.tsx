import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const PGMedicalOverview = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "3-year intensive program with theoretical knowledge and practical training",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Structured schedule balancing clinical rotations and academic sessions",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Award,
      title: "NMC Recognition",
      description: "All programs are recognized by National Medical Commission (NMC)",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Specialized training for specific medical and surgical specialties",
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-700 border-purple-300">
            Program Overview
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-gradient">PG Medical Education?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Postgraduate medical education in India offers specialized training that transforms general practitioners into expert specialists, opening doors to advanced career opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Key Program Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Duration:</strong> 3 years for MD/MS programs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Eligibility:</strong> MBBS degree with NEET PG qualification</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Specializations:</strong> 80+ medical and surgical specialties available</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Training:</strong> Clinical rotations, research projects, and thesis work</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Benefits</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Enhanced clinical expertise and patient care skills
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Higher earning potential and career advancement
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Opportunities for research and academic positions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Eligibility for super-specialization courses
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PGMedicalOverview;