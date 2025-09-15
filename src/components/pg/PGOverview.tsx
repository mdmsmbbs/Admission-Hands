import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Scissors, Clock, BookOpen, Stethoscope, Users, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const PGOverview = () => {
  const mdSpecializations = [
    { name: "General Medicine", seats: "2000+", trend: "high" },
    { name: "Pediatrics", seats: "1500+", trend: "high" },
    { name: "Dermatology", seats: "500+", trend: "very-high" },
    { name: "Radiology", seats: "800+", trend: "high" }
  ];

  const msSpecializations = [
    { name: "General Surgery", seats: "1800+", trend: "high" },
    { name: "Orthopedics", seats: "1200+", trend: "very-high" },
    { name: "ENT", seats: "800+", trend: "high" },
    { name: "Ophthalmology", seats: "600+", trend: "very-high" }
  ];

  const getTrendColor = (trend: string) => {
    return trend === "very-high" ? "text-green-600" : "text-blue-600";
  };

  const getTrendBg = (trend: string) => {
    return trend === "very-high" ? "bg-green-100" : "bg-blue-100";
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            MD vs MS Overview
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient">Medical Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quick comparison of MD and MS programs with top specializations and career prospects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* MD Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge className="bg-primary text-primary-foreground mb-4">Doctor of Medicine</Badge>
                  <h3 className="text-2xl font-bold text-primary">MD Programs</h3>
                  <p className="text-muted-foreground mt-2">Medical Specializations</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm">Focus on diagnosis & treatment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    <span className="text-sm">Clinical practice & consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm">Research & evidence-based medicine</span>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-foreground mb-3">Top Specializations</h4>
                  <div className="space-y-2">
                    {mdSpecializations.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-medium">{spec.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{spec.seats}</span>
                          <div className={`flex items-center px-2 py-1 rounded-full ${getTrendBg(spec.trend)}`}>
                            <TrendingUp className={`w-3 h-3 ${getTrendColor(spec.trend)}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Explore MD Courses
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* MS Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge className="bg-secondary text-secondary-foreground mb-4">Master of Surgery</Badge>
                  <h3 className="text-2xl font-bold text-secondary">MS Programs</h3>
                  <p className="text-muted-foreground mt-2">Surgical Specializations</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Scissors className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Focus on surgical procedures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Hands-on surgical training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Emergency & trauma care</span>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-foreground mb-3">Top Specializations</h4>
                  <div className="space-y-2">
                    {msSpecializations.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-medium">{spec.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{spec.seats}</span>
                          <div className={`flex items-center px-2 py-1 rounded-full ${getTrendBg(spec.trend)}`}>
                            <TrendingUp className={`w-3 h-3 ${getTrendColor(spec.trend)}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Explore MS Courses
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-6">
            <h3 className="text-2xl font-bold text-center">Quick Comparison</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-muted-foreground font-medium">Aspect</th>
                    <th className="pb-3 text-primary font-medium text-center">MD (Doctor of Medicine)</th>
                    <th className="pb-3 text-secondary font-medium text-center">MS (Master of Surgery)</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="py-3 font-medium text-foreground">Focus</td>
                    <td className="py-3 text-center text-muted-foreground">Medical Diagnosis & Treatment</td>
                    <td className="py-3 text-center text-muted-foreground">Surgical Procedures & Operations</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-foreground">Work Environment</td>
                    <td className="py-3 text-center text-muted-foreground">Clinics, Hospitals, Research</td>
                    <td className="py-3 text-center text-muted-foreground">Operation Theaters, Emergency</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium text-foreground">Duration</td>
                    <td className="py-3 text-center text-muted-foreground">3 Years</td>
                    <td className="py-3 text-center text-muted-foreground">3 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PGOverview;