import React from "react";
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import { Route,Link } from "react-router-dom";

const CollectionItem = ({id,name,price,imageUrl})=>(
    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
          }}
          ></div>
         <div className="collection-footer">
         <span className='name'>{name}</span>
         <span className='price'>{price}</span>
         </div>
         <Route>
             <Link to={`/shopdetails/${id}`}  > <CustomButton inverted>SELECT</CustomButton></Link>
        
         </Route>
         
        </div>


    
);

export default CollectionItem;
// <CustomButton inverted>SELECT</CustomButton>