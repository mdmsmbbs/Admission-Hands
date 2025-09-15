import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Scissors, Clock, BookOpen, Stethoscope, Users, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const PGOverview = () => {
  const mdSpecializations = [
    { name: "General Medicine", seats: "4000+", trend: "high" },
    { name: "Pediatrics", seats: "3400+", trend: "high" },
    { name: "Dermatology", seats: "1400+", trend: "very-high" },
    { name: "Radiology", seats: "2200+", trend: "high" }
  ];

  const msSpecializations = [
    { name: "General Surgery", seats: "6400+", trend: "high" },
    { name: "Orthopedics", seats: "2800+", trend: "very-high" },
    { name: "ENT", seats: "1300+", trend: "high" },
    { name: "Ophthalmology", seats: "2100+", trend: "very-high" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
            Choose Your Medical Path
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            MD vs MS <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compare specializations, seats, and career prospects to make the right choice for your medical future.
          </p>
        </motion.div>

        {/* Combined Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-background/95 backdrop-blur-sm shadow-2xl border-2 border-primary/10 rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border/20">
                {/* MD Section */}
                <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="text-center mb-8">
                    <Badge className="bg-primary text-primary-foreground mb-4 text-lg px-6 py-2">
                      Doctor of Medicine
                    </Badge>
                    <h3 className="text-3xl font-bold text-primary mb-2">MD Programs</h3>
                    <p className="text-muted-foreground">Medical Specializations</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="flex items-center space-x-3 p-3 bg-background/60 rounded-lg">
                      <Brain className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Medical Diagnosis & Treatment</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background/60 rounded-lg">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Clinical Practice & Research</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background/60 rounded-lg">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Evidence-based Medicine</span>
                    </div>
                  </div>
                  
                  <div className="bg-background/80 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-foreground mb-4 text-lg">Top Specializations</h4>
                    <div className="space-y-3">
                      {mdSpecializations.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-background/60 rounded-lg">
                          <span className="font-medium text-foreground">{spec.name}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                              {spec.seats} seats
                            </Badge>
                            <div className="flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Explore MD Courses
                  </Button>
                </div>

                {/* MS Section */}
                <div className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10">
                  <div className="text-center mb-8">
                    <Badge className="bg-secondary text-secondary-foreground mb-4 text-lg px-6 py-2">
                      Master of Surgery
                    </Badge>
                    <h3 className="text-3xl font-bold text-secondary mb-2">MS Programs</h3>
                    <p className="text-muted-foreground">Surgical Specializations</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="flex items-center space-x-3 p-3 bg-background/60 rounded-lg">
                      <Scissors className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">Surgical Procedures & Operations</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background/60 rounded-lg">
                      <Users className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">Hands-on Surgical Training</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background/60 rounded-lg">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">Emergency & Trauma Care</span>
                    </div>
                  </div>
                  
                  <div className="bg-background/80 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-foreground mb-4 text-lg">Top Specializations</h4>
                    <div className="space-y-3">
                      {msSpecializations.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-background/60 rounded-lg">
                          <span className="font-medium text-foreground">{spec.name}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary">
                              {spec.seats} seats
                            </Badge>
                            <div className="flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                    Explore MS Courses
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-primary/10 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-6 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Quick Comparison</h3>
            <p className="text-muted-foreground">Key differences between MD and MS programs</p>
          </div>
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="pb-4 text-left text-foreground font-bold text-lg">Comparison Aspect</th>
                    <th className="pb-4 text-center text-primary font-bold text-lg">MD (Doctor of Medicine)</th>
                    <th className="pb-4 text-center text-secondary font-bold text-lg">MS (Master of Surgery)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/10">
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 font-semibold text-foreground">Primary Focus</td>
                    <td className="py-4 text-center text-muted-foreground">Medical Diagnosis & Treatment</td>
                    <td className="py-4 text-center text-muted-foreground">Surgical Procedures & Operations</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 font-semibold text-foreground">Training Approach</td>
                    <td className="py-4 text-center text-muted-foreground">Clinical Practice & Research</td>
                    <td className="py-4 text-center text-muted-foreground">Hands-on Surgical Training</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 font-semibold text-foreground">Career Path</td>
                    <td className="py-4 text-center text-muted-foreground">Consultation & Evidence-based Care</td>
                    <td className="py-4 text-center text-muted-foreground">Emergency & Trauma Surgery</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 font-semibold text-foreground">Work Environment</td>
                    <td className="py-4 text-center text-muted-foreground">Clinics, Hospitals, Research Centers</td>
                    <td className="py-4 text-center text-muted-foreground">Operation Theaters, Emergency Units</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 font-semibold text-foreground">Program Duration</td>
                    <td className="py-4 text-center text-muted-foreground">3 Years</td>
                    <td className="py-4 text-center text-muted-foreground">3 Years</td>
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