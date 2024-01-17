import React from 'react';
import './Game-Buy.css';
import { useDispatch } from 'react-redux';
import Button from '../button/button';
import { setItemInCart } from '../../redux/cart/reducer';

const GameBuy = ({ game }) => {

  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.stopPropagation()
    dispatch(setItemInCart(game))
  }

  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{game.price} сом.</span>
      <Button type='primary' onClick={handleClick}>В корзину</Button>
    </div>
  );
};

export default GameBuy;