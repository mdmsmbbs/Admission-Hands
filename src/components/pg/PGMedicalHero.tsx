import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Stethoscope, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const PGMedicalHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-indigo-200 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-purple-200 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300">
                Postgraduate Medical Education
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advance Your
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Medical Career
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert guidance for MD and MS admissions in India. Secure your postgraduate medical seat with our comprehensive counseling and admission services.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <GraduationCap className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">MD Programs</div>
                  <div className="text-sm text-gray-500">50+ Specializations</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Stethoscope className="w-8 h-8 text-indigo-600" />
                <div>
                  <div className="font-semibold text-gray-900">MS Programs</div>
                  <div className="text-sm text-gray-500">30+ Specializations</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Explore PG Courses
              </Button>
              <Button variant="outline" size="lg" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                Admission Process
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose PG Medical?</h3>
                    <p className="text-gray-600">Transform your medical career with specialized expertise</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Specialized Expertise</h4>
                        <p className="text-sm text-gray-600">Gain deep knowledge in your chosen medical specialty</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-6 h-6 text-indigo-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Career Advancement</h4>
                        <p className="text-sm text-gray-600">Open doors to senior positions and consulting roles</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Research Opportunities</h4>
                        <p className="text-sm text-gray-600">Contribute to medical research and innovation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">500+</div>
                      <div className="text-xs text-gray-500">PG Seats Secured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">95%</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">100+</div>
                      <div className="text-xs text-gray-500">Partner Colleges</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PGMedicalHero;