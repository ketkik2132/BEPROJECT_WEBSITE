import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem =item=>({
  type: CartActionTypes.ADD_ITEM,
  payload:item
});

export function AddCart(payload){
  return {
      type:'ADD_CART',
      payload
  }
}

export function DeleteCart(payload){
  return{
      type:'DELETE_CART',
      payload
  }
}