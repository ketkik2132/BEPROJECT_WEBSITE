import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class UserDetails extends React.Component {
    constructor(props) {
      super(props);
    /*  this.state = {
        address: '',
        contact: ''
      };*/
      };
     /* handleSubmit = async event => {
        event.preventDefault();
    
        const { address, contact } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ address: '', contact: '' });
        } catch (error) {
          console.log(error);
        }
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };*/
    render() {
        return (
         <div className='formdiv'>
         <form>
            
         </form>
         </div>
        );
      }
};

export default UserDetails;


