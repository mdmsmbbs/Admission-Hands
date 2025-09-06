import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Award, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const MSCareerProspects = () => {
  const careerOptions = [
    {
      title: "Surgical Practice",
      icon: Building,
      description: "Perform specialized surgeries in hospitals and surgical centers",
      salary: "₹12-25 Lakhs/year",
      growth: "High demand for skilled surgeons"
    },
    {
      title: "Private Surgical Practice",
      icon: Users,
      description: "Establish surgical clinic with specialized procedures",
      salary: "₹25-75+ Lakhs/year",
      growth: "Income grows with surgical expertise and reputation"
    },
    {
      title: "Academic Surgery",
      icon: Award,
      description: "Teaching and research in medical colleges with surgical practice",
      salary: "₹15-30 Lakhs/year",
      growth: "Opportunities for surgical research and innovation"
    },
    {
      title: "Healthcare Leadership",
      icon: TrendingUp,
      description: "Senior surgical positions and healthcare administration",
      salary: "₹30-60+ Lakhs/year",
      growth: "Leadership roles in healthcare organizations"
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
          <Badge variant="outline" className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-300">
            Career Prospects
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            MS Career <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore lucrative career paths and opportunities after completing your MS surgical specialization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-indigo-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                  <div className="space-y-2">
                    <div className="bg-green-50 rounded-lg p-2">
                      <div className="text-xs text-green-600 font-medium">Expected Salary</div>
                      <div className="text-sm font-bold text-green-700">{option.salary}</div>
                    </div>
                    <div className="text-xs text-gray-500">{option.growth}</div>
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

export default MSCareerProspects;