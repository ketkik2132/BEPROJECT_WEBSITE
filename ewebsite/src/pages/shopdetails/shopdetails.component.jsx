//styling for each individual shop page
import React from "react";
import SHOP_DATA from "../shop/shop.data";
import './shopdetails.styles.scss';

const images = ['https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 

'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];

class ShopDetails extends React.Component{
    constructor(){
super();
    }
    
        render(){
            let getId=this.props.match.params.id;
            //console.log(getId);
            const data=SHOP_DATA[getId].items[getId];
            console.log(data);
            return(
              
                <div className='maindiv'>
                  <div className="innerdiv">
                  <div className='shopimages'>
                  <div ></div>
                  
                  </div>

                  <div className='shopdesc'>
                    <div ><big className="shop-name" >{data.name}</big></div>
                    <div> <big className="shop-location"> {data.price}</big></div>
                    <div className="button-array"> <button className='custom-button'> Add review</button>  <button className='custom-button'> Location </button>  </div>
                    
                  </div>

                  </div>
               
              
              
              
              
                
              
              </div>
      
             
            );
        }  
    
}

export default  ShopDetails;





