import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Clock, Users, Award, CheckCircle, MapPin, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSUrology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      <SEO 
        title="MS Urology - Urogenital Surgery Specialization | AdmissionHands"
        description="Master of Surgery in Urology program details, eligibility, career prospects, and admission process. Specialize in urinary tract and male reproductive system surgeries."
        keywords="MS Urology, urological surgery, kidney surgery, prostate surgery, urogenital disorders, minimally invasive urology"
        ogTitle="MS Urology - Urogenital Surgery Specialization"
        ogDescription="Complete guide to MS Urology program - eligibility, curriculum, and career opportunities in urological surgery."
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
                <div className="p-3 bg-teal-100 rounded-xl">
                  <Stethoscope className="h-8 w-8 text-teal-600" />
                </div>
                <div>
                  <Badge className="mb-2">Surgical Specialization</Badge>
                  <h1 className="text-4xl font-bold text-foreground">MS Urology</h1>
                  <p className="text-muted-foreground text-lg mt-2">
                    Advanced surgical training in urogenital system disorders
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
                    <Clock className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">3 Years</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="font-semibold">Seats</p>
                    <p className="text-sm text-muted-foreground">Limited</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="font-semibold">Type</p>
                    <p className="text-sm text-muted-foreground">Surgical</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* About MS Urology */}
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
                    About MS Urology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MS Urology is a specialized surgical program focusing on the diagnosis and treatment of diseases affecting 
                    the urinary tract system in both males and females, and the male reproductive organs. This comprehensive 
                    program covers conditions ranging from kidney stones and urinary cancers to male infertility and erectile dysfunction.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Urologists develop expertise in minimally invasive techniques including laparoscopy, endourology, robotic surgery, 
                    and reconstructive procedures. The field combines advanced technology with surgical precision to treat complex 
                    urogenital conditions and improve patients' quality of life.
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
                      <span>MBBS degree from recognized medical college</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Completed compulsory rotating internship</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Valid NEET PG score</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Registration with Medical Council of India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Interest in minimally invasive surgical techniques</span>
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
                        <Stethoscope className="h-5 w-5 text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Consultant Urologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Practice in multi-specialty hospitals and urology centers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Robotic Surgery Specialist</h4>
                          <p className="text-sm text-muted-foreground">
                            Expertise in robotic-assisted urological procedures
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Uro-oncologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in urological cancers and oncological surgery
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Academic Professor</h4>
                          <p className="text-sm text-muted-foreground">
                            Teaching and research in medical institutions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Pediatric Urologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in congenital urological anomalies in children
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Transplant Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Focus on kidney transplantation and reconstructive surgery
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
                    MS Urology is a highly competitive specialization with excellent career prospects and growth opportunities. 
                    Candidates typically need strong NEET PG scores and demonstrate aptitude for minimally invasive surgical techniques.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The program emphasizes both technical skills and patient care, preparing graduates for the evolving landscape 
                    of urological practice with focus on advanced endoscopic and laparoscopic procedures.
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

export default MSUrology;