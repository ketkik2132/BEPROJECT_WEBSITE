
import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx' 
import AboutUs from './pages/aboutUs/aboutus.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import DetailsPage from './pages/userdetail/user-detailpage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import ChooseUser from './pages/chooseUser/chooseuser.component';
import TwoWheeler from './pages/two-wheeler/two-wheeler.component';

import SHOP_DATA from './pages/shop/shop.data';
import CollectionPreview from './components/collection-preview/collection-preview';
/*const TwoWheeler=()=>(
  <div>
    <h1>2 Wheelers</h1>
  </div>
)*/
class App extends React.Component {

unsubscribeFromAuth=null;

componentDidMount() {
  const { setCurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
    }

    setCurrentUser(userAuth);
  });
}

        
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

 render(){
  return (
    <div>
     <Header></Header>
     <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/twowheeler' component={TwoWheeler} />
     <Route exact path='/shop' component={ShopPage} />
     <Route exact path='/userdetails' component={DetailsPage} />
     <Route exact path='/aboutus' component={AboutUs} />
     <Route exact path='/chooseuser' component={ChooseUser} />
     <Route exact path='/chooseuser/customersignin' render={()=>this.props.currentUser?(<Redirect to="/" />) : (<SignInAndSignUp />)} />
     <Route exact path='/chooseuser/servicesignin'  render={()=>this.props.currentUser?(<Redirect to="/" />) : (<SignInAndSignUp />)} />
     </Switch>
     <Footer></Footer>
    </div>
  );
}
}

const mapStateToProps=({user})=>({
currentUser:user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
