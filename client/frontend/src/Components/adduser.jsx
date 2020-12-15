import React, { useState } from 'react';
import axios from 'axios';

const Adduser = () => {
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    function handleUserChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    
    function addUserHandler(event) {
        debugger

        event.preventDefault();
        axios.post("http://localhost:3000/auth/signup",user)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    
    
    
    
    return (
        <form onSubmit={addUserHandler}>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleUserChange}></input>
            <input type="text" name="password" value={user.password} placeholder="Username" onChange={handleUserChange}></input>
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default Adduser;