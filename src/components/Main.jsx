import purpleLens from '../images/Purple-Lens-Flare-PNG.png';
import matrix from '../images/matrix.png';
import man from '../images/man.png'
import bubble from '../images/bubble.png';
import Button from './Button';
import creative from '../images/creative.png';
import chain from '../images/chain.png';
import fire from '../images/fire.png';
import star from '../images/star.png'
import smallStar from '../images/star-small.png';
import bigStar from '../images/star-big.png';
import bigIdea from '../images/the-big-idea.png';
import arrow from '../images/arrow.png';
import rule from '../images/rule.png';
import whiteStar from '../images/star-white.png';



const Main = () => {
  return (
    <main className=''>
        <section className='flex flex-col md:flex-row justify-around items-center border-b border-b-gray-500 px-4 pl-4'>
            <div className='h-[80vh] w-[80%] md:w-auto md:h-auto flex flex-col justify-center items-center md:items-start md:justify-start relative'>
                <img src={purpleLens} className='absolute -top-24 -left-60 md:-top-60 md:-left-32 blur-xl w-[70%]'></img>
                <img src={star} className='block absolute bottom-8 left-44 md:hidden'></img>
                <img src={star} className='block absolute top-8 left-32 md:hidden'></img>
                <div className='mb-4 relative'>
                        <h1 className='font-bold font-clash text-4xl md:text-6xl text-white leading-9 mb-4'>getlinked Tech Hackathon <span className='text-span'>1.0</span></h1>
                        <p className='text-white leading-5 font-montserrat md:w-1/2 mb-4'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                        <img src={creative} className='absolute -top-16 right-0 md:-top-4 md:right-44'></img>
                        <img src={chain} className='absolute -top-0 -right-4 md:top-16 md:right-48 rotate-180'></img>
                        <img src={fire} className='absolute top-4 -right-8 md:top-16 md:right-32'></img>
                </div>

                <Button />

                <div className='text-sm text-white font-unica mt-16'><span className='text-6xl md:text-4xl'>00</span>H <span className='text-6xl md:text-4xl'>00</span>M <span className='text-6xl md:text-4xl'>00</span>S</div>
            </div>

            <div className='relative'>
                <img src={man} className='grayscale order-3'></img>
                <img src={star} className='absolute bottom-8 -left-16'></img>
                <img src={star} className='absolute top-8 -left-0'></img>
                <img src={matrix} className='absolute top-10 left-0 order-2'></img>
                <img src={bubble} className='absolute -top-8 md:-top-10 left-0 order-1'></img>
                <img src={purpleLens} className='h-[80%] absolute top-10 left-52 order-4'></img>
            </div>

        </section>

        <section className='flex flex-col items-center justify-center border-b border-b-gray-500'>

            <div className='flex flex-col md:flex-row items-center md:h-[80vh] px-4 mt-8 md:gap-8 py-6 relative'>
                <img src={smallStar} className='absolute bottom-32 right-8 md:top-16 md:left-16'></img>
                <img src={bigStar} className='absolute right-96 top-32 md:top-32 md:right-16'></img>
                <img src={arrow}  className='absolute bottom-72 md:bottom-4 md:right-[40rem]'></img>

                <div className='md:w-1/2 md:pl-8'>
                    <img src={bigIdea} className=''></img>

                </div>

                <div className='w-[80%] md:w-1/2'>
                    <h1 className='font-clash text-white text-2xl w-[70%] md:w-[50%]'>Introduction to getlinked <span className='text-span'>tech Hackathon 1.0</span></h1>
                    <p className='text-white font-montserrat text-sm md:w-[80%]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </p>
                </div>

            </div>

           

        </section>

        <section className='flex flex-col overflow-hidden'>

            <div className='flex flex-col-reverse md:flex-row justify-around items-center py-6 px-4 relative'>
                <div className='w-[80%] md:w-1/2 flex flex-col md:pl-6'>
                    <h1 className='font-clash text-white text-2xl w-[70%] md:w-[50%]'>Rules and <span className='text-span'>Guidelines</span></h1>
                    <p className='text-white font-montserrat text-sm md:w-[80%]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </p>
                </div>

                <img src={rule} title='rule' alt='rule' className='order-1'></img>
                <img src={purpleLens} className='absolute -top-80 md:-top-[40rem] left-0 opacity-75'></img>
                <img src={purpleLens} className='absolute -bottom-40 md:-bottom-[35rem] -right-16 md:right-0 opacity-75'></img>
                <img src={whiteStar} className='absolute bottom-60 left-52 md:left-96'></img>
            </div>
            
        </section>

        <section></section>
    </main>
  )
}

export default Main