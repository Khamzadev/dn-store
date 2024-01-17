import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import './CartBlock.css'
import CartMenu from "../Cart-Menu/Cart-Menu";


const CartBlock = () => {

  const [state, setState] = useState(false)
  const items = useSelector(state => state.cart.itemInCart)
  const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

  return (
    <div className="cart-block">
      <div className="circly">{items.length}</div>
      <TiShoppingCart onClick={() => setState(!state)} size={35} className='cart-block__icon' />
      <span className="cart-block__totalprice">{totalPrice} сом</span>
      {
        state && <CartMenu items={items} onClick={() => null} />
      }
    </div>
  );
};
export default CartBlock;