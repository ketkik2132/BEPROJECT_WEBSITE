
import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx' 
import AboutUs from './pages/aboutUs/aboutus.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import ChooseUser from './pages/chooseUser/chooseuser.component';

const TwoWheeler=()=>(
  <div>
    <h1>2 Wheelers</h1>
  </div>
)
class App extends React.Component {
constructor(){
  super();
  this.state={
    currentUser:null
  }
}
unsubscribeFromAuth=null;


componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
    /*this.setState({currentUser:user});
    createUserProfileDocument(user);
    console.log(user);*/
   if(userAuth){
      const userRef= await createUserProfileDocument(userAuth);
    
    userRef.onSnapshot(
      snapShot =>{
        this.setState({
          currentUser:{
            id:snapShot.id,
          ...snapShot.data()
        }
      })
      console.log(this.state);
      }
    );
    
    }
    this.setState({currentUser:userAuth});
    
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

 render(){
  return (
    <div>
     <Header currentUser={this.state.currentUser}></Header>
     <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/twowheeler' component={TwoWheeler} />
     <Route exact path='/shop' component={ShopPage} />
     <Route exact path='/signin' component={SignInAndSignUp} />
     <Route exact path='/aboutus' component={AboutUs} />
     <Route exact path='/chooseuser' component={ChooseUser} />
     <Route exact path='/chooseuser/customersignin' component={SignInAndSignUp} />
     <Route exact path='/chooseuser/servicesignin' component={SignInAndSignUp} />
     </Switch>
     <Footer></Footer>
    </div>
  );
}
}

export default App;
