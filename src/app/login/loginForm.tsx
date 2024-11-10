"use client"

import React, { useState } from 'react'

const LoginForm = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const formSubmitHandler= (e:React.FormEvent)=>{
        e.preventDefault();
        console.log({email,password})
    }
    return (
        <form onSubmit={formSubmitHandler} className='flex flex-col'>
            <input className='mb-4 border rounded p-2 text-xl' type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required>
            </input>
            <input className='mb-4 border rounded p-2 text-xl' type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
            <button type='submit' className='text-2xl text-white bg-blue-800 p-5 rounded-lg font-bold'>
                Login
            </button>
        </form>
    );
}

export default LoginForm;