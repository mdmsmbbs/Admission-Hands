import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Stethoscope, Scissors, Eye, Bone, Baby, Heart, Brain, Users, HeadphonesIcon, Zap, Target, CircleDot, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const msSpecializations = [
  { id: 'general-surgery', name: 'General Surgery', path: '/pg-medical/ms-courses/general-surgery', icon: Scissors, color: 'text-red-500' },
  { id: 'orthopedics', name: 'Orthopedics', path: '/pg-medical/ms-courses/orthopedics', icon: Bone, color: 'text-blue-500' },
  { id: 'ophthalmology', name: 'Ophthalmology', path: '/pg-medical/ms-courses/ophthalmology', icon: Eye, color: 'text-green-500' },
  { id: 'ent', name: 'ENT (Otolaryngology)', path: '/pg-medical/ms-courses/ent', icon: HeadphonesIcon, color: 'text-purple-500' },
  { id: 'obstetrics-gynecology', name: 'Obstetrics & Gynecology', path: '/pg-medical/ms-courses/obstetrics-gynecology', icon: Baby, color: 'text-pink-500' },
  { id: 'cardiothoracic-surgery', name: 'Cardiothoracic Surgery', path: '/pg-medical/ms-courses/cardiothoracic-surgery', icon: Heart, color: 'text-red-600' },
  { id: 'neurosurgery', name: 'Neurosurgery', path: '/pg-medical/ms-courses/neurosurgery', icon: Brain, color: 'text-indigo-500' },
  { id: 'plastic-surgery', name: 'Plastic Surgery', path: '/pg-medical/ms-courses/plastic-surgery', icon: Users, color: 'text-amber-500' },
  { id: 'urology', name: 'Urology', path: '/pg-medical/ms-courses/urology', icon: CircleDot, color: 'text-cyan-500' },
  { id: 'pediatric-surgery', name: 'Pediatric Surgery', path: '/pg-medical/ms-courses/pediatric-surgery', icon: Baby, color: 'text-rose-500' },
  { id: 'vascular-surgery', name: 'Vascular Surgery', path: '/pg-medical/ms-courses/vascular-surgery', icon: Activity, color: 'text-emerald-500' },
  { id: 'surgical-oncology', name: 'Surgical Oncology', path: '/pg-medical/ms-courses/surgical-oncology', icon: Target, color: 'text-orange-500' },
];

interface MSSidebarProps {
  className?: string;
}

const MSSidebar: React.FC<MSSidebarProps> = ({ className }) => {
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
          <Scissors className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-semibold text-lg text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          MS Specializations
        </h3>
      </motion.div>
      
      <nav className="space-y-1">
        {msSpecializations.map((specialization, index) => {
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

export default MSSidebar;