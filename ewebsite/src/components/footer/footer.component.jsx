import React from "react";
import './footer.styles.scss';
import {Link} from 'react-router-dom';
const Footer=()=>(
    <div className="footer">
 <h2 style={{ color: "gray", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        MechKonnect: Vehicle services at your finger tip
      </h2>
      <div className="optionsection">
      <div className="col1">
          <h3 className="heading">ADDRESS</h3>
         <h4 className="option">XYZ Apartments, Gandhi Road,
          Pune, Maharashtra-411001.</h4> 
          <h3 className="heading">CONTACT US</h3>
         <h4 className="option">1234512345</h4> 
         <h4 className="option">beproject202022@gmail.com</h4> 
      </div>

      

      <div className="col1">
          <h3 className="heading">QUICK LINKS</h3>
           <ul>
             <li className="listelement"><Link className="option" to="/">Home</Link>  </li>
             <li className="listelement"><Link className="option" to="/shop">Shop</Link></li>
             <li className="listelement"><Link className="option" to="/chooseuser">SignUp</Link></li>
             <li className="listelement"><Link className="option" to="/aboutus">AboutUs</Link></li>
           </ul>
      </div>
       
      <div className="col1">
          <h3 className="heading">SERVICES PROVIDED</h3>
           <ul>
             <li className="listelement"><Link className="option" to="/twowheeler">Two Wheelers</Link>  </li>
             <li className="listelement"><Link className="option" to="/twowheeler">Four Wheelers</Link></li>
             
           </ul>
      </div>

      </div>
    </div>
   
);

export default Footer;