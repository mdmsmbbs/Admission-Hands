import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, FileText, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const NEETPGProcess = () => {
  const processSteps = [
    {
      step: "1",
      title: "NEET PG Examination",
      description: "Appear for NEET PG conducted by NBE",
      icon: FileText,
      details: ["Computer-based test", "300 questions", "3.5 hours duration"]
    },
    {
      step: "2", 
      title: "Result Declaration",
      description: "Check NEET PG results and merit list",
      icon: CheckCircle,
      details: ["Merit list release", "Category-wise cutoffs", "Score card download"]
    },
    {
      step: "3",
      title: "Counseling Registration",
      description: "Register for All India or State counseling",
      icon: Users,
      details: ["Document verification", "Choice filling", "Seat allotment"]
    },
    {
      step: "4",
      title: "Admission & Reporting",
      description: "Report to allotted college and complete admission",
      icon: Calendar,
      details: ["Document submission", "Fee payment", "Class commencement"]
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
          <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-300">
            NEET PG Process
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            NEET PG <span className="text-gradient">Admission Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step guide to navigate the NEET PG examination and counseling process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
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
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NEETPGProcess;