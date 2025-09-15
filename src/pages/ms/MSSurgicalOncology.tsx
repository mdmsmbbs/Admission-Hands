import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle, MapPin, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSSurgicalOncology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      <SEO 
        title="MS Surgical Oncology - Cancer Surgery Specialization | AdmissionHands"
        description="Master of Surgery in Surgical Oncology program details, eligibility, career prospects. Specialize in surgical treatment of cancers and tumors."
        keywords="MS Surgical Oncology, cancer surgery, tumor removal, oncological surgery, surgical oncologist"
        ogTitle="MS Surgical Oncology - Cancer Surgery Specialization"
        ogDescription="Complete guide to MS Surgical Oncology program - eligibility, curriculum, and career opportunities in cancer surgery."
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
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <Badge className="mb-2">Super Specialization</Badge>
                  <h1 className="text-4xl font-bold text-foreground">MS Surgical Oncology</h1>
                  <p className="text-muted-foreground text-lg mt-2">
                    Advanced surgical treatment of cancers and malignant tumors
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
                    <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">3 Years</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="font-semibold">Seats</p>
                    <p className="text-sm text-muted-foreground">Limited</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="font-semibold">Type</p>
                    <p className="text-sm text-muted-foreground">Super Specialty</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* About MS Surgical Oncology */}
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
                    About MS Surgical Oncology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MS Surgical Oncology is a specialized branch focused on the surgical removal of tumors and cancers. 
                    This program provides comprehensive training in oncological surgical techniques, multidisciplinary cancer care, 
                    and the latest advances in cancer treatment modalities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Surgical oncologists work closely with medical oncologists, radiation oncologists, and other specialists to 
                    provide comprehensive cancer care. They perform complex surgeries including tumor resections, lymph node 
                    dissections, and reconstructive procedures while maintaining optimal oncological outcomes.
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
                      <span>Strong foundation in surgical principles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Dedication to oncological patient care</span>
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
                        <Shield className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Surgical Oncologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive surgical cancer care in hospitals and cancer centers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Head & Neck Oncologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialize in cancers of head, neck, and thyroid regions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Hepatobiliary Oncologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Focus on liver, pancreatic, and biliary tract cancers
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Research Scientist</h4>
                          <p className="text-sm text-muted-foreground">
                            Cancer research and clinical trials leadership
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Cancer Center Director</h4>
                          <p className="text-sm text-muted-foreground">
                            Leadership roles in comprehensive cancer centers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Breast Oncologist</h4>
                          <p className="text-sm text-muted-foreground">
                            Specialized surgical treatment of breast cancers
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
                    MS Surgical Oncology is a highly sought-after super-specialty with growing demand due to increasing cancer 
                    incidence. Admission requires completion of MS General Surgery with excellent academic performance and 
                    competitive scores in NEET SS examinations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The field offers significant professional growth opportunities and the satisfaction of making a meaningful 
                    impact in cancer care. It requires emotional resilience, continuous learning, and commitment to providing 
                    comprehensive oncological care to patients and families.
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

export default MSSurgicalOncology;