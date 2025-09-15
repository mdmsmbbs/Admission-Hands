import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Stethoscope, Users, Award, Shield, UserCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import pgNeetHero from '@/assets/pg-neet-hero.jpg';

const PGMedicalHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with logo */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
        style={{
          backgroundImage: `url(${pgNeetHero})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.6
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-secondary/20 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-accent/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-primary/20 rounded-full"></div>
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
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Admission Hands
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Advance Your
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Medical Career
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your Trusted Partner for NEET PG (MD/MS) Admissions in India. Secure your postgraduate medical seat with our comprehensive counseling and admission services.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-sm border">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">MD Programs</div>
                  <div className="text-sm text-muted-foreground">50+ Specializations</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-sm border">
                <Stethoscope className="w-8 h-8 text-secondary" />
                <div>
                  <div className="font-semibold text-foreground">MS Programs</div>
                  <div className="text-sm text-muted-foreground">30+ Specializations</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Explore PG Courses
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/10">
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
            <Card className="bg-background/90 backdrop-blur-sm shadow-2xl border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Why Choose Admission Hands?</h3>
                    <p className="text-muted-foreground">Your trusted partner for NEET PG admissions</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Comprehensive Guidance</h4>
                        <p className="text-sm text-muted-foreground">Complete support for government, private, and deemed universities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-secondary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Transparent Information</h4>
                        <p className="text-sm text-muted-foreground">Accurate details on fees, seats, and admission procedures</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <UserCheck className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Personalized Advice</h4>
                        <p className="text-sm text-muted-foreground">Based on your rank, specialization, and budget</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Expert Assistance</h4>
                        <p className="text-sm text-muted-foreground">Management quota and NRI quota admissions</p>
                      </div>
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