
import React from "react";
import './content2Reviews.styles.scss';
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase.utils";




const Content2=(props)=>{
  const [info , setInfo] = useState([
    {
      rating: 4,
      review: "Good service"
    }


  ]);
  const data1=props.contact;
  const Fetchdata = async ()=>{
   await firestore.collection("serviceCenters").doc('43521231343').collection('review').get().then((querySnapshot) => {
         
      
        querySnapshot.forEach(element => {
            var data1 = element.data();
            /*console.log(data1);
            setInfo(info => [...info , data1]);
            //setInfo(info=>info.concat(data1));
            console.log(info);*/
            const updatedarray=[...info,{
              review:data1.review,
              rating:data1.rating
            }];
          setInfo(updatedarray);
              
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
        info.map((d)=>(
          <p>{d.review}  Rating: {d.rating}</p>
        ))
         /* info.map((data) => (
            data.review.map((r,index)=>(
              <h6 className="review-text">{index+1}.{r}</h6>
            ))
         
         
          ))*/

          
      }
      {
        
      }

      </div>

  );

}



  export default Content2;