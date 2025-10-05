import React from 'react'
import { Link } from 'react-router-dom'
const Topsection = () => {
    return (
        <div className="top-nav pt-2 flex items-center justify-between">
            <Link to='/' className="logo">
                <h1 className='text-[3.9vw] md:text-[1.0432vw] font-bold text-[#eeeeee]'>QUALSOFT</h1>
            </Link>

            <Link to='/' className="contact">
                <p className='font-bold text-[#eeeeee]'>Contact Us</p>
            </Link>
        </div>
    )
}

export default Topsection