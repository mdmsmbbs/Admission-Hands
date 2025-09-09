import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PGAdmissionHero = () => {
  return (
    <section className="hero-section section-padding">
      <div className="hero-overlay"></div>
      <div className="container-custom text-center relative z-10">
        <Badge className="mb-6 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">Admission Process</Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          PG Medical <span className="text-primary">Admission Process</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Navigate through NEET PG counseling and direct admission procedures with expert guidance for MD/MS courses.
        </p>
        <Button className="btn-primary px-8 py-3 text-lg">Start Your Journey</Button>
      </div>
    </section>
  );
};

export default PGAdmissionHero;