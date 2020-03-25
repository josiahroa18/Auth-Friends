import React from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';

function Header({handleAddFriend}){
    const history = useHistory();

    const handleLogOut = () => {
        history.push('/');
        localStorage.clear();
    }

    

    return(
        <header>
            <h1>My Friends</h1>
            <div className='button-container'>
                <div
                    onClick={handleAddFriend}
                    className='add-friend'
                >Add Friend</div>
                <div 
                    onClick={handleLogOut}
                    className='button'
                >Log Out</div>
            </div>
        </header>
    );
}

export default Header;