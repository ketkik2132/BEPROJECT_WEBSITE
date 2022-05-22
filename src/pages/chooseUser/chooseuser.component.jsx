import React from 'react';
import './chooseuser.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';

class ChooseUser extends React.Component{
    constructor(){
super();
this.state={
    sections:[
        {
            title:'CUSTOMER',
            id:1,
            imageUrl:'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            size:'large',
            linkUrl:'/customersignin'
        },
        {
            title:'SERVICE CENTER',
            id:2,
            imageUrl:'https://images.pexels.com/photos/3849551/pexels-photo-3849551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            size:'large',
            linkUrl:'/servicesignin'
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
export default ChooseUser;