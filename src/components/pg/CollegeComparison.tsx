import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';

const CollegeComparison = () => {
  const colleges = [
    {
      name: "Government Medical Colleges",
      type: "Government",
      fees: "₹5,000 - ₹50,000",
      seats: "High",
      infrastructure: "Excellent",
      research: "Very High",
      placement: "Good",
      features: [
        "Subsidized fees",
        "Quality education", 
        "Research opportunities",
        "Government backing"
      ],
      limitations: [
        "Limited seats",
        "High competition",
        "Strict eligibility"
      ]
    },
    {
      name: "Private Medical Colleges",
      type: "Private",
      fees: "₹5 - ₹25 Lakhs",
      seats: "Moderate",
      infrastructure: "Very Good",
      research: "Good",
      placement: "Very Good",
      features: [
        "Modern facilities",
        "Flexible admission",
        "Industry connections",
        "Better faculty ratio"
      ],
      limitations: [
        "Higher fees",
        "Variable quality",
        "Less research focus"
      ]
    },
    {
      name: "Deemed Universities",
      type: "Deemed",
      fees: "₹10 - ₹30 Lakhs",
      seats: "Good",
      infrastructure: "Excellent",
      research: "High",
      placement: "Excellent",
      features: [
        "Autonomous curriculum",
        "International exposure",
        "Advanced facilities",
        "Industry partnerships"
      ],
      limitations: [
        "High fees",
        "Limited recognition",
        "Regulatory changes"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-300">
            College Comparison
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Compare <span className="text-gradient">Medical College Types</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the differences between government, private, and deemed universities to make an informed choice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <motion.div
              key={college.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Badge className={`mb-3 ${
                      college.type === 'Government' ? 'bg-green-600' :
                      college.type === 'Private' ? 'bg-blue-600' : 'bg-purple-600'
                    } text-white`}>
                      {college.type}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900">{college.name}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Fees:</span>
                      <span className="font-semibold">{college.fees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Seat Availability:</span>
                      <span className="font-semibold">{college.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Infrastructure:</span>
                      <span className="font-semibold">{college.infrastructure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Research:</span>
                      <span className="font-semibold">{college.research}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Placement:</span>
                      <span className="font-semibold">{college.placement}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {college.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Limitations</h4>
                    <div className="space-y-2">
                      {college.limitations.map((limitation, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    View {college.type} Colleges
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeComparison;