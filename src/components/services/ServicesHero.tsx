
import React from 'react';
import SupportSection from './SupportSection';
import { Card, CardContent } from '@/components/ui/card';

const ServicesHero = () => {
  return (
    <section className="hero-section section-padding-small">
      <div className="hero-overlay"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-white">Trusted by 1200+ medical students</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Personalized <span className="text-accent">Admission Solutions</span> for Every Medical Aspirant
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Admission Hands, we provide expert-led counseling designed to help you secure admission in top medical colleges across India — with complete support, stress-free guidance, and absolute clarity at every step.
          </p>
        </div>

        <Card className="card-elegant max-w-4xl mx-auto backdrop-blur-sm bg-white/95 overflow-hidden">
          <CardContent className="p-0">
            <div style={{ background: 'var(--gradient-primary)' }} className="h-2 w-full"></div>
            <div className="p-6 md:p-8">
              <SupportSection />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesHero;
