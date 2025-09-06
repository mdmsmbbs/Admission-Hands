import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MDCoursesHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container-custom text-center">
        <Badge className="mb-4 bg-purple-600 text-white">Doctor of Medicine</Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          MD <span className="text-purple-600">Courses</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore comprehensive MD specializations and advance your medical career with specialized expertise in diagnosis and treatment.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">Explore Specializations</Button>
      </div>
    </section>
  );
};

export default MDCoursesHero;