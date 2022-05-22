import React from "react";
import './not-accepted.styles.scss';
class NotAccepted extends React.Component{
render(){
    return(
        <div className="notaccept">
            <h1>Not Yet accepted</h1>
            <h2>Your Request to join the platform has not yet been accepted by Admin.</h2>
            <h2>Please check again with us after sometime. </h2>
        </div>
    );
}
}

export default NotAccepted;

