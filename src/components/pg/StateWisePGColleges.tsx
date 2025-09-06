import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const StateWisePGColleges = () => {
  const states = [
    {
      state: "Maharashtra",
      colleges: 45,
      seats: 2500,
      topColleges: ["Grant Medical College", "KEM Hospital", "TN Medical College"],
      avgFees: "₹2-15 Lakhs"
    },
    {
      state: "Karnataka", 
      colleges: 40,
      seats: 2200,
      topColleges: ["Bangalore Medical College", "Mysore Medical College", "KIMS Bangalore"],
      avgFees: "₹3-20 Lakhs"
    },
    {
      state: "Tamil Nadu",
      colleges: 35,
      seats: 2000,
      topColleges: ["Madras Medical College", "Stanley Medical College", "CMC Vellore"],
      avgFees: "₹2-18 Lakhs"
    },
    {
      state: "Uttar Pradesh",
      colleges: 50,
      seats: 2800,
      topColleges: ["KGMU Lucknow", "IMS BHU", "LLRM Medical College"],
      avgFees: "₹1-12 Lakhs"
    },
    {
      state: "Delhi",
      colleges: 15,
      seats: 800,
      topColleges: ["AIIMS Delhi", "MAMC", "LHMC"],
      avgFees: "₹1-8 Lakhs"
    },
    {
      state: "West Bengal",
      colleges: 25,
      seats: 1400,
      topColleges: ["Medical College Kolkata", "SSKM Hospital", "RG Kar Medical College"],
      avgFees: "₹2-10 Lakhs"
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
            State-wise Analysis
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            State-wise <span className="text-gradient">PG Medical Colleges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore PG medical opportunities across different states in India with detailed insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map((stateData, index) => (
            <motion.div
              key={stateData.state}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{stateData.state}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Building className="w-4 h-4 text-blue-600" />
                        <span className="text-xs text-gray-500">Colleges</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{stateData.colleges}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span className="text-xs text-gray-500">PG Seats</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">{stateData.seats.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Average Fees</div>
                    <div className="text-lg font-semibold text-green-600">{stateData.avgFees}</div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-900 mb-2">Top Colleges</div>
                    <div className="space-y-1">
                      {stateData.topColleges.map((college, idx) => (
                        <div key={idx} className="text-sm text-gray-600 bg-gray-50 rounded px-2 py-1">
                          {college}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full text-green-600 border-green-300 hover:bg-green-50">
                    View All Colleges
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right State?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert counselors can help you identify the best states and colleges based on your preferences, budget, and career goals.
            </p>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Get Personalized Guidance
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StateWisePGColleges;