import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Header from './Header';
import Friend from './Friend';
import AddFriend from './AddFriend';
import './Friends.css';

function Friends(){
    const [ friends, setFriends ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);
    const [ addFriend, setAddFriend ] = useState(false);
    const [ friendCount, setFriendCount ] = useState(0);

    // Initialize data on initial render
    useEffect(() => {
        setIsFetching(true);
        axiosWithAuth().get('/api/friends')
        .then(res => {
            setFriends(res.data);
            setFriendCount(res.data.length);
            setIsFetching(false);
        })
        .catch(err => {
            console.log(err);
            setIsFetching(false);
        })
    }, [friendCount])

    const handleAddFriend = () => {
        setAddFriend(!addFriend);
    }

    const handleFriendCount = () => {
        setFriendCount(friendCount + 1);
    }

    return(
        <div>
            <Header handleAddFriend={handleAddFriend}/>
            {isFetching && (
                <div className='fetching-container'>
                    <p>Fetching Data...</p>
                </div>
            )}
            {friends && !addFriend && (
                <section className='friends-container'>
                    {friends.map(friend => {
                        return <Friend key={friend.id} friend={friend}/>
                    })}
                </section>
            )}
            {addFriend && (
                <AddFriend 
                    handleAddFriend={handleAddFriend} 
                    handleFriendCount={handleFriendCount}
                />
            )}
        </div>
    );
}

export default Friends;