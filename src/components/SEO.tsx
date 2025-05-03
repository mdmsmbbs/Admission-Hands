
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'AdmissionHands - Expert Medical College Admission Guidance',
  description = 'Get expert guidance for MBBS, MD/MS admissions in top medical colleges. Personalized counseling, guaranteed results.',
  keywords = 'medical admissions, MBBS admission, medical college counseling, NRI quota, medical education',
  ogTitle = 'AdmissionHands - Medical College Admission Experts',
  ogDescription = 'Expert guidance for medical college admissions in India. Get personalized counseling for MBBS and MD/MS.',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogUrl = 'https://www.admissionhands.com',
  canonical = '',
  structuredData,
}) => {
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Performance optimization preloading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      
      {/* LCP optimization - preload hero image */}
      <link 
        rel="preload" 
        as="image" 
        href="https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1470&auto=format&fit=crop&quality=80"
        fetchpriority="high"
      />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AdmissionHands" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@admission_hands" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Web Vitals optimization */}
      <meta name="theme-color" content="#2563EB" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
