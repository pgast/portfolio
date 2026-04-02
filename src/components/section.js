import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
