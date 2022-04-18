/*import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

/*const CollectionPreview= ({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
{
    items.filter((item,idx)=>idx<4)
    .map((item)=>(
        <div key={item.id}>{item.name}</div>
    ))
}

        </div>
    </div>
)*/
/*const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} link={`/shopdetails/${id}`} />
          ))}
      </div>
    </div>
  );

export default CollectionPreview;
*/
import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

/*const CollectionPreview= ({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
{
    items.filter((item,idx)=>idx<4)
    .map((item)=>(
        <div key={item.id}>{item.name}</div>
    ))
}

        </div>
    </div>
)*/
const CollectionPreview = ({ title, items,id }) => (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <h1>{id}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} id={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );

export default CollectionPreview;
