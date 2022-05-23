import React from "react";
import { firestore } from "../../firebase/firebase.utils";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import { faGlassMartiniAlt } from "@fortawesome/free-solid-svg-icons";
import './currentBooking.styles.scss'
const currentBooking=(props)=>{
    const [info , setInfo] = useState([{
      index:1,
        totalprice:4500,
        userName:'KetkiK',
        email:'ketkik2132@gmail.com',
        services:[
          {
            name:"Carwash",
            
          },{
            name:"Painting"
          }
        ]
    } ]);

      window.addEventListener('load', () => {
        Fetchdata();
      });

      const Fetchdata = async ()=>{
        await firestore.collection("serviceCenters").doc('9568522325').collection('history').get().then((querySnapshot) => {
              
           
             querySnapshot.forEach(element => {

                 var data1 = element.data();
                 console.log(data1);
                 const updatedarray=[...info,{
                   
                   services:data1.services,
                   totalprice:data1.totalprice
                 }];
               setInfo(updatedarray);
                   
             });
         })
       }

       return(

        <div className="div1"><h1>Current Booking</h1>
        {
            info.map((d)=>(
                 
                <p> {d.index}.   Customer Name:{d.userName} 
                <p>Customer Email:Rs. {d.email}</p>       
                <p>Total Price:Rs. {d.totalprice}</p> 
                              
                </p>
                
              ))
        }
        
        </div>
       );
}
export default currentBooking;