import React from "react";
import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(46, 49, 82, 0.08)" }}
      className={`glass-card p-6 md:p-8 hover:border-accent-gold/40 hover:bg-white transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
