import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import './userdetails.styles.scss';


class UserDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        address: '',
        area:'',
        city:'',
        pincode:'',
        contact: ''
      };
      };
     handleSubmit = async event => {
        event.preventDefault();
        const {address, area, city, pincode, contact } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(address, area, city, pincode, contact);
          this.setState({ address: '', area: '', city: '', pincode: '', contact: '' });
        } catch (error) {
          console.log(error);
        }
      };
    
      handleChange = event => {
        
        const {name,value}=event.target;
        this.setState({[name]:value});
       
      };
    
      render(){
        const {address,area,city,pincode,contact}=this.state;
        return(
            <div className="userdetails">
                <h2 className="title">I am creating an account</h2>
                <span>Enter your details</span>
            <form className="User-details-form" onSubmit={this.handleSubmit}>
             <FormInput
             type='text' name='address' value={address}
             onChange={this.handleChange}
             label='Address'
             required>
             </FormInput>

             <FormInput
             type='area' name='area' value={area}
             onChange={this.handleChange}
             label='Area'
             required>
             </FormInput>

             <FormInput
             type='city' name='city' value={city}
             onChange={this.handleChange}
             label='City'
             required>
             </FormInput>

             <FormInput
             type='pincode' name='pincode' value={pincode}
             onChange={this.handleChange}
             label='Pincode'
             required>
             </FormInput>

             <FormInput
             type='contact' name='contact' value={contact}
             onChange={this.handleChange}
             label='Contact'
             required>
             </FormInput>

             <CustomButton type='BookAService' onClick={event =>  window.location.href='/shop'}  > NEXT </CustomButton>
            </form>
            </div>
        )
    }
};

export default UserDetails;
