import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { firestore } from '../../firebase/firebase.utils';
import { Link } from "react-router-dom";
import './update-details.styles.scss';
class UpdateDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            key:'',
          address: '',
          area:'',
          city:'',
          pincode:'',
          contact: '',
          garage_name:'',
          accepted:''
        };
        };

        handleSubmit = async event => {
            event.preventDefault();
            const {address, area, city, pincode, contact,garage_name } = this.state;
            
            try {
             
              firestore.collection("serviceCenters").doc(contact).set({
                address: address,
                area: area,
                city: city,
                contact:contact,
                pincode:pincode,
                garage_name: garage_name,
    
              }).then(function() {
                console.log("Frank created");
              });
              
              this.setState({ address: '', area: '', city: '', pincode: '', contact: '' ,garage_name:''});
            } catch (error) {
              console.log(error);
            }
          };
        



        componentDidMount(){
            const ref = firestore.collection('serviceCenters').doc("9568522325");
            ref.get().then((doc) => {
              if (doc.exists) {
                const board = doc.data();
                this.setState({
                  key: doc.id,
                  accepted: board.accepted,
                  address: board.address,
                   area:board.area,
                    city:board.city,
                    pincode:board.pincode,
                    contact: board.contact,
                    garage_name:board.garage_name,
                });
                
              } else {
                console.log("No such document!");
              }
            });
           }
           handleChange = event => {
        
            const {name,value}=event.target;
            this.setState({[name]:value});
           
          };
    render(){
        const {address,area,city,pincode,contact,garage_name}=this.state;
        return(
            <div className='update-page'>

                <h1>
                Please Update details as required
                </h1>

               
       
            <div className="userdetails">
                
            <form className="User-details-form" onSubmit={this.handleSubmit}>
            <FormInput
             type='text' name='garage_name' value={garage_name}
             onChange={this.handleChange}
             label='Name'
             required>
             </FormInput>

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
             <div className='buttons'>
                 <div> <CustomButton   type='submit' >UPDATE</CustomButton></div>
             <div className='div2'><CustomButton ><Link className='backbutton' to='/shome'>GO BACK</Link></CustomButton></div>
             
             </div>
             
             
            </form>
            </div>
        
    
            </div>
        );
    }
}

export default UpdateDetails;