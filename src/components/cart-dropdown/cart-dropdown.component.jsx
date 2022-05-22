import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton><Link to="/cartPage">GO TO CHECKOUT</Link></CustomButton>
  </div>
);

export default CartDropdown;
