import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Award, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const MDCareerProspects = () => {
  const careerOptions = [
    {
      title: "Hospital Practice",
      icon: Building,
      description: "Work in government or private hospitals as specialist doctors",
      salary: "₹8-15 Lakhs/year",
      growth: "High demand in healthcare sector"
    },
    {
      title: "Private Practice",
      icon: Users,
      description: "Establish your own clinic and build patient relationships",
      salary: "₹15-50+ Lakhs/year",
      growth: "Income grows with experience and reputation"
    },
    {
      title: "Academic Career",
      icon: Award,
      description: "Teaching and research in medical colleges and universities",
      salary: "₹10-25 Lakhs/year",
      growth: "Opportunities for research and publications"
    },
    {
      title: "Corporate Healthcare",
      icon: TrendingUp,
      description: "Leadership roles in healthcare companies and organizations",
      salary: "₹20-40+ Lakhs/year",
      growth: "Fast-track career advancement"
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
          <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-700 border-purple-300">
            Career Prospects
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            MD Career <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore diverse career paths and opportunities after completing your MD specialization.
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
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-purple-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-purple-600" />
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

export default MDCareerProspects;