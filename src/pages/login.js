import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/logogreen.png"
import { loginCredentails } from '../data/loginCredentials';


const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name",name,"value",value)
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        console.log("formdata",formData)
        if (formData.email === loginCredentails.email && formData.password === loginCredentails.password) {
            alert('Login successful!');
            navigate('/dashboard')
        } else {
            alert('Invalid email or password');
        }
    };
    return (
        <div className='h-[100vh] text-white flex flex-col'>
            <div className=' h-[40%] flex justify-end items-center flex-col gap-5'>
                <div> <img src={logo} alt="Logo" className='h-20 w-20' /></div>
                <p className='text-[#36A546CC] capitalize text-lg'>we are electric</p>
            </div>
            <div className=' h-[60%] flex flex-col justify-start items-center mt-10'>
                <form className='flex flex-col justify-center items-center  gap-5' onSubmit={handleSubmit}>
                    <label>
                        <input type="text" placeholder="E-mail" className='bg-[#1F191966] w-[238px] h-[42px] rounded-3xl shadow-md shadow-[#4A494947] text-[#dbd4d4ea] focus:outline-none text-sm pl-6' onChange={handleChange} name="email" value={formData.email} />
                    </label>
                    <label>

                        <input type="password" placeholder="Password" className='bg-[#1F191966] w-[238px] h-[42px] rounded-3xl shadow-md shadow-[#4A494947] text-[#dbd4d4ea] focus:outline-none pl-6' onChange={handleChange} name="password" value={formData.password}/>
                    </label>
                    <button type="submit" className='custom-gradient '>Login</button>

                </form>

                <Link to='/login' className='text-[#36A546] mt-8'>forgot password?</Link>
            </div>
        </div>
    )
}

export default Login