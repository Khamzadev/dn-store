import React, { useState } from 'react';
import Button from '../button/button';
import './Cart-Menu.css'
import ItemInCart from '../ItemInCart/ItemInCart';
import Modal from '../Modal/Modal';

const CartMenu = ({ items, onClick }) => {
  const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

  const [modal, setModal] = useState(false)


  return (
    <div className='cart-menu'>
      <ol className='cart-menu__games-list'>
        {
          items.length > 0 ? (items.map(game => <li><ItemInCart game={game} /></li>)) : 'Корзина пуста'
        }
      </ol>
      {
        items.length > 0 ?
          <div className='cart-menu__arrange'>
            <div className='cart-menu__total-price'>
              <span>Итого:</span>
              <span>{totalPrice} сом</span>
            </div>
            <Button onClick={() => setModal(true)} type='primary' size='m' >Оформить заказ</Button>
            {
              modal && <Modal />
            }
          </div>
          : null
      }
    </div>
  );
};

export default CartMenu;