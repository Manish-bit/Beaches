import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube,FaPinterest,FaInstagram} from 'react-icons/fa'

const Navbar = () => {

 const [nav,setNav] = useState(false)
 const [logo,setLogo] = useState(false)
const handleNav = ()=>{
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className=' w-full flex justify-between items-center h-20 px-4 absolute z-10 text-white'>
         <div>
            <h1 className={logo?
            "hidden":"block"}>BEACHES</h1>
         </div>
         <ul className=' hidden md:flex'>
            <li>Home</li> 
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
         </ul>
         <div className='hidden md:flex'>
            <BiSearch size={20} className=" mr-4"/>
            <BsPerson size={20}/>
         </div>

         {/* mobile menu dropdown */}
         <div onClick={handleNav} className='md:hidden'>
        {nav?<AiOutlineClose size={20} className="text-black z-20"/>:<HiOutlineMenuAlt4 size={20}/>}
         </div>
         <div onClick={handleNav} className={nav?'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black h-screen': 'absolute left-[-100%]'}>
         <ul>
            <h1>BEACHES</h1>
            <li className='border-b'>Home</li> 
            <li className='border-b'>Destination</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col file:'>
            <button className='my-6'>Search</button>
            <button>Account</button>
            </div>
            <div className=' flex justify-between my-6'>
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaYoutube className="icon" />
                <FaPinterest className="icon" />
                <FaInstagram className="icon"  />
            </div>
         </ul>
         </div>
    </div>
  )
}

export default Navbar