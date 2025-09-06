import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PGAdmissionHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container-custom text-center">
        <Badge className="mb-4 bg-green-600 text-white">Admission Process</Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          PG Medical <span className="text-green-600">Admission Process</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Navigate through NEET PG counseling and direct admission procedures with expert guidance for MD/MS courses.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Start Your Journey</Button>
      </div>
    </section>
  );
};

export default PGAdmissionHero;