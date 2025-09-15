import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Clock, Users, Award, CheckCircle, MapPin, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSOpthalmology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      <SEO 
        title="MS Ophthalmology - Eye Surgery Specialization | AdmissionHands"
        description="Master of Surgery in Ophthalmology program details, eligibility, career prospects, and admission process. Specialize in eye diseases and vision correction surgeries."
        keywords="MS Ophthalmology, eye surgery, vision correction, retinal surgery, cataract surgery, glaucoma treatment"
        ogTitle="MS Ophthalmology - Eye Surgery Specialization"
        ogDescription="Complete guide to MS Ophthalmology program - eligibility, curriculum, and career opportunities in eye surgery."
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
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <Eye className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <Badge className="mb-2">Surgical Specialization</Badge>
                  <h1 className="text-4xl font-bold text-foreground">MS Ophthalmology</h1>
                  <p className="text-muted-foreground text-lg mt-2">
                    Advanced surgical training in eye diseases and vision correction
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
                    <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">3 Years</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <p className="font-semibold">Seats</p>
                    <p className="text-sm text-muted-foreground">Limited</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <p className="font-semibold">Type</p>
                    <p className="text-sm text-muted-foreground">Surgical</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* About MS Ophthalmology */}
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
                    About MS Ophthalmology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MS Ophthalmology is a specialized surgical program focused on the comprehensive study and treatment of eye diseases, 
                    disorders of the visual system, and vision correction procedures. This program trains surgeons to perform complex 
                    eye surgeries including cataract extraction, retinal procedures, glaucoma surgeries, and corneal transplantations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ophthalmologists develop expertise in both medical and surgical management of eye conditions, utilizing advanced 
                    microsurgical techniques, laser procedures, and modern diagnostic equipment to preserve and restore vision in patients 
                    of all ages.
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
                      <span>Good hand-eye coordination and visual acuity</span>
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
                        <Eye className="h-5 w-5 text-indigo-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Consultant Ophthalmologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Practice in hospitals, eye care centers, and private clinics
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-indigo-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Retinal Specialist</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in retinal diseases and vitreoretinal surgery
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-indigo-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Corneal Transplant Surgeon</h4>
                          <p className="text-sm text-muted-foreground">
                            Perform corneal grafts and anterior segment surgeries
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-indigo-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Academic Professor</h4>
                          <p className="text-sm text-muted-foreground">
                            Teaching and research in medical colleges
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-indigo-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Pediatric Ophthalmologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in children's eye conditions and strabismus
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-indigo-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Glaucoma Specialist</h4>
                          <p className="text-sm text-muted-foreground">
                            Focus on glaucoma diagnosis and surgical management
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
                    MS Ophthalmology is among the most competitive surgical specializations due to limited seats and high demand. 
                    Candidates typically need excellent NEET PG ranks, often within the top 1000-2000 for government colleges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The program requires dedication to precision, patience for microsurgery, and commitment to continuous learning 
                    in this rapidly advancing field. Strong academic performance and research experience can enhance admission prospects.
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

export default MSOpthalmology;