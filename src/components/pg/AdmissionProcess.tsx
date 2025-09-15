import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, UserCheck, Calendar, GraduationCap, CheckCircle, Users, Award, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const AdmissionProcess = () => {
  const neetPGSteps = [
    {
      icon: FileText,
      title: "NEET PG Registration",
      description: "Register for NEET PG examination on official NTA website",
      timeline: "Step 1",
      details: "Complete application form, upload documents, pay fees"
    },
    {
      icon: BookOpen,
      title: "NEET PG Examination",
      description: "Appear for computer-based NEET PG exam",
      timeline: "Step 2", 
      details: "300 questions, 3.5 hours duration, negative marking applicable"
    },
    {
      icon: Target,
      title: "Result & Rank",
      description: "Check NEET PG results and all India rank",
      timeline: "Step 3",
      details: "Qualifying percentile varies by category (50th for general)"
    },
    {
      icon: UserCheck,
      title: "Counseling Process",
      description: "Participate in online counseling rounds",
      timeline: "Step 4",
      details: "Document verification, choice filling, seat allotment"
    },
    {
      icon: Calendar,
      title: "Seat Allotment",
      description: "Secure seat based on rank and preferences",
      timeline: "Step 5",
      details: "Multiple rounds conducted until seats are filled"
    },
    {
      icon: GraduationCap,
      title: "Admission Confirmation",
      description: "Report to allotted college and complete admission",
      timeline: "Step 6",
      details: "Submit documents, pay fees, begin PG course"
    }
  ];

  const seatCategories = [
    {
      title: "General/Merit Seats",
      description: "Seats allocated purely based on NEET PG rank through counseling",
      percentage: "50%",
      eligibility: "NEET PG qualified candidates",
      process: "All India & State Counseling",
      color: "from-blue-500 to-blue-600",
      icon: Award,
      details: [
        "All India Quota: 50% seats in govt colleges",
        "State Quota: 85% seats reserved for domicile",
        "Merit-based allocation through counseling",
        "Most affordable option for students"
      ]
    },
    {
      title: "Management Quota Seats", 
      description: "Private college seats with relaxed eligibility criteria",
      percentage: "35%",
      eligibility: "MBBS + Internship completion",
      process: "Direct college application",
      color: "from-purple-500 to-purple-600",
      icon: Users,
      details: [
        "Available in private medical colleges",
        "Higher fees compared to merit seats",
        "NEET PG score may be required but lower cutoff",
        "Faster admission process"
      ]
    },
    {
      title: "NRI/NRI Sponsored Seats",
      description: "Reserved seats for NRI students and NRI sponsored Indian students",
      percentage: "15%",
      eligibility: "NRI status or NRI sponsorship",
      process: "College-specific criteria",
      color: "from-indigo-500 to-indigo-600", 
      icon: Target,
      details: [
        "Reserved for Non-Resident Indians",
        "NRI sponsored seats for Indian students",
        "Higher fee structure in foreign currency",
        "Separate application process for each college"
      ]
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
            NEET PG Admission Process
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Path to <span className="text-gradient">PG Medical Admission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to MD/MS admission through NEET PG examination. Understand the process, seat categories, and requirements for successful admission.
          </p>
        </motion.div>

        {/* NEET PG Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            NEET PG Admission Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neetPGSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs">
                        {step.timeline}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{step.title}</h4>
                    <p className="text-gray-600 text-sm text-center mb-3">{step.description}</p>
                    <p className="text-gray-500 text-xs text-center">{step.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seat Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Understanding Seat Categories
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {seatCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full bg-gradient-to-br ${category.color} text-white`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-white/20 text-white mb-4">{category.percentage} of Seats</Badge>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="opacity-90 text-sm">{category.description}</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm opacity-80">Eligibility</div>
                        <div className="font-medium">{category.eligibility}</div>
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Process</div>
                        <div className="font-medium">{category.process}</div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-1 text-xs">
                        {category.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-white rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
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
                Essential Requirements for PG Medical Admission
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Educational Qualifications
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-7">
                    <li>• MBBS from MCI/NMC recognized college</li>
                    <li>• Completed 12-month internship</li>
                    <li>• Valid medical registration</li>
                    <li>• Permanent/provisional registration</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    NEET PG Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-7">
                    <li>• Valid NEET PG score</li>
                    <li>• Qualifying percentile (50th for General)</li>
                    <li>• Category-wise cutoff marks</li>
                    <li>• Score validity for 3 years</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-indigo-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Documentation
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-7">
                    <li>• MBBS degree certificate</li>
                    <li>• Internship completion certificate</li>
                    <li>• Registration certificate</li>
                    <li>• Category certificates (if applicable)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-green-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Additional Criteria
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-7">
                    <li>• Age limits (varies by category)</li>
                    <li>• Domicile certificates for state quota</li>
                    <li>• Bond requirements in some states</li>
                    <li>• Service obligations (if applicable)</li>
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