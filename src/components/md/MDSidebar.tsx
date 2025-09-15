import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

const mdSpecializations = [
  { id: 'general-medicine', name: 'General Medicine', path: '/pg-medical/md-courses/general-medicine' },
  { id: 'pediatrics', name: 'Pediatrics', path: '/pg-medical/md-courses/pediatrics' },
  { id: 'radiodiagnosis', name: 'Radiodiagnosis', path: '/pg-medical/md-courses/radiodiagnosis' },
  { id: 'anesthesiology', name: 'Anesthesiology', path: '/pg-medical/md-courses/anesthesiology' },
  { id: 'psychiatry', name: 'Psychiatry', path: '/pg-medical/md-courses/psychiatry' },
  { id: 'respiratory-medicine', name: 'Respiratory Medicine', path: '/pg-medical/md-courses/respiratory-medicine' },
  { id: 'emergency-medicine', name: 'Emergency Medicine', path: '/pg-medical/md-courses/emergency-medicine' },
  { id: 'pathology', name: 'Pathology', path: '/pg-medical/md-courses/pathology' },
  { id: 'microbiology', name: 'Microbiology', path: '/pg-medical/md-courses/microbiology' },
  { id: 'pharmacology', name: 'Pharmacology', path: '/pg-medical/md-courses/pharmacology' },
  { id: 'forensic-medicine', name: 'Forensic Medicine', path: '/pg-medical/md-courses/forensic-medicine' },
  { id: 'community-medicine', name: 'Community Medicine', path: '/pg-medical/md-courses/community-medicine' },
  { id: 'immunohematology', name: 'Immunohematology', path: '/pg-medical/md-courses/immunohematology' },
  { id: 'nuclear-medicine', name: 'Nuclear Medicine', path: '/pg-medical/md-courses/nuclear-medicine' },
  { id: 'geriatrics', name: 'Geriatrics', path: '/pg-medical/md-courses/geriatrics' },
  { id: 'sports-medicine', name: 'Sports Medicine', path: '/pg-medical/md-courses/sports-medicine' },
  { id: 'dermatology', name: 'Dermatology', path: '/pg-medical/md-courses/dermatology' },
  { id: 'family-medicine', name: 'Family Medicine', path: '/pg-medical/md-courses/family-medicine' },
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
      
      <nav className="space-y-2">
        
        {mdSpecializations.map((specialization, index) => (
          <motion.div
            key={specialization.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={specialization.path}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg transition-all duration-300 group relative overflow-hidden",
                currentPath === specialization.path
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg transform scale-[1.02]"
                  : "hover:bg-gradient-to-r hover:from-muted hover:to-muted/50 text-muted-foreground hover:text-foreground hover:shadow-md hover:transform hover:scale-[1.01]"
              )}
            >
              <span className="text-sm font-medium relative z-10">{specialization.name}</span>
              <motion.div
                initial={false}
                animate={{
                  opacity: currentPath === specialization.path ? 1 : 0,
                  scale: currentPath === specialization.path ? 1 : 0.8
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ x: 2 }}
              >
                {currentPath !== specialization.path && (
                  <ChevronRight className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
                )}
              </motion.div>
              {currentPath === specialization.path && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  );
};

export default MDSidebar;