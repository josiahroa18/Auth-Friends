import React from 'react';

import './Friends.css';

function Friend({friend}){
    return(
        <div className='card'>
            <h4>{friend.name}</h4>
            <p>{friend.email}</p>
            <p>Age: {friend.age}</p>
        </div>
    );
}

export default Friend;