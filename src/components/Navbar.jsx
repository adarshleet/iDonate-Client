import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-gray-900 h-18 py-2 px-3 fixed flex items-center justify-between z-50'>
                <Link to={'/'}>
                    <img src={logo} alt="" className='w-12 rounded-full'/>
                </Link>
                <Link to={'/profile'} className='text-white font-bold cursor-pointer'>Register As Donor</Link>
            </div>
        </>

    )
}

export default Navbar
