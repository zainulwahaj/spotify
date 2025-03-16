import React from 'react';
import { motion } from 'framer-motion';

const PlaylistCard = ({ playlist }) => {
  return (
    <motion.div
      className="playlist-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
        width="100%"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </motion.div>
  );
};

export default PlaylistCard;
