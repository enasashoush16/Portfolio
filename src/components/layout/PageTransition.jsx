import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/fadeIn.js';

export default function PageTransition({ children, className = 'page' }) {
  return (
    <motion.div
      animate="visible"
      className={className}
      exit="exit"
      initial="hidden"
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
}
