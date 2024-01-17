import React from 'react';
import './Game-Genre.css'

const GameGenre = ({ genre }) => {
  return (
    <div className='game-genre'>
      {genre}
    </div>
  );
};

export default GameGenre;