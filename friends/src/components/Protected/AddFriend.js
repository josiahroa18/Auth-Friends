import React from 'react';

function AddFriend(){
    return(
        <div className='add-friend-container'>
            <h1>Add New Friend</h1>
            <form>
                <label>Name</label>
                <input/>
                <label>Email</label>
                <input/>
                <label>Age</label>
                <input/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddFriend;