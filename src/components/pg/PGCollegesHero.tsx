import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PGCollegesHero = () => {
  return (
    <section className="hero-section section-padding">
      <div className="hero-overlay"></div>
      <div className="container-custom text-center relative z-10">
        <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm">Top PG Medical Colleges</Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Best <span className="text-accent">PG Medical Colleges</span> in India
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover top-ranked medical colleges offering excellent postgraduate programs with world-class infrastructure and experienced faculty.
        </p>
        <Button className="btn-accent px-8 py-3 text-lg">Explore Colleges</Button>
      </div>
    </section>
  );
};

export default PGCollegesHero;