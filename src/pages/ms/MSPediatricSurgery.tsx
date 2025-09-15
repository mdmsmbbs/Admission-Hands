import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Users, Award, CheckCircle, MapPin, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSPediatricSurgery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      <SEO 
        title="MS Pediatric Surgery - Children's Surgical Care | AdmissionHands"
        description="Master of Surgery in Pediatric Surgery program details, eligibility, career prospects. Specialize in surgical treatment of children and neonates."
        keywords="MS Pediatric Surgery, children surgery, neonatal surgery, congenital anomalies, pediatric trauma"
        ogTitle="MS Pediatric Surgery - Children's Surgical Care"
        ogDescription="Complete guide to MS Pediatric Surgery program - eligibility, curriculum, and career opportunities in children's surgical care."
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
                <div className="p-3 bg-cyan-100 rounded-xl">
                  <Activity className="h-8 w-8 text-cyan-600" />
                </div>
                <div>
                  <Badge className="mb-2">Super Specialization</Badge>
                  <h1 className="text-4xl font-bold text-foreground">MS Pediatric Surgery</h1>
                  <p className="text-muted-foreground text-lg mt-2">
                    Specialized surgical care for infants, children, and adolescents
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
                    <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">3 Years</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                    <p className="font-semibold">Seats</p>
                    <p className="text-sm text-muted-foreground">Very Limited</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                    <p className="font-semibold">Type</p>
                    <p className="text-sm text-muted-foreground">Super Specialty</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* About MS Pediatric Surgery */}
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
                    About MS Pediatric Surgery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MS Pediatric Surgery is a highly specialized field dedicated to surgical treatment of diseases, trauma, 
                    and congenital conditions in infants, children, and adolescents. This program addresses the unique anatomical, 
                    physiological, and psychological needs of pediatric patients requiring surgical intervention.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Pediatric surgeons manage complex congenital malformations, neonatal emergencies, childhood cancers, 
                    trauma cases, and perform minimally invasive procedures specifically adapted for children. The field requires 
                    exceptional precision, gentle surgical techniques, and strong communication skills with families.
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
                      <span>Experience in pediatric patient care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Patience and empathy for working with children</span>
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
                        <Activity className="h-5 w-5 text-cyan-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Pediatric Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive surgical care for children and neonates
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-cyan-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Neonatal Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in surgery for newborns and premature infants
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-cyan-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Pediatric Oncologic Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Surgical treatment of childhood cancers and tumors
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-cyan-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Academic Professor</h4>
                          <p className="text-sm text-muted-foreground">
                            Teaching and research in pediatric surgery
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-cyan-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Pediatric Trauma Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Emergency surgical care for injured children
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-cyan-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Hospital Director</h4>
                          <p className="text-sm text-muted-foreground">
                            Leadership roles in children's hospitals
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
                    MS Pediatric Surgery is an extremely competitive super-specialty with very limited seats available nationwide. 
                    Admission requires completion of MS General Surgery with outstanding academic record and top ranks in competitive 
                    examinations like NEET SS.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The program offers immense personal satisfaction through helping children overcome surgical challenges. 
                    It requires emotional resilience, technical precision, and dedication to continuous learning in this rapidly 
                    evolving field of pediatric care.
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

export default MSPediatricSurgery;