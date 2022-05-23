import React from 'react';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';
import './slot.styles.scss'
export const toppings = [
    {
      name: "Monday",
      
    },
    {
      name: "Tuesday",
      
    },
    {
      name: "Wednesday",
    
    },
    {
      name: "Thursday",
      
    },
    {
      name: "Friday",
      
    },
    {
      name: "Saturday",
      
    },
    {
      name: "Sunday",
      
    }
  ];
  const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
function Slot(){
    
    const contact="9568522325";
    const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
      );
    
    
      let [time, setTime] = useState('');
      let [endtime, setEndTime] = useState('');
  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setTime(event.target.value);
  }
  const handleChange1 = (event) => {
    setEndTime(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
             
        firestore.collection("serviceCenters").doc(contact).update({
          close:endtime,
          open:time,
          days:checkedState,

        }).then(function() {
          console.log("Frank created");
        });
        
       
      } catch (error) {
        console.log(error);
      }


  }
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
              if (currentState === true) {
                return sum + toppings[index].price;
              }
              return sum;
            },
            0
          );
      
          setTotal(totalPrice);
        };
        return (
            <div className="App">
              <h3>Select Days on which Shop will remain Open</h3>
              <ul className="toppings-list">
                {toppings.map(({ name, price }, index) => {
                  return (
                    <li key={index}>
                      <div className="toppings-list-item">
                        <div className="left-section">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                          />
                          <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        </div>
                       
                      </div>
                    </li>
                   
                  );
                })}
                <div>
                <FormInput
             type='text' name='address' value={time}
             onChange={handleChange}
             label='Start Time'
             required>
             </FormInput>
             <FormInput
             type='text' name='endTime' value={endtime}
             onChange={handleChange1}
             label='End Time'
             required>
             </FormInput>
             <CustomButton onClick={handleSubmit} type='submit'><Link className='linkclass' to='/shome'>Next</Link></CustomButton>
                </div>
              </ul>
            </div>
          );
}

export default Slot;

