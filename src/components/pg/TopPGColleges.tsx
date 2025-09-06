import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const TopPGColleges = () => {
  const colleges = [
    {
      name: "All Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
      ranking: "#1",
      rating: 4.9,
      seats: "1200+",
      specializations: "50+",
      fees: "₹5,000 - ₹10,000",
      type: "Government"
    },
    {
      name: "Christian Medical College (CMC)",
      location: "Vellore, Tamil Nadu",
      ranking: "#2", 
      rating: 4.8,
      seats: "800+",
      specializations: "45+",
      fees: "₹2.5 - ₹5 Lakhs",
      type: "Private"
    },
    {
      name: "Armed Forces Medical College (AFMC)",
      location: "Pune, Maharashtra",
      ranking: "#3",
      rating: 4.7,
      seats: "600+",
      specializations: "40+", 
      fees: "₹8,000 - ₹15,000",
      type: "Government"
    },
    {
      name: "King George's Medical University",
      location: "Lucknow, Uttar Pradesh",
      ranking: "#4",
      rating: 4.6,
      seats: "900+",
      specializations: "42+",
      fees: "₹10,000 - ₹20,000",
      type: "Government"
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
            Top Ranked Colleges
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Top PG <span className="text-gradient">Medical Colleges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the highest-ranked medical colleges in India for postgraduate medical education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
                      <div className="font-semibold text-gray-900">{college.seats}</div>
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
      </div>
    </section>
  );
};

export default TopPGColleges;