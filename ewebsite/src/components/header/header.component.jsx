import React from "react";
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header=({currentUser,hidden})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
              SHOP
          </Link>
          <Link className="option" to="/aboutus">
              ABOUT
          </Link>
         
              
          {
              currentUser?
             ( <div className="option" onClick={()=>auth.signOut()}><Link to='/'>SIGN OUT</Link></div>)
              :
              (<Link className="option" to='/chooseuser'>
                  SIGN IN
              </Link>
              )}

              <CartIcon></CartIcon>
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(Header);
