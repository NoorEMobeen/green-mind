import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/FallbackPage.css';

const FallbackPage = ({ title, message, redirectTo, redirectText }) => {
  return (
    <motion.div
      className="fallback-page"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="fallback-title">{title}</h1>
      <p className="fallback-message">{message}</p>
      <Link to={redirectTo} className="fallback-link">
        {redirectText}
      </Link>
    </motion.div>
  );
};

export default FallbackPage;
