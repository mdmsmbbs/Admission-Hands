import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MSSpecializations from '@/components/pg/MSSpecializations';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSCourses = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="MS Courses - Master of Surgery Specializations | AdmissionHands"
        description="Explore MS course specializations and surgical career opportunities. Complete guide to Master of Surgery programs in India."
        keywords="MS courses, Master of Surgery, surgical specializations, MS admission, postgraduate surgery"
        ogTitle="MS Courses - Master of Surgery Specializations"
        ogDescription="Comprehensive guide to MS courses and surgical specializations in India."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                MS Courses
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Explore specialized surgical fields and advance your career
              </p>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-4xl text-lg leading-relaxed"
          >
            Master of Surgery (MS) is a postgraduate medical degree that provides specialized training in various
            surgical fields. These programs combine advanced clinical training, research, and academic excellence to
            prepare medical professionals for specialized surgical practice and leadership roles in healthcare.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            {/* Program Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Program Overview</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Program Structure</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>3-year postgraduate specialization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Advanced surgical training and practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Research and thesis requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Super-specialty rotation opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Academic and teaching components</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Career Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Specialized surgical expertise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Competitive career opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Leadership opportunities in healthcare</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Research and academic career paths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>International practice opportunities</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            <MSSpecializations />
          </div>
          
          <MSSidebar />
        </div>
      </div>
      
      <CTA />
    </div>
  );
};

export default MSCourses;