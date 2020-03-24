import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Header from './Header';
import Friend from './Friend';
import AddFriend from './AddFriend';
import './Friends.css';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

function Friends(){
    const [ friends, setFriends ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);
    const [ addFriend, setAddFriend ] = useState(false);
    const [ friendCount, setFriendCount ] = useState(0);

    const classes = useStyles();

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

    const handleFriendIncrease = () => {
        setFriendCount(friendCount + 1);
    }

    const handleFriendDecrease = friend => {
        console.log(friend);
        axiosWithAuth().delete(`/api/friends/${friend.id}`)
        .then(res => {
            console.log(res);
            setFriendCount(friendCount - 1);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <Header handleAddFriend={handleAddFriend}/>
            {isFetching && (
                <Backdrop className={classes.backdrop} open={isFetching}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            {friends && !addFriend && (
                <section className='friends-container'>
                    {friends.map(friend => {
                        return (
                            <Friend 
                                key={friend.id} 
                                friend={friend} 
                                handleFriendDecrease={handleFriendDecrease}
                            />
                        )
                    })}
                </section>
            )}
            {addFriend && (
                <AddFriend 
                    handleAddFriend={handleAddFriend} 
                    handleFriendCount={handleFriendIncrease}
                />
            )}
        </div>
    );
}

export default Friends;