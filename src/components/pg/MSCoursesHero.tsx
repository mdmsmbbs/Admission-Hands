import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MSCoursesHero = () => {
  return (
    <section className="hero-section section-padding">
      <div className="hero-overlay"></div>
      <div className="container-custom text-center relative z-10">
        <Badge className="mb-6 bg-secondary/10 text-secondary border border-secondary/20 backdrop-blur-sm">Master of Surgery</Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          MS <span className="text-secondary">Courses</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Master surgical specializations and advance your career with hands-on expertise in modern surgical techniques and patient care.
        </p>
        <Button className="btn-secondary px-8 py-3 text-lg">Explore Specializations</Button>
      </div>
    </section>
  );
};

export default MSCoursesHero;