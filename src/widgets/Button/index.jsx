import React from "react";
import { motion } from 'framer-motion'
const Button = ({ onClick, className, children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className={className} onClick={onClick}>
      {children}
    </motion.button>
  );
};
export default Button;
