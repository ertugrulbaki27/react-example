import React, { Component }from 'react';

const NewSingle = ({item}) =>  {
    return (
        <div className="col-lg-4">
            <li>
            <p>{item.title}</p>
                <img src={item.urlToImage} alt={item.title} width={200}/>
            </li>
            <p>{item.title}</p>
            <a href={item.url} target="_blank"> Full article </a>
        </div>

)
}



export default NewSingle;