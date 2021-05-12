import React from 'react';
import './basket-cart-icon.styles.scss'
import Basket from './images/shopping-basket-green.png'

const BasketCartIcon = () => {
    <div className='cart-icon'>
        <Basket className='shopping-icon'/>
        <span className='item-count'>
            0
        </span>
    </div>
}

export default BasketCartIcon;