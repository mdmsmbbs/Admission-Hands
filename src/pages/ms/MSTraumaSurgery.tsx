import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Users, Award, CheckCircle, MapPin, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSTraumaSurgery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      <SEO 
        title="MS Trauma Surgery - Emergency Surgical Care | AdmissionHands"
        description="Master of Surgery in Trauma Surgery program details, eligibility, career prospects. Specialize in emergency trauma care and critical surgical interventions."
        keywords="MS Trauma Surgery, emergency surgery, trauma care, critical care surgery, polytrauma management"
        ogTitle="MS Trauma Surgery - Emergency Surgical Care"
        ogDescription="Complete guide to MS Trauma Surgery program - eligibility, curriculum, and career opportunities in emergency surgical care."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-xl">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <Badge className="mb-2">Critical Care Specialization</Badge>
                  <h1 className="text-4xl font-bold text-foreground">MS Trauma Surgery</h1>
                  <p className="text-muted-foreground text-lg mt-2">
                    Emergency surgical care for traumatic injuries and critical conditions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Course Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">3 Years</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="font-semibold">Seats</p>
                    <p className="text-sm text-muted-foreground">Limited</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="font-semibold">Type</p>
                    <p className="text-sm text-muted-foreground">Emergency Specialty</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* About MS Trauma Surgery */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    About MS Trauma Surgery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MS Trauma Surgery is a specialized field addressing traumatic injuries and life-threatening emergencies 
                    requiring immediate surgical intervention. This program trains surgeons to manage polytrauma patients, 
                    multiple organ injuries, and provide critical care support in emergency situations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Trauma surgeons work in high-pressure environments, making rapid decisions to save lives. They manage 
                    complex cases involving multiple organ systems, coordinate with multidisciplinary teams, and provide 
                    both acute surgical care and ongoing critical care management for severely injured patients.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Eligibility Criteria */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>MS General Surgery or equivalent degree</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Valid DNB or equivalent qualification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Excellent NEET SS or institutional entrance scores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Ability to work under high-pressure situations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Physical and mental resilience for emergency care</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Career Opportunities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Trauma Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Emergency surgical care in trauma centers and hospitals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Critical Care Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Intensive care management of critically injured patients
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Emergency Department Head</h4>
                          <p className="text-sm text-muted-foreground">
                            Leadership roles in emergency and trauma departments
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Disaster Response Coordinator</h4>
                          <p className="text-sm text-muted-foreground">
                            Emergency response planning and disaster management
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Military Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialized trauma care in military and conflict zones
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Acute Care Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive emergency surgical services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Admission Process */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Admission Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MS Trauma Surgery is gaining recognition as an essential specialty with increasing demand for skilled trauma 
                    surgeons. Admission requires completion of MS General Surgery with strong performance and competitive scores 
                    in NEET SS or institutional examinations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The field offers immense professional satisfaction through life-saving interventions and rapid decision-making. 
                    It requires physical stamina, emotional resilience, and commitment to continuous learning in emergency medicine 
                    and critical care management.
                  </p>
                </CardContent>
              </Card>
            </motion.section>
          </div>
          
          <MSSidebar />
        </div>
      </div>
      
      <CTA />
    </div>
  );
};

export default MSTraumaSurgery;