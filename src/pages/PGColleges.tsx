import React from 'react';
import PGCollegesHero from '@/components/pg/PGCollegesHero';
import TopPGColleges from '@/components/pg/TopPGColleges';
import CollegeComparison from '@/components/pg/CollegeComparison';
import StateWisePGColleges from '@/components/pg/StateWisePGColleges';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const PGColleges = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Top PG Medical Colleges in India - Best MD/MS Colleges | AdmissionHands"
        description="Discover top PG medical colleges in India for MD and MS courses. Compare fees, rankings, and admission processes."
        keywords="top PG medical colleges, best MD MS colleges, medical college rankings, PG medical college fees"
        ogTitle="Top PG Medical Colleges in India - Best MD/MS Colleges"
        ogDescription="Complete list of top medical colleges for postgraduate courses in India."
      />
      
      <PGCollegesHero />
      <TopPGColleges />
      <CollegeComparison />
      <StateWisePGColleges />
      <CTA />
    </div>
  );
};

export default PGColleges;