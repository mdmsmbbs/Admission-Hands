import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MSCoursesHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container-custom text-center">
        <Badge className="mb-4 bg-indigo-600 text-white">Master of Surgery</Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          MS <span className="text-indigo-600">Courses</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Master surgical specializations and advance your career with hands-on expertise in modern surgical techniques and patient care.
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700">Explore Specializations</Button>
      </div>
    </section>
  );
};

export default MSCoursesHero;