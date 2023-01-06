import React from "react";
import { motion } from "framer-motion";

import "../Pages/Desktop/Desktop.scss";

const animation = {
  initial: { opacity: 1, y: "100%" },
  animate: { opacity: 1, y: "0%" },
  exit: { opacity: 1, y: "-100%" },
};
function AnitmationPage({ children }) {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      style={{ height: "100%" }}
      className="desktop"
    >
      {children}
    </motion.div>
  );
}

export default AnitmationPage;
