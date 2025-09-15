import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Scissors, Clock, BookOpen, Stethoscope, Users, TrendingUp, MapPin, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const PGOverview = () => {
  const comparisonData = [
    {
      aspect: "Primary Focus",
      icon: <Stethoscope className="w-5 h-5" />,
      md: "Medical Diagnosis & Treatment",
      ms: "Surgical Procedures & Operations"
    },
    {
      aspect: "Training Approach", 
      icon: <BookOpen className="w-5 h-5" />,
      md: "Clinical Practice & Research",
      ms: "Hands-on Surgical Training"
    },
    {
      aspect: "Top Specializations",
      icon: <Users className="w-5 h-5" />,
      md: "General Medicine (4000+), Pediatrics (3400+), Dermatology (1400+), Radiology (2200+)",
      ms: "General Surgery (6400+), Orthopedics (2800+), ENT (1300+), Ophthalmology (2100+)"
    },
    {
      aspect: "Total Available Seats",
      icon: <TrendingUp className="w-5 h-5" />,
      md: "11,000+ seats nationwide",
      ms: "12,600+ seats nationwide"
    },
    {
      aspect: "Career Path",
      icon: <MapPin className="w-5 h-5" />,
      md: "Consultation & Evidence-based Care",
      ms: "Emergency & Trauma Surgery"
    },
    {
      aspect: "Work Environment",
      icon: <Activity className="w-5 h-5" />,
      md: "Clinics, Hospitals, Research Centers",
      ms: "Operation Theaters, Emergency Units"
    },
    {
      aspect: "Program Duration",
      icon: <Clock className="w-5 h-5" />,
      md: "3 Years",
      ms: "3 Years"
    }
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
            Complete comparison of specializations, seats, and career prospects to make the right choice for your medical future.
          </p>
        </motion.div>

        {/* Comprehensive Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-background/95 backdrop-blur-sm shadow-2xl border-2 border-primary/10 rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8">
              <CardTitle className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-3">Complete Program Comparison</h3>
                <p className="text-muted-foreground text-lg">Everything you need to know about MD and MS programs</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b-2 border-primary/20">
                      <th className="text-left p-6 font-bold text-foreground text-xl w-1/4">
                        Comparison Aspect
                      </th>
                      <th className="text-center p-6 font-bold text-primary text-xl w-3/8">
                        <div className="flex items-center justify-center gap-3">
                          <Stethoscope className="h-6 w-6" />
                          MD (Doctor of Medicine)
                        </div>
                      </th>
                      <th className="text-center p-6 font-bold text-secondary text-xl w-3/8">
                        <div className="flex items-center justify-center gap-3">
                          <Scissors className="h-6 w-6" />
                          MS (Master of Surgery)
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={`border-b border-border/10 hover:bg-muted/20 transition-all duration-200 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/5'}`}>
                        <td className="p-6 font-semibold text-foreground bg-muted/10 border-r border-border/20">
                          <div className="flex items-center gap-3">
                            <div className="text-primary">{item.icon}</div>
                            {item.aspect}
                          </div>
                        </td>
                        <td className="p-6 text-muted-foreground border-r border-border/10">
                          <div className="flex items-start justify-center gap-2">
                            <span className="font-medium text-center leading-relaxed">{item.md}</span>
                          </div>
                        </td>
                        <td className="p-6 text-muted-foreground">
                          <div className="flex items-start justify-center gap-2">
                            <span className="font-medium text-center leading-relaxed">{item.ms}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            
            {/* Action Buttons */}
            <div className="bg-muted/5 p-8 border-t border-border/20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Stethoscope className="h-5 w-5 mr-2" />
                  Explore MD Courses
                </Button>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Scissors className="h-5 w-5 mr-2" />
                  Explore MS Courses
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PGOverview;