import Logo from './Logo';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Header = () => {

  const[show, setShow] = useState(false)

  return (
    <header className='flex justify-between items-center px-8  py-4 border-b border-b-gray-500'>
        <Logo />

        <FaBars className='text-white block text-2xl md:hidden' onClick={() => setShow(prev => !prev)}/>
        {show && <Dropdown setShow={setShow}/>}

        <nav className='hidden md:flex justify-between items-center gap-16'>
            <ul className='flex gap-4'>
                <li className='text-white font-montserrat font-semibold text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 px-4 rounded-md cursor-pointer'>Timeline</li>
                <li className='text-white font-montserrat font-semibold text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 px-4 rounded-md cursor-pointer'>Overview</li>
                <li className='text-white font-montserrat font-semibold text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 px-4 rounded-md cursor-pointer'>FAQs</li>
                <li className='text-white font-montserrat font-semibold text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 px-4 rounded-md cursor-pointer'><Link to='/contact'>Contact</Link></li>
            </ul>

            <Link to='/register'>
            <button className='py-4 px-10 text-white font-montserrat text-sm cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm font-semibold'>Register</button>
            </Link>
            
        </nav>
    </header>
  )
}

export default Header