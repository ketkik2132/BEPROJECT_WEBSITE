
import React from "react";
import './content2Reviews.styles.scss';
import { useState } from "react";
import { firestore } from "../../firebase/firebase.utils";




const Content2=(props)=>{
  const [info , setInfo] = useState([]);
  const data1=props.contact;
  const Fetchdata = ()=>{
    firestore.collection("servicecenter").where("contact", "==", data1).get().then((querySnapshot) => {
         
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
           
            setInfo(arr => [...arr , data]);
              
        });
    })
  }
  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
      Fetchdata();
    });
    const reviews=info.review;
    return (
      <div>
       
        
      {
          info.map((data) => (
            data.review.map((r,index)=>(
              <h6 className="review-text">{index+1}.{r}</h6>
            ))
         
         
          ))

          
      }
      {
        
      }

      </div>

  );

}



  export default Content2;