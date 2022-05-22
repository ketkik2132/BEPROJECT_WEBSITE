import React, { useState } from "react";
import './searchBox.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import { IconName } from "react-icons/";
import { FaSearch } from "react-icons/fa";


const SearchBox = ({placeholder, data}) => {
    const [searchTerm, setSearchTerm] = useState([]);


    const onChange = (event) => {
        const newVal = event.target.value;
        const newdata = data.filter((value) => {
            return value.name.toLowerCase().includes(newVal.toLowerCase());
        });
        if(newVal === "") {
            setSearchTerm([])
        }
        else{
            setSearchTerm(newdata);
        }
    };

    return (
        <div>
        <FaSearch className="icon" />
        <input className="Searchbar" 
            type="text" 
            placeholder={placeholder}
            onChange={onChange}
        />
        {/* {searchTerm.map((value, key) => { */}
        
        <div className='preview1'>

        {searchTerm.map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
        </div>
    );

};

export default SearchBox;

/* <div>
<p>
    {value.name}
    {value.price}
</p>
</div> */







// function SearchBox() {
    
//     const [searchTerm, setSearchTerm] = useState('');
//        return (
//         <div className='Search'>
//             <input type='text'
//             placeholder="Search"
//             onChange = {(event) =>{
//                 setSearchTerm(event.target.value);
//             } }
//             />
        
//       </div>
//       );
//         }
// export default SearchBox;







// function SearchBox() {
//     const [query, setQuery] = useState("")
//     return (
//         <div>
//         <input placeholder="Search"
//         onChange={event => setQuery(event.target.value)}
//         />
//         SHOP_DATA.filter(post => {
//             if (query === '') {
//               return post;
//             } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
//               return post;
//             }
//           }
//           ).map(({ id, ...otherItemProps }) => (
//             <CollectionItem key={id} {...otherItemProps} />
//           )
//           </div>
//     );
// }
