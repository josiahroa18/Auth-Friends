import React from 'react';

import './Friends.css';

function Friend({friend, handleFriendDecrease}){
    return(
        <div className='card'>
            <div 
                className='close'
                onClick={() => {handleFriendDecrease(friend)}}
            >X</div>
            <h4>{friend.name}</h4>
            <p>{friend.email}</p>
            <p>Age: {friend.age}</p>
        </div>
    );
}

export default Friend;