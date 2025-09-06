import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PGCollegesHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-custom text-center">
        <Badge className="mb-4 bg-purple-600 text-white">Top PG Medical Colleges</Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Best <span className="text-purple-600">PG Medical Colleges</span> in India
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover top-ranked medical colleges offering excellent postgraduate programs with world-class infrastructure and experienced faculty.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">Explore Colleges</Button>
      </div>
    </section>
  );
};

export default PGCollegesHero;