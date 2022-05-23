//styling for each individual shop page
import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import SHOP_DATA from "../shop/shop.data";
import './shopdetails.styles.scss';
import Photogrid from "react-facebook-photo-grid";
import CoolTabs from 'react-cool-tabs';
import { useState } from "react";
import Content1 from "../../components/component1Services/component1Services.component";
import Content2 from "../../components/component2Reviews/content2Reviews.component";
import { firestore } from "../../firebase/firebase.utils";
const images = ['https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 

'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/1131221/pexels-photo-1131221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];



class ShopDetails extends React.Component{
   
   
    
        render(){
          
            let getId=this.props.match.params.id;
            //console.log(getId);
            
            const data=SHOP_DATA[0].items[getId-1];
            console.log(data.services[1]);
            return(
              
                <div className='maindiv'>
                  <div className="innerdiv">
                  <div className='shopimages'>
                  <div ><Photogrid width={1200} images={images} ></Photogrid></div>
                  
                  </div>

                  <div className='shopdesc'>
                    <div ><big className="shop-name" >{data.name}</big></div>
                    <div> <big className="shop-location"> {data.price}</big> </div>
                    <div><big className="shop-location">Contact: {data.contact}</big></div>
                   
                                        <div className="button-array"> 
                                        <button className='custom-button' > Add review</button>  
                                        <button className='custom-button' onClick={(e) => {
            e.preventDefault();
            window.open("https://maps.google.com?q="+data.lat+","+data.lng );}}> Location </button>  </div>
                    
                  </div>
                 
                  <div className='shoptabs'>
                 <CoolTabs
	       tabKey={'1'}
	       style={{ width:  1300, background:  'white',font:'Arial, Helvetica, sans-serif',fontFamily: "Cochin" }}
	       activeTabStyle={{ background:  'white', color:  'red',fontWeight:"800" ,fontSize: 17}}
	       unActiveTabStyle={{ background:  'white', color:  'black',fontWeight:"600",fontSize: 17 }}
	       activeLeftTabBorderBottomStyle={{ background:  'red', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  'red', height:  4 }}
	       tabsBorderBottomStyle={{ background:  'black', height:  4 }}
	       leftContentStyle={{ background:  'white' }}
	       rightContentStyle={{ background:  'white' }}
	       leftTabTitle={'Services'}
	       rightTabTitle={'Reviews'}
	       leftContent={<Content1 id={getId} service={data.services}/>}
	       rightContent={<Content2 contact={data.contact}></Content2>}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>
                  </div>
                  


                
      
       

                  </div>
               
              
              
              
              
                
              
              </div>
      
             
            );
        }  
    
}

export default  ShopDetails;





