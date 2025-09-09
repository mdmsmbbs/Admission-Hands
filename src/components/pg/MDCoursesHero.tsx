import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MDCoursesHero = () => {
  return (
    <section className="hero-section section-padding">
      <div className="hero-overlay"></div>
      <div className="container-custom text-center relative z-10">
        <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm">Doctor of Medicine</Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          MD <span className="text-accent">Courses</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore comprehensive MD specializations and advance your medical career with specialized expertise in diagnosis and treatment.
        </p>
        <Button className="btn-accent px-8 py-3 text-lg">Explore Specializations</Button>
      </div>
    </section>
  );
};

export default MDCoursesHero;