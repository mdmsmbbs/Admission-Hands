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
        "sticky top-24 h-fit bg-card border border-border rounded-lg shadow-[var(--shadow-soft)] p-6 min-w-[280px]",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-6">
        <Stethoscope className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg text-foreground">MD Specializations</h3>
      </div>
      
      <nav className="space-y-2">
        <Link
          to="/pg-medical/md-courses"
          className={cn(
            "flex items-center justify-between p-3 rounded-md transition-colors group",
            currentPath === '/pg-medical/md-courses'
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="font-medium">Overview</span>
          {currentPath === '/pg-medical/md-courses' && (
            <ChevronRight className="h-4 w-4" />
          )}
        </Link>
        
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
                "flex items-center justify-between p-3 rounded-md transition-colors group",
                currentPath === specialization.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-sm">{specialization.name}</span>
              {currentPath === specialization.path ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  );
};

export default MDSidebar;