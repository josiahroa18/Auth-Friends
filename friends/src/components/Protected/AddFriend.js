import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function AddFriend({handleAddFriend, handleFriendIncrease}){
    const [ newFriend, setNewFriend ] = useState({
        name: '',
        age: 0,
        email: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitting')
        axiosWithAuth().post('/api/friends', newFriend)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        handleAddFriend();
        handleFriendIncrease();
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className='add-friend-container'>
            <h1>Add New Friend</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    name='name'
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    name='email'
                    onChange={handleChange}
                />
                <label>Age</label>
                <input
                    name='age'
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    );
}

export default AddFriend;