import React from "react";
import NotAccepted from "../../components/not-accepted-page/not-accepted.component";
import Accepted from "../../components/serviceCenter-accepted-page/accepted-page.component";
import {firestore} from '../../firebase/firebase.utils';
class SHome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            key:'',
          accepted: false,
          
        };
      }
   componentDidMount(){
    const ref = firestore.collection('serviceCenters').doc("9568522325");
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          accepted: board.accepted
        });
        var i=doc.data().accepted
        console.log(doc.data().accepted);
      } else {
        console.log("No such document!");
      }
    });
   }
render(){
    let display;

    if(this.state.accepted) {
        display = <Accepted></Accepted>;
      } else {
        display = <NotAccepted/>;
      }
    return(
        <div>
        {display}
        </div>
        
      
    );
}
}

export default SHome;