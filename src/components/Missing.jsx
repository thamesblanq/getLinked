import error from '../images/404.png';
import { Link } from 'react-router-dom';


const Missing = () => {
  return (
    <div className="bg-[#150E28] flex flex-col items-center justify-center py-8">
        <img src={error} className='md:h-[50%] md:w-[50%]'></img>
        <p className='text-white font-montserrat font-semibold text-xl'>Page not Found</p>
        <p className='text-white font-montserrat text-sm'>Visit Home page <Link to='/' className='text-span'>here</Link></p>
    </div>
  )
}

export default Missing
