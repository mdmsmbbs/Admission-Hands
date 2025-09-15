import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const TopSpecializations = () => {
  const mdSpecializations = [
    {
      name: "General Medicine",
      duration: "3 years",
      avgSalary: "₹8-15 LPA",
      seats: "2000+",
      rating: 4.8,
      trend: "high"
    },
    {
      name: "Pediatrics", 
      duration: "3 years",
      avgSalary: "₹10-18 LPA",
      seats: "1500+",
      rating: 4.7,
      trend: "high"
    },
    {
      name: "Dermatology",
      duration: "3 years", 
      avgSalary: "₹15-25 LPA",
      seats: "500+",
      rating: 4.9,
      trend: "very-high"
    },
    {
      name: "Radiology",
      duration: "3 years",
      avgSalary: "₹12-20 LPA", 
      seats: "800+",
      rating: 4.6,
      trend: "high"
    }
  ];

  const msSpecializations = [
    {
      name: "General Surgery",
      duration: "3 years",
      avgSalary: "₹10-20 LPA",
      seats: "1800+",
      rating: 4.8,
      trend: "high"
    },
    {
      name: "Orthopedics",
      duration: "3 years", 
      avgSalary: "₹15-30 LPA",
      seats: "1200+",
      rating: 4.9,
      trend: "very-high"
    },
    {
      name: "ENT",
      duration: "3 years",
      avgSalary: "₹12-22 LPA",
      seats: "800+", 
      rating: 4.7,
      trend: "high"
    },
    {
      name: "Ophthalmology",
      duration: "3 years",
      avgSalary: "₹14-25 LPA",
      seats: "600+",
      rating: 4.8,
      trend: "very-high"
    }
  ];

  const getTrendColor = (trend: string) => {
    return trend === "very-high" ? "text-green-600" : "text-blue-600";
  };

  const getTrendBg = (trend: string) => {
    return trend === "very-high" ? "bg-green-100" : "bg-blue-100";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-300">
            Top Specializations
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Most Popular <span className="text-gradient">PG Specializations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most sought-after MD and MS specializations with excellent career prospects and high demand in the healthcare industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* MD Specializations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">MD Specializations</h3>
              <p className="text-gray-600">Medical specializations focusing on diagnosis and treatment</p>
            </div>
            
            <div className="space-y-4">
              {mdSpecializations.map((spec, index) => (
                <Card key={spec.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{spec.name}</h4>
                        <div className="flex items-center mt-1">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{spec.rating} Rating</span>
                        </div>
                      </div>
                      <div className={`flex items-center px-2 py-1 rounded-full ${getTrendBg(spec.trend)}`}>
                        <TrendingUp className={`w-4 h-4 mr-1 ${getTrendColor(spec.trend)}`} />
                        <span className={`text-xs font-medium ${getTrendColor(spec.trend)}`}>
                          {spec.trend === "very-high" ? "High Demand" : "Growing"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Duration</div>
                        <div className="font-medium text-gray-900">{spec.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Available Seats</div>
                        <div className="font-medium text-gray-900">{spec.seats}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* MS Specializations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">MS Specializations</h3>
              <p className="text-gray-600">Surgical specializations focusing on operative procedures</p>
            </div>
            
            <div className="space-y-4">
              {msSpecializations.map((spec, index) => (
                <Card key={spec.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{spec.name}</h4>
                        <div className="flex items-center mt-1">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{spec.rating} Rating</span>
                        </div>
                      </div>
                      <div className={`flex items-center px-2 py-1 rounded-full ${getTrendBg(spec.trend)}`}>
                        <TrendingUp className={`w-4 h-4 mr-1 ${getTrendColor(spec.trend)}`} />
                        <span className={`text-xs font-medium ${getTrendColor(spec.trend)}`}>
                          {spec.trend === "very-high" ? "High Demand" : "Growing"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Duration</div>
                        <div className="font-medium text-gray-900">{spec.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Available Seats</div>
                        <div className="font-medium text-gray-900">{spec.seats}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TopSpecializations;