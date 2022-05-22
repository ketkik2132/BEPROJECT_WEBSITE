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
            imageUrl:'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            size:'large',
            linkUrl:'twowheeler'
        },
        {
            title:'4 WHEELER',
            id:2,
            imageUrl:'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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