import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Stethoscope, Heart, Baby, X, Syringe, Brain, Wind, Ambulance, Microscope, Bug, Pill, Search, Home, CircleDot, Zap, Activity, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const mdSpecializations = [
  { id: 'general-medicine', name: 'General Medicine', path: '/pg-medical/md-courses/general-medicine', icon: Heart, color: 'text-red-500' },
  { id: 'pediatrics', name: 'Pediatrics', path: '/pg-medical/md-courses/pediatrics', icon: Baby, color: 'text-pink-500' },
  { id: 'radiodiagnosis', name: 'Radiodiagnosis', path: '/pg-medical/md-courses/radiodiagnosis', icon: X, color: 'text-blue-500' },
  { id: 'anesthesiology', name: 'Anesthesiology', path: '/pg-medical/md-courses/anesthesiology', icon: Syringe, color: 'text-green-500' },
  { id: 'psychiatry', name: 'Psychiatry', path: '/pg-medical/md-courses/psychiatry', icon: Brain, color: 'text-purple-500' },
  { id: 'respiratory-medicine', name: 'Respiratory Medicine', path: '/pg-medical/md-courses/respiratory-medicine', icon: Wind, color: 'text-cyan-500' },
  { id: 'emergency-medicine', name: 'Emergency Medicine', path: '/pg-medical/md-courses/emergency-medicine', icon: Ambulance, color: 'text-red-600' },
  { id: 'pathology', name: 'Pathology', path: '/pg-medical/md-courses/pathology', icon: Microscope, color: 'text-amber-500' },
  { id: 'microbiology', name: 'Microbiology', path: '/pg-medical/md-courses/microbiology', icon: Bug, color: 'text-orange-500' },
  { id: 'pharmacology', name: 'Pharmacology', path: '/pg-medical/md-courses/pharmacology', icon: Pill, color: 'text-indigo-500' },
  { id: 'forensic-medicine', name: 'Forensic Medicine', path: '/pg-medical/md-courses/forensic-medicine', icon: Search, color: 'text-gray-600' },
  { id: 'community-medicine', name: 'Community Medicine', path: '/pg-medical/md-courses/community-medicine', icon: Home, color: 'text-teal-500' },
  { id: 'immunohematology', name: 'Immunohematology', path: '/pg-medical/md-courses/immunohematology', icon: CircleDot, color: 'text-rose-500' },
  { id: 'nuclear-medicine', name: 'Nuclear Medicine', path: '/pg-medical/md-courses/nuclear-medicine', icon: Zap, color: 'text-yellow-500' },
  { id: 'geriatrics', name: 'Geriatrics', path: '/pg-medical/md-courses/geriatrics', icon: Activity, color: 'text-violet-500' },
  { id: 'sports-medicine', name: 'Sports Medicine', path: '/pg-medical/md-courses/sports-medicine', icon: Target, color: 'text-emerald-500' },
  { id: 'dermatology', name: 'Dermatology', path: '/pg-medical/md-courses/dermatology', icon: CircleDot, color: 'text-pink-400' },
  { id: 'family-medicine', name: 'Family Medicine', path: '/pg-medical/md-courses/family-medicine', icon: Home, color: 'text-green-600' },
];

interface MDSidebarProps {
  className?: string;
}

const MDSidebar: React.FC<MDSidebarProps> = ({ className }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "sticky top-24 h-fit bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm p-6 min-w-[280px]",
        className
      )}
    >
      <motion.div 
        className="flex items-center gap-3 mb-6 pb-4 border-b border-border/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-2 bg-primary/10 rounded-lg">
          <Stethoscope className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-semibold text-lg text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          MD Specializations
        </h3>
      </motion.div>
      
      <nav className="space-y-1">
        {mdSpecializations.map((specialization, index) => {
          const IconComponent = specialization.icon;
          const isActive = currentPath === specialization.path;
          
          return (
            <motion.div
              key={specialization.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ x: 4 }}
            >
              <Link
                to={specialization.path}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden border",
                  isActive
                    ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl border-primary/50 transform scale-[1.02]"
                    : "hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30 text-muted-foreground hover:text-foreground hover:shadow-lg hover:border-primary/20 border-transparent hover:transform hover:scale-[1.01]"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  isActive 
                    ? "bg-primary-foreground/20" 
                    : "bg-primary/10 group-hover:bg-primary/15"
                )}>
                  <IconComponent className={cn(
                    "h-4 w-4 transition-all duration-300",
                    isActive 
                      ? "text-primary-foreground" 
                      : specialization.color
                  )} />
                </div>
                <span className="text-sm font-medium relative z-10 flex-1">{specialization.name}</span>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : 10,
                    scale: isActive ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-3"
                  animate={{ x: isActive ? 10 : 0 }}
                >
                  {!isActive && (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </motion.div>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-foreground/10 to-transparent rounded-xl"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                  />
                )}
                <div className={cn(
                  "absolute left-0 top-0 h-full w-1 rounded-r-full transition-all duration-300",
                  isActive ? "bg-primary-foreground" : "bg-transparent group-hover:bg-primary/50"
                )} />
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default MDSidebar;