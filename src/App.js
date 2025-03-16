import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import PlaylistCard from './components/PlaylistCard';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Example playlists
  const playlists = [
    { id: '74vTXkMtdbacGctHCl8qd6' },
    { id: '5fWwUsy2sNczpgBvV09Ruv' },
    { id: '3qkUmb53AAraPUrXTVSnbN' },
    { id: '5GhuzUSfX7gSzsFhIc3LGx' },
    { id: '1gN9D7S280hxTIL65VBu7T' },
    { id: '24cJODd9keQjpSwnb1ItsR' },
    { id: '62cNX3PrZICGtfl2j00fm2' },
    { id: '0dhwUUTsJUeNA9oUZbm7m8' },
    { id: '40w1a3tPCSlMno6fwOyF0B' },
  ];

  return (
    <motion.div
      className="app"
      /* Framer Motion lets us animate layout changes or background transitions if you want */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />

      {/* Toggle button (optional) */}
      <button
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>

      <main>
        <div className="playlist-grid">
          {playlists.map((playlist, index) => (
            <PlaylistCard key={index} playlist={playlist} />
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default App;
