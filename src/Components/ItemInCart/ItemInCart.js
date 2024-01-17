import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import './ItemInCart.css'
import { deleteItemInCart } from '../../redux/cart/reducer';

const ItemInCart = ({ game }) => {
  const dispatch = useDispatch()
  return (
    
    <div className='item'>
      <img className='item-img' src={game.image} alt={game.title} />
      <h5 className='item-title'>{game.title}</h5>
      <RiDeleteBin5Line onClick={() => dispatch(deleteItemInCart(game.id))} size={20} />
    </div>
  );
};

export default ItemInCart;