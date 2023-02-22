import React from "react";
import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: 100 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
