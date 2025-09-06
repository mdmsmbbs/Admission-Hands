import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const MSEligibility = () => {
  const eligibilityRequirements = [
    {
      title: "Educational Qualification",
      requirements: [
        "MBBS degree from recognized medical college",
        "Valid registration with Medical Council of India (MCI) or State Medical Council",
        "Completion of mandatory rotating internship"
      ]
    },
    {
      title: "NEET PG Qualification",
      requirements: [
        "Qualify NEET PG with minimum cutoff marks",
        "Valid NEET PG scorecard",
        "Fulfill category-wise cutoff criteria"
      ]
    },
    {
      title: "Age & Physical Criteria",
      requirements: [
        "Minimum age: 21 years on admission date",
        "Maximum age: 32 years (General category)",
        "Good physical and mental health for surgical procedures"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-300">
            Eligibility Criteria
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            MS Course <span className="text-gradient">Eligibility Requirements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the essential criteria to pursue your MS specialization and excel in surgical practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {eligibilityRequirements.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <div className="space-y-3">
                    {section.requirements.map((requirement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
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

export default MSEligibility;