import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center' }} // ensures the text & equalizer are centered
    >
      <h1>i heart music</h1>

      {/* Equalizer with 5 bars */}
      <div className="equalizer">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <p>muheheheheheheheheheh 🎶</p>
    </motion.header>
  );
};

export default Header;
