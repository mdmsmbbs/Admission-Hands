import React from 'react';
import MDCoursesHero from '@/components/pg/MDCoursesHero';
import MDSpecializations from '@/components/pg/MDSpecializations';
import MDEligibility from '@/components/pg/MDEligibility';
import MDCareerProspects from '@/components/pg/MDCareerProspects';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MDCourses = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="MD Courses - Doctor of Medicine Specializations | AdmissionHands"
        description="Explore MD course specializations and career opportunities. Complete guide to Doctor of Medicine programs in India with admission details."
        keywords="MD courses, Doctor of Medicine, medical specializations, MD admission, postgraduate medicine"
        ogTitle="MD Courses - Doctor of Medicine Specializations"
        ogDescription="Comprehensive guide to MD courses and specializations in India."
      />
      
      <MDCoursesHero />
      <MDSpecializations />
      <MDEligibility />
      <MDCareerProspects />
      <CTA />
    </div>
  );
};

export default MDCourses;