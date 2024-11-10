import React from 'react'

const RegisterForm = () => {
  return (
    <form  className='flex flex-col'>
            <input className='mb-4 border rounded p-2 text-xl' type='email' placeholder='Enter Your Email'required>
            </input>
            <input className='mb-4 border rounded p-2 text-xl' type='password' placeholder='Enter Your Password' ></input>
            <button type='submit' className='text-2xl text-primary bg-yellow-950 p-5 rounded-lg font-bold'>
                Create Now!
            </button>
        </form>
  )
}

export default RegisterForm