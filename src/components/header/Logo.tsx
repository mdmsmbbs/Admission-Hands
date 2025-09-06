
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        <img 
          src="/lovable-uploads/73cbc20f-2ca7-4a59-b80b-d2bd8ca71846.png" 
          alt="Admission Hands Logo"
          className="h-8 sm:h-10 md:h-12 w-auto"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
