import congrat from '../images/congratulation.png';

const Modal = ({ isOpen, onClose }) => {
  return isOpen ? (
    <section className='w-screen h-screen bg-[#150E28]/90 z-50 fixed top-0 right-0 animate-open-menu overflow-hidden'>

        <div className='flex flex-col items-center justify-center gap-y-4 p-8'>
                <img src={congrat}></img>
                <div>
                    <h1 className='text-white font-montserrat text-xl font-semibold'>Congratulations you have successfully Registered!
                    </h1>
                    <p className='font-montserrat text-white text-sm'>Yes, it was easy and you did it! Check your mail box for next step</p>
                </div>
                
                    <button
                    type='submit'
                    className='py-4 px-10 text-white font-montserrat text-sm cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm font-semibold'
                    onClick={onClose}
                    >
                    Back
                    </button>
        </div>
           
    </section>
  ) : null
}

export default Modal