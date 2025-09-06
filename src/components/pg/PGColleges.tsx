import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const PGColleges = () => {
  const topColleges = [
    {
      name: "All Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
      type: "Government",
      rating: 4.9,
      pgSeats: "1200+",
      specializations: "50+",
      fees: "₹5,000 - ₹10,000",
      ranking: "#1",
      image: "/lovable-uploads/aiims-delhi.jpg"
    },
    {
      name: "Christian Medical College (CMC)",
      location: "Vellore, Tamil Nadu", 
      type: "Private",
      rating: 4.8,
      pgSeats: "800+",
      specializations: "45+",
      fees: "₹2.5 - ₹5 Lakhs",
      ranking: "#2",
      image: "/lovable-uploads/cmc-vellore.jpg"
    },
    {
      name: "Armed Forces Medical College (AFMC)",
      location: "Pune, Maharashtra",
      type: "Government",
      rating: 4.7,
      pgSeats: "600+", 
      specializations: "40+",
      fees: "₹8,000 - ₹15,000",
      ranking: "#3",
      image: "/lovable-uploads/afmc-pune.jpg"
    },
    {
      name: "King George's Medical University",
      location: "Lucknow, Uttar Pradesh",
      type: "Government",
      rating: 4.6,
      pgSeats: "900+",
      specializations: "42+", 
      fees: "₹10,000 - ₹20,000",
      ranking: "#4",
      image: "/lovable-uploads/kgmu-lucknow.jpg"
    }
  ];

  const collegeTypes = [
    {
      type: "Government Colleges",
      count: "300+",
      avgFees: "₹5,000 - ₹50,000",
      description: "Subsidized fees with excellent faculty and infrastructure",
      color: "from-green-500 to-emerald-600"
    },
    {
      type: "Private Colleges", 
      count: "200+",
      avgFees: "₹2 - ₹25 Lakhs",
      description: "Modern facilities with flexible admission options",
      color: "from-blue-500 to-cyan-600"
    },
    {
      type: "Deemed Universities",
      count: "150+", 
      avgFees: "₹5 - ₹30 Lakhs",
      description: "Autonomous institutions with specialized programs",
      color: "from-purple-500 to-violet-600"
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
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-300">
            Top PG Colleges
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Best <span className="text-gradient">Medical Colleges</span> for PG
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the top medical colleges in India offering excellent postgraduate programs with world-class infrastructure and experienced faculty.
          </p>
        </motion.div>

        {/* College Types Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {collegeTypes.map((type, index) => (
            <motion.div
              key={type.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full bg-gradient-to-br ${type.color} text-white`}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{type.type}</h3>
                  <div className="text-3xl font-bold mb-2">{type.count}</div>
                  <div className="text-sm opacity-90 mb-3">{type.avgFees}</div>
                  <p className="text-sm opacity-80">{type.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Top Colleges Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {topColleges.map((college, index) => (
            <motion.div
              key={college.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white mr-2">
                          {college.ranking}
                        </Badge>
                        <Badge variant="outline" className={
                          college.type === "Government" 
                            ? "border-green-300 text-green-700 bg-green-50" 
                            : "border-blue-300 text-blue-700 bg-blue-50"
                        }>
                          {college.type}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{college.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{college.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{college.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-xs">PG Seats</span>
                      </div>
                      <div className="font-semibold text-gray-900">{college.pgSeats}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Award className="w-4 h-4 mr-1" />
                        <span className="text-xs">Specializations</span>
                      </div>
                      <div className="font-semibold text-gray-900">{college.specializations}</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Annual Fees</div>
                        <div className="font-semibold text-gray-900">{college.fees}</div>
                      </div>
                      <Button variant="outline" size="sm" className="text-purple-600 border-purple-300 hover:bg-purple-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* State-wise Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            State-wise PG Medical Colleges Distribution
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { state: "Maharashtra", colleges: "45+", seats: "2500+" },
              { state: "Karnataka", colleges: "40+", seats: "2200+" },
              { state: "Tamil Nadu", colleges: "35+", seats: "2000+" },
              { state: "Uttar Pradesh", colleges: "50+", seats: "2800+" }
            ].map((data, index) => (
              <div key={data.state} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">{data.state}</h4>
                  <div className="space-y-1">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{data.colleges}</div>
                      <div className="text-xs text-gray-500">Colleges</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-indigo-600">{data.seats}</div>
                      <div className="text-xs text-gray-500">PG Seats</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Explore All Colleges
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PGColleges;