
import React, { useRef, useEffect, useState } from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Users, 
  Building,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

const stats = [
  {
    icon: <Trophy className="h-6 w-6 text-medical-500" />,
    value: "95%",
    label: "Success Rate",
    description: "students secured preferred admissions"
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-medical-500" />,
    value: "1200+",
    label: "Success Stories",
    description: "students counselled in top colleges"
  },
  {
    icon: <Users className="h-6 w-6 text-medical-500" />,
    value: "25+",
    label: "Expert Counselors",
    description: "with decades of experience"
  },
  {
    icon: <Building className="h-6 w-6 text-medical-500" />,
    value: "100+",
    label: "College Affiliations",
    description: "Abroad Universities"
  }
];

const testimonials = [
  {
    content: "Admission Hands made the entire admission process seamless and stress-free. Their expertise gave me the confidence to focus on my goals, not the paperwork.",
    name: "Dr. Himanshu Jaiswal",
    rating: 5,
    color: "from-blue-500 to-teal-400"
  },
  {
    content: "From shortlisting colleges to final admission, the team was incredibly supportive and transparent. I couldn't have asked for better guidance.",
    name: "Dr. Shudhranshu",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    content: "The counselors at Admission Hands really understand what students need. Their insights and personalized support made all the difference.",
    name: "Dr. Ankur Singh",
    rating: 5,
    color: "from-orange-500 to-amber-400"
  },
  {
    content: "I was confused about college choices and fee structures. Admission Hands provided clarity and helped me make the right decision at every step.",
    name: "Dr. Yashowardhan Jain",
    rating: 5,
    color: "from-green-500 to-emerald-400"
  },
  {
    content: "Their end-to-end assistance—from documentation to counseling—was exceptional. I'm truly grateful for their professional and ethical approach.",
    name: "Dr. Tejveer Singh",
    rating: 5,
    color: "from-red-500 to-rose-400"
  },
  {
    content: "Admission Hands turned a complex process into a smooth experience. Their guidance felt more like mentorship than consultancy.",
    name: "Dr. Syeeda Rizvi",
    rating: 5,
    color: "from-indigo-500 to-blue-400"
  },
  {
    content: "I trusted them with one of the most important decisions of my life, and they delivered beyond expectations. Highly recommend!",
    name: "Dr. Komal Prajapati",
    rating: 5,
    color: "from-cyan-500 to-sky-400"
  },
  {
    content: "Thanks to Admission Hands, I got into the right college without any stress or confusion. Their commitment to students is unmatched.",
    name: "Dr. Ayanur Rahman",
    rating: 5,
    color: "from-fuchsia-500 to-violet-400"
  }
];

// Using React.memo to prevent unnecessary re-renders
const StatCard = React.memo(({ stat, shouldAnimate }: { stat: typeof stats[0], shouldAnimate: boolean }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 ${shouldAnimate ? 'animate-fade-in' : ''}`}>
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-gradient-to-r from-medical-50 to-teal-50 rounded-full mb-4">
          {stat.icon}
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-medical-600 to-teal-600 bg-clip-text text-transparent">
          {stat.value}
        </h3>
        <h4 className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</h4>
        <p className="text-gray-600 mt-1 text-sm">{stat.description}</p>
      </div>
    </div>
  );
});

const TestimonialCard = React.memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className={`bg-gradient-to-br ${testimonial.color} rounded-xl p-1 shadow-md hover:shadow-lg transition-all duration-300 min-w-[300px] max-w-[350px] flex-shrink-0 mx-2 transform hover:scale-105 hover:-rotate-1`}>
    <div className="bg-white rounded-lg p-5 h-full">
      <div className="flex mb-3">
        {Array(testimonial.rating).fill(0).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <div className="flex mb-4">
        <MessageCircle className="h-5 w-5 mr-2 flex-shrink-0 text-gray-400" />
        <p className="text-gray-700 italic text-sm">{testimonial.content}</p>
      </div>
      
      <div className="flex justify-between items-center mt-auto">
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
          <span className="text-white text-xs font-bold">AH</span>
        </div>
      </div>
    </div>
  </div>
));

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const animationRef = useRef<number | null>(null);

  // Eagerly set visible to improve perceived performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "100px" } // Lower threshold and larger rootMargin for earlier loading
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scrolling for testimonials with continuous animation
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let lastTimestamp = 0;
    const speed = 0.126; // Reduced by 40% from previous value of 0.21
    
    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (scrollContainer && !isPaused) {
        // Move the scroll position
        scrollContainer.scrollLeft += speed * elapsed;
        
        // If we've scrolled to the end of the first set, loop back to start
        const halfwayPoint = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfwayPoint) {
          scrollContainer.scrollLeft = 0;
        }
        
        // Update scroll buttons state
        updateScrollButtonsState();
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };
    
    const updateScrollButtonsState = () => {
      if (!scrollContainer) return;
      
      const halfwayPoint = scrollContainer.scrollWidth / 2;
      setCanScrollLeft(scrollContainer.scrollLeft > 0);
      setCanScrollRight(scrollContainer.scrollLeft < halfwayPoint - scrollContainer.clientWidth);
    };
    
    animationRef.current = requestAnimationFrame(scroll);
    
    // Add event listener for scroll to update button states
    scrollContainer.addEventListener('scroll', updateScrollButtonsState);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener('scroll', updateScrollButtonsState);
    };
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    // Pause auto-scrolling temporarily when manually scrolling
    setIsPaused(true);
    
    const scrollAmount = 320; // Approximate width of a testimonial card + margin
    
    if (direction === 'left') {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    
    // Resume auto-scrolling after a short delay
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Impact & Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming medical aspirations into achievements
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              shouldAnimate={isVisible} 
            />
          ))}
        </div>
        
        {/* Testimonials Section with Horizontal Scroll */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-medical-600 to-teal-600 bg-clip-text text-transparent">What Our Students Say</h3>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleScroll('left')} 
                disabled={!canScrollLeft}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5 text-medical-600" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5 text-medical-600" />
              </button>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Left Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
            
            {/* Scrolling Testimonials */}
            <div 
              className="overflow-x-scroll scrollbar-hide pb-4"
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 1500)} // Longer delay for touch to allow reading
            >
              <div className="flex py-4 px-4 gap-6 min-w-max">
                {/* First set of testimonials */}
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
                {/* Duplicate set for continuous scrolling effect */}
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
            
            {/* Right Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
