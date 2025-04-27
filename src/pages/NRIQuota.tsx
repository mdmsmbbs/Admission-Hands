
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NRIHero from '@/components/nri/NRIHero';
import NRIEligibility from '@/components/nri/NRIEligibility';
import NRIFees from '@/components/nri/NRIFees';
import NRIProcess from '@/components/nri/NRIProcess';
import NRIFAQ from '@/components/nri/NRIFAQ';
import NRICTA from '@/components/nri/NRICTA';
import SEO from '@/components/SEO';

const NRIQuota = () => {
  // FAQ structured data for better SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is NRI Quota in medical admissions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NRI Quota is a special reservation in medical colleges for Non-Resident Indians, Persons of Indian Origin (PIOs), Overseas Citizens of India (OCIs), and their dependents. It typically offers 15% of seats across private and deemed universities."
        }
      },
      {
        "@type": "Question",
        "name": "Who is eligible for NRI Quota?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NRIs, OCIs, PIOs, and candidates sponsored by NRIs (typically close relatives) are eligible. The candidate must have completed 10+2 with Physics, Chemistry, and Biology, and must have qualified NEET-UG."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="NRI Quota Medical Admissions - AdmissionHands"
        description="Expert guidance for NRI quota MBBS admissions in India. Learn about eligibility, fees, required documents and admission process for NRI students."
        keywords="NRI quota, medical admissions, MBBS for NRI, NRI sponsored candidates, foreign students medical admission"
        ogTitle="NRI Quota Medical College Admissions - AdmissionHands"
        structuredData={faqSchema}
      />
      
      <Header />
      <main className="flex-grow">
        <NRIHero />
        <NRIEligibility />
        <NRIProcess />
        <NRIFees />
        <NRIFAQ />
        <NRICTA />
      </main>
      <Footer />
    </div>
  );
};

export default NRIQuota;
