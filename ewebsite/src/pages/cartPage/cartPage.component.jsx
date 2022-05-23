import React, { Component } from 'react'
import { connect } from "react-redux";
import {DeleteCart} from "../../redux/cart/cart.actions";
import { useState } from 'react';
import './cartPage.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import DatePicker from 'react-date-picker';
import CustomButton from '../../components/custom-button/custom-button.component';
import { firestore } from '../../firebase/firebase.utils';
import store from '../../redux/store';
function Cart({items,DeleteCart}){

    const contact='43521231343';
    let ListCart = [];
    let TotalCart=0;
    const [value, onChange1] = useState(new Date());
   Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
   
    function TotalPrice(price){
        return Number(price).toLocaleString('en-US');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
               
            firestore.collection("serviceCenters").doc("9568522325").collection('history').doc().set({
              date:value,
              services:ListCart,
              totalprice:TotalCart,
              userName:store.getState().user.currentUser,

    
            }).then(function() {
              console.log("Frank created");
            });
            
           alert('Booking Confirmed!!');
          } catch (error) {
            console.log(error);
          }
    
    
      }
    return(
        <div>
            <div>

                <table className='cartTable'>
                    <thead>
                    <tr>
                       <th></th>
                        <th>Service</th>
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
                
                </tbody>
                    
                </table>
                </div>

                <div className='totalprice'>

            <table>
            <tbody>
                    <tr  className='total'>
                    <td colSpan="5">Total Cart </td>
                    <td >Rs. {Number(TotalCart).toLocaleString('en-US')} </td>

                     </tr>
                    </tbody>

            </table>
            </div> 
            <h2 className='h2class'>Select Day and Date for servicing:</h2>               
            <DatePicker className="dates" onChange={onChange1} value={value} />
            <div className='confirm'><CustomButton onClick={handleSubmit}>Confirm</CustomButton></div>
            
            <StripeCheckoutButton className = 'stripe'
                stripekey = {process.env.REACT_APP_KEY} 
                price = {TotalCart}
                 />
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

