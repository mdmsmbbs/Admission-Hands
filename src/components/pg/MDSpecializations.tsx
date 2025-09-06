import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MDSpecializations = () => {
  const specializations = [
    "General Medicine", "Pediatrics", "Dermatology", "Psychiatry", 
    "Radiology", "Pathology", "Anesthesiology", "Emergency Medicine"
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">MD Specializations</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {specializations.map((spec) => (
            <Card key={spec} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold">{spec}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MDSpecializations;