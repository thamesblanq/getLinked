import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#100B20]">

        <div className='grid md:grid-cols-3 grid-rows-1 items-center justify-center gap-8 py-10 px-8'>

            <div className='flex flex-col gap-4'>
                
                <div className='flex flex-col gap-2'>
                    <Logo />
                    <p className='font-montserrat text-sm text-white'>Getlinked Tech Hackathon is a technology innovation program 
                        established by a group of organizations with the aim of showcasing 
                        young and talented individuals in the field of technology
                    </p>
                </div>
                <p className='font-montserrat text-sm cursor-pointer text-white'>Terms of Use <span className='w-[10px] h-[100px] bg-red-500'></span>   Privacy Policy</p>
            </div>

            <div className='flex flex-col items-start md:items-center gap-2'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-span text-base font-semibold'>Useful Links</h1>
                    <p className='font-montserrat text-white text-sm cursor-pointer hover:italic ease-in-out duration-500'>Overview</p>
                    <p className='font-montserrat text-white text-sm cursor-pointer hover:italic ease-in-out duration-500'>Timeline</p>
                    <p className='font-montserrat text-white text-sm cursor-pointer hover:italic ease-in-out duration-500'>FAQs</p>
                    <p className='font-montserrat text-white text-sm cursor-pointer hover:italic ease-in-out duration-500'>Register</p>
                    <div className='flex items-start gap-4'>
                        <h1 className='text-span text-sm font-semibold'>Follow Us</h1>
                        <FaInstagram  className='text-white hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer'/>
                        <FaTwitter className='text-white hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer'/>
                        <FaFacebookF className='text-white hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer'/>
                        <FaLinkedinIn className='text-white hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer'/>
                    </div>
                </div>
                
            </div>

            <div className='flex flex-col gap-4 items-start md:items-center'>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-span text-base font-semibold'>Contact Us</h1>
                    <div className='flex'>
                        <FaPhone className='text-white gap-2' />
                        <a href='tel:+2347046079184' className='font-montserrat text-white text-sm'>+234 7046 079 184</a>
                    </div>

                    <div className='flex gap-2'>
                        <FaEnvelope className='text-white' />
                        <a href='mailto:ericobiwulu@gmail.com' className='font-montserrat text-white text-sm'>ericobiwulu@gmail.com</a>
                    </div>
                </div>
                
            </div>

        </div>

        <p className='flex items-center justify-center font-montserrat text-sm text-white pb-4'>All Rights reserved &copy; getlinked Ltd.</p>

    </footer>
  )
}

export default Footer