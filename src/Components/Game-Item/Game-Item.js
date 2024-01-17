import React from 'react';
import './Game-Item.css'
import GameCover from '../Game-Cover/Game-Cover';
import GameBuy from '../Game-Buy/Game-Buy';
import GameGenre from '../Game-Genre/Game-Ganre';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';

const GameItem = ({ game }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  }

  return (
    <div className='game-item' onClick={handleClick}>
      <GameCover image={game.image} />
      <div className='game-item__details'>
        <div className='game-item__title'>{game.title}</div>
        <div className='game-item__genre'>
          {game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
        </div>
      </div>
      <div className='game-item__buy'>
        <GameBuy game={game} />
      </div>
    </div>
  );
};

export default GameItem;