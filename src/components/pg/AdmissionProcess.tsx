import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, UserCheck, Calendar, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AdmissionProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "NEET PG Qualification",
      description: "Clear NEET PG exam with qualifying marks for your preferred specialization",
      timeline: "Step 1"
    },
    {
      icon: UserCheck,
      title: "Counseling Registration",
      description: "Register for online counseling process and document verification",
      timeline: "Step 2"
    },
    {
      icon: Calendar,
      title: "Seat Allotment",
      description: "Participate in counseling rounds and secure your preferred seat",
      timeline: "Step 3"
    },
    {
      icon: GraduationCap,
      title: "Admission Confirmation",
      description: "Complete admission formalities and begin your PG journey",
      timeline: "Step 4"
    }
  ];

  const pathways = [
    {
      title: "NEET PG Route",
      description: "Merit-based admission through NEET PG examination",
      eligibility: "MBBS + Internship + NEET PG Score",
      seats: "85% seats",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Management Quota",
      description: "Direct admission through management quota in private colleges",
      eligibility: "MBBS + Internship + Valid Documents",
      seats: "15% seats",
      color: "from-purple-500 to-indigo-600"
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
          <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-300">
            Admission Process
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Path to <span className="text-gradient">PG Medical Admission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the admission process is crucial for securing your seat in the desired MD/MS program. Follow our step-by-step guide for success.
          </p>
        </motion.div>

        {/* Admission Pathways */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${pathway.color} text-white h-full`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{pathway.title}</h3>
                  <p className="mb-6 opacity-90">{pathway.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-sm opacity-80">Eligibility</div>
                      <div className="font-medium">{pathway.eligibility}</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Seat Allocation</div>
                      <div className="font-medium">{pathway.seats}</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Admission Process Steps
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto">
                        <step.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs">
                        {step.timeline}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 transform -translate-y-1/2 z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Key Requirements for PG Medical Admission
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Educational Qualifications
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-7">
                    <li>• MBBS degree from recognized university</li>
                    <li>• Completed internship/house job</li>
                    <li>• Valid medical registration</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-indigo-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Entrance Exam
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-7">
                    <li>• NEET PG qualification mandatory</li>
                    <li>• Valid score for desired specialization</li>
                    <li>• State-specific eligibility criteria</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-cyan-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Documentation
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-7">
                    <li>• All academic transcripts</li>
                    <li>• Internship completion certificate</li>
                    <li>• Identity and residence proof</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionProcess;