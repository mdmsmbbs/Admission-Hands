import React from 'react';
import MSCoursesHero from '@/components/pg/MSCoursesHero';
import MSSpecializations from '@/components/pg/MSSpecializations';
import MSEligibility from '@/components/pg/MSEligibility';
import MSCareerProspects from '@/components/pg/MSCareerProspects';
import MSSidebar from '@/components/ms/MSSidebar';
import CTA from '@/components/CTA';
import SEO from '@/components/SEO';

const MSCourses = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="MS Courses - Master of Surgery Specializations | AdmissionHands"
        description="Explore MS course specializations and surgical career opportunities. Complete guide to Master of Surgery programs in India."
        keywords="MS courses, Master of Surgery, surgical specializations, MS admission, postgraduate surgery"
        ogTitle="MS Courses - Master of Surgery Specializations"
        ogDescription="Comprehensive guide to MS courses and surgical specializations in India."
      />
      
      <MSCoursesHero />
      <div className="container-custom flex gap-8 py-8">
        <div className="flex-1">
          <MSSpecializations />
          <MSEligibility />
          <MSCareerProspects />
        </div>
        <MSSidebar />
      </div>
      <CTA />
    </div>
  );
};

export default MSCourses;