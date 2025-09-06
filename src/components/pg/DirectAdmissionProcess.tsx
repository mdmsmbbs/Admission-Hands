import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, FileCheck, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const DirectAdmissionProcess = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Connect with our admission experts",
      icon: Phone,
      details: ["Free counseling session", "College recommendations", "Fee structure guidance"]
    },
    {
      step: "2",
      title: "Document Verification",
      description: "Submit required documents for verification",
      icon: FileCheck,
      details: ["Academic certificates", "Identity proofs", "NEET PG scorecard"]
    },
    {
      step: "3",
      title: "College Application",
      description: "Apply to selected colleges through our platform",
      icon: MessageCircle,
      details: ["Online application", "College interviews", "Merit assessment"]
    },
    {
      step: "4",
      title: "Admission Confirmation",
      description: "Complete fee payment and secure your seat",
      icon: CreditCard,
      details: ["Fee payment", "Seat confirmation", "Admission letter"]
    }
  ];

  const benefits = [
    "Expert guidance throughout the process",
    "Access to management quota seats",
    "Transparent fee structure",
    "Post-admission support",
    "100% genuine admissions"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-300">
            Direct Admission
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Direct <span className="text-gradient">Admission Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your PG medical seat through management quota with our streamlined admission process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Direct Admission?</h3>
            <p className="text-gray-600">Get guaranteed admission with our trusted network of medical colleges</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Start Direct Admission Process
              </Button>
              <p className="text-sm text-gray-500 mt-2">Get expert guidance today</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectAdmissionProcess;