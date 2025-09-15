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

  const admissionRoadmap = [
    {
      title: "NEET PG Exam",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      points: [
        "Conducted by the National Board of Examinations (NBE) once a year",
        "Eligibility includes MBBS degree with internship completion and registration with NMC or State Medical Council",
        "Foreign medical graduates must clear FMGE and be registered with NMC",
        "No age or attempt limits for NEET PG"
      ]
    },
    {
      title: "Result and Merit List",
      icon: Target,
      color: "from-green-500 to-green-600",
      points: [
        "Result declared by NBE, used to prepare merit list and rank for counseling and seat allocation"
      ]
    },
    {
      title: "Counseling Process",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      points: [
        "Conducted by MCC for All India Quota (50% seats), deemed central universities, and certain institutes",
        "State authorities conduct counseling for the remaining 50% state quota seats",
        "Registration, choice filling, seat allotment, document verification, and reporting are key steps",
        "Multiple rounds are conducted to fill seats optimally"
      ]
    }
  ];

  const seatTypes = [
    {
      type: "General Seats",
      description: "Regular seats under All India Quota or State Quota for candidates qualifying NEET PG",
      quota: "50% All India Quota, 50% State Quota",
      eligibility: "Candidates must qualify NEET PG and meet eligibility like MBBS degree, internship, registration",
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "Management Quota",
      description: "Reserved seats in private or deemed universities with higher fee structure",
      quota: "Varies, typically 15-30% in private colleges",
      eligibility: "Fees are generally on the higher side compared to general seats; limited seats with NEET qualification requirement",
      color: "from-purple-500 to-purple-600"
    },
    {
      type: "NRI Quota",
      description: "Reserved seats for Non-Resident Indians or sponsored candidates in private/deemed universities",
      quota: "Up to 15% in private/deemed colleges",
      eligibility: "Fees under NRI quota are usually higher than management quota; candidates must have valid NRI status and qualify NEET PG",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const eligibilityCriteria = [
    "Must hold an MBBS degree from a recognized medical college",
    "Completion of one-year internship is mandatory before admission",
    "Must have provisional or permanent registration with NMC or State Medical Council",
    "Foreign medical graduates must have passed FMGE and obtained NMC registration",
    "No age restriction or limit on number of attempts",
    "NRI quota candidates must have valid NRI/OCI/PIO status or proof of parent's NRI status"
  ];

  const admissionProcessSteps = [
    "Register and appear for NEET PG examination",
    "Check result and rank",
    "Register for counseling through MCC or respective state counseling portals",
    "Fill and lock choices for colleges and specialization",
    "Seat allotment based on merit and seat availability",
    "Complete document verification and pay fees as applicable",
    "Report to the allotted institute for confirmation of admission"
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