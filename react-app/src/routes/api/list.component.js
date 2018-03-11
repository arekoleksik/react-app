import React from 'react';
import ShowLi from './showli.component'

const ApiList = (props)=>(
    <ul>
        {props.items.map(item =>(
            <ShowLi item={item} key={item.Team_name}/>
        ))}
    </ul>
);

export default ApiList;


