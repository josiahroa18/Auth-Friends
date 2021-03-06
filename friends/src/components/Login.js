import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './Login.css';

function Login(props){
    // const history = useHistory();
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    });
    const [ error, setError ] = useState(false);

    const setToken = async(token) => {
        await window.localStorage.setItem('token', token);
        props.history.push('/friends');
    }   

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/login', credentials)
        .then(res => {
            setError(false);
            setToken(res.data.payload);
        })
        .catch(() => {
            setError(true);
        })

        // Reset form and state
        e.target.reset();
        setCredentials({
            username: '',
            password: ''
        })
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className='login-page'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {error && <p>Username or password incorrect</p>}
                <label>Username</label>
                <input
                    name='username'
                    type='text'
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    name='password'
                    type='password'
                    onChange={handleChange}
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login;