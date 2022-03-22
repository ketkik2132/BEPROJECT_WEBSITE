
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx' 
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
const TwoWheeler=()=>(
  <div>
    <h1>2 Wheelers</h1>
  </div>
)
function App() {
  return (
    <div>
     <Header></Header>
     <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/twowheeler' component={TwoWheeler} />
     <Route exact path='/shop' component={ShopPage} />
     <Route exact path='/signin' component={SignInAndSignUp} />
     </Switch>
    </div>
  );
}

export default App;
