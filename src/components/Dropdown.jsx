import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dropdown = ({ setShow }) => {
  return (
    <div className="md:hidden flex flex-col gap-4 bg-black/95 fixed top-0 right-0 w-full h-full animate-open-menu px-4 z-[400] overflow-hidden ">
      
      <div className="absolute right-0 top-2 mt-2 mr-4 border border-gray-500 p-2 rounded-full hover:scale-125 transition-all duration-700 ease-in-out cursor-pointer">
        <FaTimes className="font-semibold font-montserrat text-2xl cursor-pointer text-white" onClick={() => setShow((prev) => !prev)} />
      </div>

        <nav className="flex flex-col gap-4 mt-16 items-start">
          <ul className="flex flex-col gap-y-5">
              <li className="text-white cursor-pointer hover:font-bold font-montserrat"><a href="#timeline">Timeline</a></li>
              <li className="text-white cursor-pointer hover:font-bold  font-montserrat"><a href="#overview">Overview</a></li>
              <li className="text-white cursor-pointer hover:font-bold  font-montserrat"><a href="#FAQ">FAQs</a></li>
              <li className='text-white font-montserrat hover:font-bold cursor-pointer'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Link to='/register'>
            <button className='py-4 px-10 text-white font-montserrat text-sm cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm font-semibold'>Register</button>
        </Link>
    </div>
  )
}

export default Dropdown