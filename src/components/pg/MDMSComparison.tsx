import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Scissors, Clock, BookOpen, Stethoscope, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const MDMSComparison = () => {
  const mdFeatures = [
    {
      icon: Brain,
      title: "Medical Specializations",
      description: "Focus on diagnosis, treatment, and prevention of diseases"
    },
    {
      icon: Stethoscope,
      title: "Clinical Practice",
      description: "Patient consultation, medical procedures, and therapy"
    },
    {
      icon: BookOpen,
      title: "Research Oriented",
      description: "Emphasis on medical research and evidence-based practice"
    }
  ];

  const msFeatures = [
    {
      icon: Scissors,
      title: "Surgical Specializations",
      description: "Focus on surgical procedures and operative techniques"
    },
    {
      icon: Users,
      title: "Hands-on Training",
      description: "Extensive surgical training and procedural skills"
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "Training in trauma care and emergency surgical procedures"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-300">
            Course Comparison
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">MD</span> vs <span className="text-indigo-600">MS</span> Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the differences between Doctor of Medicine (MD) and Master of Surgery (MS) programs to choose the right path for your medical career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* MD Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-purple-600 text-white mb-4">Doctor of Medicine</Badge>
                  <h3 className="text-3xl font-bold text-purple-700">MD</h3>
                  <p className="text-purple-600 mt-2">Medical Specializations</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  {mdFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-purple-200 p-2 rounded-lg">
                        <feature.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Popular MD Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {["General Medicine", "Pediatrics", "Dermatology", "Psychiatry", "Radiology", "Pathology"].map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-purple-300 text-purple-700">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Explore MD Courses
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* MS Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-indigo-600 text-white mb-4">Master of Surgery</Badge>
                  <h3 className="text-3xl font-bold text-indigo-700">MS</h3>
                  <p className="text-indigo-600 mt-2">Surgical Specializations</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  {msFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-indigo-200 p-2 rounded-lg">
                        <feature.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Popular MS Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {["General Surgery", "Orthopedics", "ENT", "Ophthalmology", "Gynecology", "Anesthesiology"].map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-indigo-300 text-indigo-700">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Explore MS Courses
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
            <h3 className="text-2xl font-bold text-center">Quick Comparison</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-gray-600 font-medium">Aspect</th>
                    <th className="pb-3 text-purple-600 font-medium text-center">MD (Doctor of Medicine)</th>
                    <th className="pb-3 text-indigo-600 font-medium text-center">MS (Master of Surgery)</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-900">Focus Area</td>
                    <td className="py-3 text-center text-gray-700">Medical Diagnosis & Treatment</td>
                    <td className="py-3 text-center text-gray-700">Surgical Procedures & Operations</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-900">Work Environment</td>
                    <td className="py-3 text-center text-gray-700">Clinics, Hospitals, Research</td>
                    <td className="py-3 text-center text-gray-700">Operation Theaters, Emergency</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-gray-900">Career Path</td>
                    <td className="py-3 text-center text-gray-700">Physician, Consultant, Researcher</td>
                    <td className="py-3 text-center text-gray-700">Surgeon, Specialist, Consultant</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">Earning Potential</td>
                    <td className="py-3 text-center text-gray-700">₹8-25 LPA</td>
                    <td className="py-3 text-center text-gray-700">₹10-30 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MDMSComparison;