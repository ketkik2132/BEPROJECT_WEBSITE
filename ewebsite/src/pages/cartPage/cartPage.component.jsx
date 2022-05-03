import React, { Component } from 'react'
import { connect } from "react-redux";
import {DeleteCart} from "../../redux/cart/cart.actions";
import './cartPage.styles.scss';
function Cart({items,DeleteCart}){
    let ListCart = [];
    let TotalCart=0;
   Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });

    function TotalPrice(price){
        return Number(price).toLocaleString('en-US');
    }
    return(
        <div>
            <div>

                <table className='cartTable'>
                    <thead>
                    <tr>
                       <th></th>
                        <th>Name</th>
                        <th >Price</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>    
                            <td ><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>-</i></td>
                            <td >{item.name}</td>
                            <td >Rs. {item.price} </td>
                        </tr>
                        )
                    })
                        
                }
                <tr className='total'>
                    <td colSpan="5">Total Carts</td>
                    <td >Rs. {Number(TotalCart).toLocaleString('en-US')} </td>
                </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
    
}
const mapStateToProps = state =>{
      console.log(state)
      return{
          items:state.cart
      }
  }
//export default Cart;
export default connect(mapStateToProps,{DeleteCart})(Cart);

