import React from 'react';
import PGAdmissionHero from '@/components/pg/PGAdmissionHero';
import NEETPGProcess from '@/components/pg/NEETPGProcess';
import DirectAdmissionProcess from '@/components/pg/DirectAdmissionProcess';
import DocumentsRequired from '@/components/pg/DocumentsRequired';
import AdmissionTimeline from '@/components/pg/AdmissionTimeline';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const PGAdmissionProcess = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="PG Medical Admission Process - NEET PG & Direct Admission | AdmissionHands"
        description="Complete guide to PG medical admission process including NEET PG counseling and direct admission procedures for MD/MS courses."
        keywords="NEET PG admission, PG medical admission process, direct admission MD MS, medical PG counseling"
        ogTitle="PG Medical Admission Process - NEET PG & Direct Admission"
        ogDescription="Step-by-step guide to PG medical admissions in India."
      />
      
      <PGAdmissionHero />
      <NEETPGProcess />
      <DirectAdmissionProcess />
      <DocumentsRequired />
      <AdmissionTimeline />
      <CTA />
    </div>
  );
};

export default PGAdmissionProcess;