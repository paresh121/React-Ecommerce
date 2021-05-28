import React from 'react';
import './cart-icon.scss';
import {connect} from 'react-redux';
import {cartAction} from '../../redux/cart/cart-action'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
const CartIcon = ({cartAction}) => (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={cartAction}/>
    </div>
  );
const mapDispatchToProps=dispatch=>({
    cartAction:()=> dispatch( cartAction()),
})
  export default connect(null, mapDispatchToProps)(CartIcon);