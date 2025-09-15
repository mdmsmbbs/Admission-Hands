import React from 'react';
import PGMedicalHero from '@/components/pg/PGMedicalHero';
import PGMedicalOverview from '@/components/pg/PGMedicalOverview';

import AdmissionProcess from '@/components/pg/AdmissionProcess';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';
import { generateServiceSchema } from '@/utils/schemaGenerator';

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
      
      <AdmissionProcess />
      <CTA />
    </div>
  );
};

export default PGMedical;