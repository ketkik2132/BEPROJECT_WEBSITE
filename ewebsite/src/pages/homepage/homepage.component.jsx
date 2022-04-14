import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
const HomePage=()=>(
<div className='homepage'>
   <Directory />
   <div className='joinus'>
      <div className='innerdiv'>
         <big className='infotitle'>Best Car Service</big>
        <br></br> <big className='info'>Join us to get amazing deals on vehicle services any time anywhere</big>
     <button className='custom-button'> Join Us</button>
      </div>
   </div>
</div>
);

export default HomePage;