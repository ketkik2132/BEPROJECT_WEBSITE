import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
class Directory extends React.Component{
    constructor(){
super();
this.state={
    sections:[
        {
            title:'2 WHEELER',
            id:1,
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            size:'large',
            linkUrl:'twowheeler'
        },
        {
            title:'4 WHEELER',
            id:2,
            imageUrl:'https://media.istockphoto.com/photos/the-washing-process-on-a-self-service-car-wash-picture-id1310978724',
            size:'large',
            linkUrl:'twowheeler'
        }
    ]
}

    }


  render(){
      return(
        <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps})=>
                (
                    <MenuItem key={id} {...otherSectionProps}/>
                )
                
                )
            }
        </div>

      );
  }  
}
export default Directory;