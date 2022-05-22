import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Geocode from "react-geocode";
import {firestore,auth,createServiceCenterProfileDocument} from '../../firebase/firebase.utils';
import './add-services.styles.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class AddService extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        service_name: '',
       
        description:'',
        price:'',
        info:''
      };
      };
    
      
      componentDidMount(){
        window.addEventListener('load', () => {
         // Fetchdata();
        });
      }
      
     handleSubmit = async event => {
      Geocode.setApiKey("AIzaSyBYAGQOBu7E5aQA91kMEgY4gA2W9CoAd2g");
      Geocode.setLanguage("en");
        event.preventDefault();
        const {service_name,description,price } = this.state;
        Geocode.fromAddress("Eiffel Tower").then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
          },
          (error) => {
            console.error(error);
          }
        );
        try {
         
          firestore.collection("serviceCenters").doc("9568522325").collection("services").doc(service_name).set({
            service_name: service_name,
            
            description: description,
            price:Number(price) ,

          }).then(function() {
            console.log("Frank created");
          });
          
          this.setState({ service_name: '',description:'',price:''});
        } catch (error) {
          console.log(error);
        }
      };
    
      handleChange = event => {
        
        const {name,value}=event.target;
        this.setState({[name]:value});
       
      };
    
      render(){
        const {service_name,description,price}=this.state;
        return(
            <div className="userdetails">
                <h2 className="title">Add your Services</h2>
                <span>Enter details</span>
            <form className="User-details-form" onSubmit={this.handleSubmit}>

            <FormInput
             type='text' name='service_name' value={service_name}
             onChange={this.handleChange}
             label='Service Name'
             required>
             </FormInput>

            <FormInput
             type='text' name='description' value={description}
             onChange={this.handleChange}
             label='Description'
             required>
             </FormInput>
             
             <FormInput
             type='text' name='price' value={price}
             onChange={this.handleChange}
             label='Price'
             required>
             </FormInput>


             

             <CustomButton type='submit' > <Link to="/shome">ADD </Link></CustomButton>
            </form>
            </div>
        )
    }
};

export default AddService;
