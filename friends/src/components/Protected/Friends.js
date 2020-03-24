import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function Friends(){
    const [ friends, setFriends ] = useState([]);

    const getFriends = () => {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getFriends();
    }, [])

    console.log('reached')

    return(
        <div>
            
        </div>
    );
}

export default Friends;