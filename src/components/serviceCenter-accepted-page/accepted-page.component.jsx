import React from "react";
import { Link } from "react-router-dom";
import './accepted-page.styles.scss';
class Accepted extends React.Component{
render(){
    return(
        <div className="accept">
            <h1>Welcome To Home Page!!!</h1>
            
            <div className="box1">
               <Link to='/'><h2>Check current booking</h2></Link> 
            </div> 
            <div className="box2">
               <Link to="/updatedetails"> <h2>Update Details</h2></Link>
            </div>
        </div>
    );
}
}

export default Accepted;

