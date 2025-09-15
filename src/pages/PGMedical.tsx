import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PGMedicalHero from '@/components/pg/PGMedicalHero';
import PGMedicalOverview from '@/components/pg/PGMedicalOverview';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';
import { generateServiceSchema } from '@/utils/schemaGenerator';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Stethoscope, GraduationCap } from 'lucide-react';

const PGMedical = () => {
  const pgMedicalSchema = generateServiceSchema(
    "PG - MD/MS Admission Services", 
    "Comprehensive guidance for MD and MS postgraduate medical admissions in India through NEET PG. Expert counseling for merit and quota seats.",
    {
      "offers": {
        "@type": "Offer",
        "price": "25000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      "areaServed": "India"
    }
  );

  return (
    <div className="min-h-screen">
      <SEO 
        title="PG - MD/MS Admission Services | AdmissionHands"
        description="Expert guidance for MD and MS postgraduate medical admissions in India through NEET PG. Comprehensive counseling for merit, management and NRI quota seats."
        keywords="MD admission, MS admission, NEET PG, postgraduate medical, medical specialization, PG medical admission, AdmissionHands"
        ogTitle="PG - MD/MS Admission in India | AdmissionHands"
        ogDescription="Secure your MD/MS seat with expert NEET PG guidance. Comprehensive services for postgraduate medical admissions."
        structuredData={pgMedicalSchema}
      />
      
      <PGMedicalHero />
      <PGMedicalOverview />
      
      {/* Navigation Buttons Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Choose Your Specialization Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore comprehensive guides for MD, MS courses and top PG colleges to make an informed decision for your medical career.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/pg-medical/md-courses">
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2 border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                      <Stethoscope className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">MD Courses</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Explore Doctor of Medicine specializations and non-surgical clinical medicine pathways.
                    </p>
                    <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/pg-medical/ms-courses">
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2 border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                      <BookOpen className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">MS Courses</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Discover Master of Surgery programs and surgical specialization opportunities.
                    </p>
                    <Button variant="outline" className="group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/pg-medical/colleges">
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2 border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                      <GraduationCap className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Top PG Colleges</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Find the best medical colleges for postgraduate programs across India.
                    </p>
                    <Button variant="outline" className="group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
};

export default PGMedical;