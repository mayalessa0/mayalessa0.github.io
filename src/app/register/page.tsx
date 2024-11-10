import React from 'react'
import RegisterForm from './RegisterForm'

const RegisterPage = () => {
    return (
        <section className='mt-56 border-green-100 border-2'>
            <div className='m-auto bg-white rounded-lg p-5 w-full md:w-2/3 border-green-100 border-2'>
                <h1 className='text-3xl font-bold text-secondry mb-5 font-bodyFont'>Create account</h1>
                <RegisterForm />
            </div>

        </section>
    )
}

export default RegisterPage