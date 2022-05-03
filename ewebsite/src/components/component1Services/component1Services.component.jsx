//for services on shop details page
import React from "react";
import './component1Services.styles.scss';
import SHOP_DATA from "../../pages/shop/shop.data";
import {Link} from 'react-router-dom';
import { useState } from "react";

import { connect } from "react-redux";
import { addItem ,AddCart} from "../../redux/cart/cart.actions";


class Content1 extends React.Component{
  constructor(props) {
    super(props)
   
}

componentDidMount(){
  const data_s=this.props.service;
  console.log(data_s.length);
}
  render(){
   
     return(
       <div className="Maindiv">
        
         {this.props.service.map((s,index)=>(
              <div key={index} className="rowdiv"> 

              <div style={{marginTop:'10px'}}>
              <big className="service_text">{s.servicename} </big> <big> Rs.{s.serviceprice}</big>
              <span className="button1" style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(s)}>Add Cart</span>
              </div>
   
              </div>
         ))}

         <span className="button2"><Link to="/cartPage">Proceed</Link></span>
       </div>
     )
  }
}
/*const getFormattedPrice = (price) => `Rs.${price}`;

  
const mapDispatchToProps= dispatch=>({
  addItem: item=>dispatch(addItem(item))
  });

function Content1(props){

  const [checkedState, setCheckedState] = useState(
    new Array(props.service.length).fill(false)
);


const [total, setTotal] = useState(0);

const handleOnChange = (position) => {
  addItem(props.service[position]);
  const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
  );

  setCheckedState(updatedCheckedState);
    
  const totalPrice = updatedCheckedState.reduce(
    (sum, currentState, index) => {
      if (currentState === true) {
       
        
        return sum + props.service[index].serviceprice;
      }
      return sum;
    },
    0
  );

  setTotal(totalPrice);
};
return(
  <div className="App">
        
        <ul className="service-list">
          {props.service.map((s, index) => {
            return (
              <li key={index}>
                <div className="service-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={s.servicename}
                      value={s.servicename}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{s.servicename}</label>
                  </div>
                  <div className="right-section">{getFormattedPrice(s.serviceprice)}</div>
                </div>
              </li>
            );
          })}
          <li>
            <div className="service-list-item">
              <div className="left-section">Total:</div>
              <div className="right-section">{getFormattedPrice(total)}</div>
            </div>
          </li>
        </ul>
      </div>
  
  
  
  );
  
/*
return(
<div className="App">
      
      <ul className="service-list">
        {props.service.map(({ servicename, serviceprice ,serviceid}, index) => {
          return (
            <li key={index}>
              <div className="service-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={servicename}
                    value={servicename}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{servicename}</label>
                </div>
                <div className="right-section">{getFormattedPrice(serviceprice)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="service-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>



);*/

  /*
  <div className="App">
           <ul className="service-list"></ul>
           </div>{props.service.map((s)=>
           /*<div key={s.serviceid} className="servicelist">
             <big className="servicesname">{s.serviceid}. {s.servicename}</big> <big className="serviceprice"> Rs. {s.serviceprice}</big>
           </div>*/
          /* <li key={s.serviceid}>
             <div className="service-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${s.serviceid}`}
                    name={s.servicename}
                    value={s.servicename}
                    checked={checkedState[s.serviceid]}
                    onChange={() => handleOnChange(s.serviceid)}
                  />
                  <label htmlFor={`custom-checkbox-${s.serviceid}`}>{s.servicename}</label>
                </div>
                <div className="right-section">{getFormattedPrice(s.serviceprice)}</div>
              </div>

           </li>
           
             )
             }*/
    
  /*  <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    
  </div>
);*/
/*}
*/
  //export default connect(null,mapDispatchToProps)(Content1);
//export default Content1;

function mapDispatchToProps(dispatch){
  return{
     // actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
      AddCart:item=>dispatch(AddCart(item))
   
  }
}
export default connect(null,mapDispatchToProps)(Content1)
