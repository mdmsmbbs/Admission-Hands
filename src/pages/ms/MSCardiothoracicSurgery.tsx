import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Users, Award, CheckCircle, MapPin, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSCardiothoracicSurgery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      <SEO 
        title="MS Cardiothoracic Surgery - Heart & Lung Surgery | AdmissionHands"
        description="Master of Surgery in Cardiothoracic Surgery program details, eligibility, career prospects. Specialize in heart, lung, and thoracic organ surgeries."
        keywords="MS Cardiothoracic Surgery, heart surgery, cardiac surgery, thoracic surgery, CABG, valve replacement"
        ogTitle="MS Cardiothoracic Surgery - Heart & Lung Surgery"
        ogDescription="Complete guide to MS Cardiothoracic Surgery program - eligibility, curriculum, and career opportunities."
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
                <div className="p-3 bg-rose-100 rounded-xl">
                  <Heart className="h-8 w-8 text-rose-600" />
                </div>
                <div>
                  <Badge className="mb-2">Super Specialization</Badge>
                  <h1 className="text-4xl font-bold text-foreground">MS Cardiothoracic Surgery</h1>
                  <p className="text-muted-foreground text-lg mt-2">
                    Advanced surgical training for heart, lung, and thoracic organs
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
                    <Clock className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">3 Years</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                    <p className="font-semibold">Seats</p>
                    <p className="text-sm text-muted-foreground">Very Limited</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                    <p className="font-semibold">Type</p>
                    <p className="text-sm text-muted-foreground">Super Specialty</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* About MS Cardiothoracic Surgery */}
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
                    About MS Cardiothoracic Surgery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MS Cardiothoracic Surgery is one of the most prestigious and challenging surgical specializations, focusing on 
                    surgical treatment of diseases affecting the heart, lungs, esophagus, and other organs within the thoracic cavity. 
                    This program encompasses both cardiac and thoracic surgery components.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cardiothoracic surgeons perform complex procedures including coronary artery bypass grafting (CABG), valve 
                    replacements, heart transplants, lung resections, and pediatric cardiac surgeries. The field demands exceptional 
                    technical skills, precision, and ability to work under high-pressure situations.
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
                      <span>Strong surgical experience and skills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Physical and mental stamina for long procedures</span>
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
                        <Heart className="h-5 w-5 text-rose-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Cardiac Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Perform coronary bypass, valve surgeries, and heart transplants
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-rose-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Thoracic Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in lung, esophageal, and mediastinal surgeries
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-rose-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Pediatric Cardiac Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Correct congenital heart defects in children
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-rose-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Department Head</h4>
                          <p className="text-sm text-muted-foreground">
                            Lead cardiothoracic departments in major hospitals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-rose-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Transplant Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in heart and lung transplantation
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-rose-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Research Director</h4>
                          <p className="text-sm text-muted-foreground">
                            Lead research in cardiovascular innovations
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
                    MS Cardiothoracic Surgery is the most competitive surgical specialization with extremely limited seats nationwide. 
                    Admission requires completion of MS General Surgery with exceptional academic performance and often top ranks 
                    in NEET SS examinations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The program demands extraordinary dedication, with long learning curves and high-stress procedures. However, 
                    it offers unparalleled professional prestige and the opportunity to save lives through complex surgical interventions.
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

export default MSCardiothoracicSurgery;