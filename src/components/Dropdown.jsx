import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dropdown = ({ setShow }) => {
  return (
    <div className="md:hidden flex flex-col gap-4 bg-[#150E28] fixed top-0 right-0 w-full h-full animate-open-menu px-4 z-50 overflow-hidden">
        <FaTimes className="font-semibold text-primary text-5xl mt-2 mr-4 cursor-pointer absolute right-0 top-2" onClick={() => setShow((prev) => !prev)} />
        <nav className="flex flex-col gap-4 mt-16 items-start">
          <ul>
              <li className="text-white cursor-pointer hover:font-bold font-montserrat">Timeline</li>
              <li className="text-white cursor-pointer hover:font-bold  font-montserrat">Overview</li>
              <li className="text-white cursor-pointer hover:font-bold  font-montserrat">FAQs</li>
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