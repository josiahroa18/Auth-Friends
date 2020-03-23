import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Login(){
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            setError(false);
            localStorage.setItem('token', res.data.payload);
        })
        .catch(err => {
            setError(true);
        })
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