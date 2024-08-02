import { useState } from "react";


function Card({id,image,info,price,name,romoveTour})
{  const description= `${info.substring(0,200)}....`;
    const [readmore,setReadMore]=useState(false);
      function readmoreHandler()
      {
           setReadMore(!readmore);
      }

    return (
        <div className="card">
          <img src={image} className="image"></img>  
           <div className="tour-info">
           <div className="tour-details">
           <h4 className="tour-price">{price}</h4>
           <h4 className="tour-name">{name}</h4>
          </div>
          <div className="description">
          {description}
          </div>
          <span className="read-more" onClick={readmoreHandler}>
             {readmore ?`show less` :`read more`}
          </span>
          </div>
          <button className="btn-red" onClick={()=>romoveTour(id)}>Not intrested</button>
        </div>
    );
}
export default Card;