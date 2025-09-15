import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Shield, UserCheck, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const PGMedicalOverview = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Guidance",
      description: "Complete support for NEET PG MD/MS admissions covering government, private, and deemed universities",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Shield,
      title: "Transparent Information",
      description: "Accurate details on fees, seat availability, and admission procedures with no hidden costs",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: UserCheck,
      title: "Personalized Advice",
      description: "Customized counseling based on your NEET PG rank, preferred specialization, and budget",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Clock,
      title: "Expert Assistance",
      description: "Professional help with management quota and NRI quota admissions",
      color: "bg-medical-600/10 text-medical-600"
    },
    {
      icon: Award,
      title: "Dedicated Support",
      description: "End-to-end guidance through every step ensuring a smooth and stress-free experience",
      color: "bg-teal-600/10 text-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Admission Hands
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Your Trusted Partner for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NEET PG (MD/MS) Admissions</span> in India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why Choose Admission Hands?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-border"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Commitment to Your Success
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Admission Hands, we are dedicated to providing comprehensive guidance for NEET PG MD/MS admissions 
              across India. Our expert team offers transparent, accurate information on fees, seat availability, 
              and admission procedures for government, private, and deemed universities. We provide personalized 
              advice based on your NEET PG rank, preferred specialization, and budget, along with specialized 
              assistance for management quota and NRI quota admissions. Our commitment is to support you through 
              every step of the admission process, ensuring a smooth and stress-free experience on your journey 
              to postgraduate medical education.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PGMedicalOverview;