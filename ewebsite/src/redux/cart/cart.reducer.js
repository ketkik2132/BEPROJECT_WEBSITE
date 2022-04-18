import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  cartItems:[],
  Carts:[]
};
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden
        };
        case CartActionTypes.ADD_ITEM:
          return{
            ...state,
            cartItems:[...state.cartItems,action.payload]
          };

          case CartActionTypes.ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.serviceid,
                    quantity:1,
                    name:action.payload.servicename,
                    price:action.payload.serviceprice
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.serviceid,
                        quantity:1,
                        name:action.payload.servicename,
                        price:action.payload.serviceprice
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }

            case DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=state.Carts[action.payload].id
                    })
                   
                }
      default:
        return state;
    }
  };
  
  export default cartReducer;