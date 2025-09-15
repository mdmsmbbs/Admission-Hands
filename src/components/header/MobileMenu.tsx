
import { Menu, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  isActive: (path: string) => boolean;
  isMBBSIndiaRoute?: boolean;
}

const MobileMenu = ({ isOpen, onToggle, isActive, isMBBSIndiaRoute = false }: MobileMenuProps) => {
  const [isIndiaExpanded, setIsIndiaExpanded] = useState(false);
  const [isPGExpanded, setIsPGExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsIndiaExpanded(false);
      setIsPGExpanded(false);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Scroll to the active state if the India menu is expanded
  useEffect(() => {
    if (isIndiaExpanded && scrollContainerRef.current) {
      const activeItem = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [isIndiaExpanded]);

  // Reordered states list according to requirements
  const states = [
    "Deemed Universities", "Karnataka", "Uttar Pradesh", "Rajasthan",
    "Maharashtra", "Madhya Pradesh", "Haryana", "Himachal Pradesh", 
    "Bihar", "West Bengal", "Uttarakhand", "Chhattisgarh",
    "Telangana", "Kerala", "Gujarat", 
    "Delhi", "Odisha"
  ];

  return (
    <>
      <div className="flex items-center mobile-menu-container">
        {/* No contact icons in mobile header - removed the ContactIcons component */}
        <button
          onClick={onToggle}
          className="mobile-menu-button p-2 ml-2 rounded-md text-medical-600 hover:bg-medical-50 focus:outline-none focus:ring-2 focus:ring-medical-200"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white overflow-y-auto z-50 pt-0">
          <div className="pt-4 pb-4 container-custom">
            <nav className="py-2 space-y-3">
              <Link 
                to="/" 
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => setIsIndiaExpanded(!isIndiaExpanded)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-base",
                    isActive('/mbbs-india') 
                      ? "bg-gradient-to-r from-medical-50 to-medical-100 text-medical-700 shadow-sm border-l-4 border-medical-500" 
                      : "text-medical-600 hover:bg-gray-50"
                  )}
                >
                  <span className={cn("font-bold", isActive('/mbbs-india') ? "tricolor-text" : "")}>
                    <span className="inline-flex items-center">
                      <span className="text-tricolor-saffron">M</span>
                      <span className="text-tricolor-white">BBS </span>
                      <span className="text-tricolor-green">India</span>
                    </span>
                  </span>
                  {isIndiaExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {isIndiaExpanded && (
                  <div className="mt-3 space-y-1 bg-gray-50 p-4 rounded-lg bg-tricolor-gradient">
                    <div className="flex justify-end mb-3">
                      <Link 
                        to="/mbbs-india" 
                        className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 bg-white text-medical-600 hover:shadow-md rounded-full transition-all"
                        onClick={onToggle}
                      >
                        <span>MBBS India</span>
                        <ArrowRight className="w-3.5 h-3.5 text-medical-600" />
                      </Link>
                    </div>
                    
                    <div 
                      ref={scrollContainerRef}
                      className="space-y-2 max-h-[60vh] overflow-y-auto pr-1 mbbs-india-submenu"
                      onClick={(e) => e.stopPropagation()} // Prevent background scrolling
                    >
                      {states.map((state) => {
                        const isStateActive = isActive(`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`);
                        return (
                          <Link 
                            key={state}
                            to={`/mbbs-india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`block p-3 text-[15px] bg-white hover:bg-gray-50 rounded-md transition-all transform hover:-translate-y-1 hover:shadow-sm ${
                              isStateActive 
                                ? 'border-l-4 border-medical-500 bg-gradient-to-r from-medical-50 to-white text-medical-700 font-medium shadow-md'
                                : 'text-gray-700 hover:border-l-2 hover:border-medical-300'
                            }`}
                            onClick={onToggle}
                            data-active={isStateActive}
                          >
                            <div className={`font-medium ${isStateActive ? 'text-medical-600 tricolor-text' : ''}`}>
                              {state === "Deemed Universities" ? (
                                <span className="inline-flex items-center">
                                  <span className="text-tricolor-saffron">D</span>
                                  <span className="text-tricolor-white">eemed </span>
                                  <span className="text-tricolor-green">Universities</span>
                                </span>
                              ) : state}
                            </div>
                            <div className={`text-xs ${isStateActive ? 'text-medical-500' : 'text-gray-500'} mt-0.5`}>
                              Medical Colleges
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsPGExpanded(!isPGExpanded)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-base",
                    isActive('/pg-medical') 
                      ? "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 shadow-sm border-l-4 border-purple-500" 
                      : "text-purple-600 hover:bg-gray-50"
                  )}
                >
                  <span className="font-bold text-purple-600">PG</span>
                  {isPGExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {isPGExpanded && (
                  <div className="mt-3 space-y-1 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-end mb-3">
                      <Link 
                        to="/pg-medical" 
                        className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 bg-white text-purple-600 hover:shadow-md rounded-full transition-all"
                        onClick={onToggle}
                      >
                        <span>PG Medical</span>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                      </Link>
                    </div>
                    
                    <div className="space-y-2">
                      <Link 
                        to="/pg-medical/md-courses"
                        className="block p-3 text-[15px] bg-white hover:bg-gray-50 rounded-md transition-all transform hover:-translate-y-1 hover:shadow-sm text-gray-700 hover:border-l-2 hover:border-purple-300"
                        onClick={onToggle}
                      >
                        <div className="font-medium">MD Courses</div>
                        <div className="text-xs text-gray-500 mt-0.5">Doctor of Medicine Specializations</div>
                      </Link>
                      
                      <Link 
                        to="/pg-medical/ms-courses"
                        className="block p-3 text-[15px] bg-white hover:bg-gray-50 rounded-md transition-all transform hover:-translate-y-1 hover:shadow-sm text-gray-700 hover:border-l-2 hover:border-purple-300"
                        onClick={onToggle}
                      >
                        <div className="font-medium">MS Courses</div>
                        <div className="text-xs text-gray-500 mt-0.5">Master of Surgery Specializations</div>
                      </Link>
                      
                      
                      <Link 
                        to="/pg-medical/colleges"
                        className="block p-3 text-[15px] bg-white hover:bg-gray-50 rounded-md transition-all transform hover:-translate-y-1 hover:shadow-sm text-gray-700 hover:border-l-2 hover:border-purple-300"
                        onClick={onToggle}
                      >
                        <div className="font-medium">Top PG Colleges</div>
                        <div className="text-xs text-gray-500 mt-0.5">Best Medical Colleges for PG</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/services" 
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/services') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Services
              </Link>
              
              <Link 
                to="/know-us" 
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/know-us') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Know Us
              </Link>

              <Link 
                to="/terms" 
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors text-base",
                  isActive('/terms') || isActive('/legal') ? "bg-medical-50 text-medical-700 shadow-sm" : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={onToggle}
              >
                Terms
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
