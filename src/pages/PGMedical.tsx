import React from 'react';
import PGMedicalHero from '@/components/pg/PGMedicalHero';
import PGMedicalOverview from '@/components/pg/PGMedicalOverview';
import MDMSComparison from '@/components/pg/MDMSComparison';
import TopSpecializations from '@/components/pg/TopSpecializations';
import AdmissionProcess from '@/components/pg/AdmissionProcess';
import PGColleges from '@/components/pg/PGColleges';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';
import { generateServiceSchema } from '@/utils/schemaGenerator';

const PGMedical = () => {
  const pgMedicalSchema = generateServiceSchema(
    "PG Medical Courses - MD/MS Admission Services", 
    "Comprehensive guidance for MD and MS postgraduate medical admissions in India. Expert counseling for NEET PG and direct admission processes.",
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
        title="PG Medical Courses - MD/MS Admission Services | AdmissionHands"
        description="Expert guidance for MD and MS postgraduate medical admissions in India. Get personalized counseling for NEET PG and direct admission processes."
        keywords="MD admission, MS admission, postgraduate medical courses, NEET PG, medical specialization, PG medical colleges"
        ogTitle="PG Medical Courses - MD/MS Admission in India"
        ogDescription="Secure your MD/MS seat with expert guidance. Comprehensive services for postgraduate medical admissions."
        structuredData={pgMedicalSchema}
      />
      
      <PGMedicalHero />
      <PGMedicalOverview />
      <MDMSComparison />
      <TopSpecializations />
      <AdmissionProcess />
      <PGColleges />
      <CTA />
    </div>
  );
};

export default PGMedical;