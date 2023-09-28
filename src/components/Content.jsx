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
import attr from '../images/attr.png';
import ellipse from '../images/ellipse.png';
import faq from '../images/faq.png';
import qOne from '../images/q-one.png';
import qTwo from '../images/q-two.png';
import qThree from '../images/q-three.png';
import date from '../images/date.png';
import number from '../images/numbers.png';
import timeline from '../images/timeline.png';
import cup from '../images/cup.png';
import reward from '../images/rewards.png';
import partner from '../images/partner.png';
import padlock from '../images/padlock.png';
import privacy from '../images/privacy.png';


import Accordion from './Accordion';
import { FaCheckCircle } from 'react-icons/fa';





const Main = () => {
  return (
    <main className='-z-50'>
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

        <section className='flex flex-col overflow-hidden border-b border-b-gray-500'>

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

                <div className='grid'>
                <img src={rule} title='rule' alt='rule' className='order-1 z-40'></img>
                <img src={ellipse} className='hidden md:block absolute top-32 right-40 order-2 z-10'></img>
                </div>

                
                <img src={purpleLens} className='absolute -top-80 md:-top-[40rem] left-0 opacity-75'></img>
                <img src={purpleLens} className='absolute -bottom-40 md:-bottom-[35rem] -right-16 md:right-0 opacity-75'></img>
                <img src={whiteStar} className='absolute bottom-60 left-52 md:left-96'></img>
            </div>
            
        </section>

        <section className='flex flex-col border-b border-b-gray-500'>

            <div className='flex flex-col md:flex-row items-center relative py-6 px-4 pt-32'>


                <img src={ellipse} className='hidden md:block absolute top-32 left-28 z-10'></img>
                <img src={attr} className='z-40'></img>
                <img src={purpleLens} className='absolute -bottom-32 left-16 md:bottom-16 md:-left-64 opacity-75'></img>
                <img src={purpleLens} className='absolute md:top-0  md:-right-64 opacity-75'></img>
                <img src={whiteStar} className='absolute bottom-16 left-64'></img>
                <img src={smallStar} className='absolute  top-8 md:top-16 left-60 md:left-32'></img>


                <div className='flex flex-col gap-2 px-8'>
                    <h1 className='font-clash text-white text-2xl w-[70%] md:w-auto'>Judging Criteria <span className='text-span'>Key attributes</span></h1>

                    <div className='md:w-[80%]'>
                        <p className='text-white font-montserrat text-sm my-2'><span className='text-span font-bold'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features.
                        </p>

                        <p className='text-white font-montserrat text-sm my-2'><span  className='text-span font-bold'>Functionality:</span> Assess how well the solution works. Does it perform its 
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.
                        </p>

                        <p className='text-white font-montserrat text-sm my-2'><span  className='text-span font-bold'>Impact and Relevance:</span> Determine the potential impact of the solution 
                            in the real world. Does it address a significant problem, and is it relevant 
                            to the target audience? Judges would assess the potential social, 
                            economic, or environmental benefits.
                        </p>

                        <p className='text-white font-montserrat text-sm my-2'><span  className='text-span font-bold'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                            Judges would consider the complexity of the code, the use of advanced 
                            technologies or algorithms, and the scalability of the solution.
                        </p>

                        <p className='text-white font-montserrat text-sm my-2'><span  className='text-span font-bold'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                            to the rules and guidelines of the hackathon, including deadlines, use of 
                            specific technologies or APIs, and any other competition-specific requirements.
                        </p>

                        <button className='py-4 px-10 text-white font-montserrat text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm font-semibold cursor-pointer'>Read More</button>

                    </div>

                </div>

            </div>
        </section>

        <section className='flex flex-col border-b border-b-gray-500'>
            <div className='flex flex-col md:flex-row items-center justify-around py-4 pt-8 gap-y-20 md:gap-y-0'>

            <div className="flex flex-col justify-center md:items-start md:ml-32 items-center w-full gap-y-4">

                <div className='flex flex-col'><h1 className='font-clash text-white text-2xl'>Frequently Asked <span className='text-span'>Questions</span></h1>
                </div>
            
            
                <p className='text-white font-montserrat text-sm my-2 w-[400px] md:w-[500px]'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>

                <Accordion />
            </div>
                <div className='relative'>
                    <img src={faq}></img>
                    <img src={qOne} className='absolute -top-12 right-24'></img>
                    <img src={qTwo} className='absolute -top-16 right-64'></img>
                    <img src={qThree} className='absolute top-0 left-10 md:left-0'></img>
                </div>
            </div>

        </section>

        <section className='flex flex-col border-b border-b-gray-500'>
            <div className='flex flex-col gap-4 items-center justify-center py-10'>

                <div className='relative'>
                    <img src={timeline} className='hidden md:block relative'></img>
                    <p className='text-white font-montserrat text-xl my-2 hidden md:block absolute top-16 right-56'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                </div>

                <div className='flex flex-col items-center md:hidden'>
                    <h1 className='font-clash text-white text-2xl'>Timeline</h1>
                    <p className='text-white font-montserrat text-sm my-2 w-1/2'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                </div>

                <div className='flex md:hidden'>
                    <div><img src={number}></img></div>
                    <div><img src={date}></img></div>
                </div>

            </div>
        </section>

        <section className='flex flex-col'>

            <div className='flex flex-col gap-y-4 items-center justify-center py-10 px-4 relative'>

                <img src={purpleLens} className='absolute opacity-50 top-0 -right-32'></img>
                <img src={purpleLens} className='absolute opacity-50 bottom-0 md:-left-[25rem] -left-32'></img>
                <img src={whiteStar} className='absolute top-10 right-16 md:right-32'></img>
                <img src={bigStar} className='absolute bottom-80 md:bottom-10 left-32 md:left-96'></img>

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-clash text-white text-2xl'>Prizes and <span className='text-span'>Rewards</span></h1>
                    <p className='text-white font-montserrat text-sm my-2 w-[70%] md:w-auto'>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
                
                <div className='flex flex-col md:flex-row items-center justify-evenly gap-10'>
                    <div><img src={cup}></img></div>
                    <div><img src={reward} className='md:w-[80%]'></img></div>
                </div>

            </div>

        </section>

        <section className='flex flex-col'>
            <div className='flex flex-col items-center justify-center gap-4 px-4 py-10'>

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-clash text-white text-2xl'>Partners and Sponsors</h1>
                    <p className='text-white font-montserrat text-sm my-2 w-[70%] md:w-auto'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div>

                <div className='flex flex-col items-center justify-center p-4'>
                    <img src={partner} className='w-[90%] md:w-[80%] cursor-pointer'></img>
                </div>

            </div>
        </section>

        <section>

            <div className='flex flex-col md:flex-row items-center justify-around px-8 gap-y-4 relative'>

                <div className='flex flex-col items-center justify-center gap-4 md:w-1/2'>

                    <div className='flex flex-col gap-y-8'>
                            <h1 className='font-clash text-white text-2xl'>Privacy Policy and <span className='text-span'>Terms</span></h1>
                            <p className='text-gray-500 font-montserrat text-sm my-2 w-[70%] md:w-auto'>Last updated on September 12, 2023</p>
                            <p className='text-white font-montserrat text-sm my-2 w-[70%] md:w-auto'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant.
                            </p> 
                    </div>

                    <div className='flex flex-col items-center justify-center gap-y-4 border border-gray-400 rounded-xl px-8 py-4 bg-black/30'>
                        <p className='font-montserrat text-sm text-white'>At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose, 
                            and safeguard your data when you participate in our tech 
                            hackathon event. By participating in our event, you consent 
                            to the practices described in this policy.
                        </p>

                        <h4 className='font-montserrat text-sm text-span font-bold'>Licensing Policy</h4>

                        <p className='font-montserrat text-sm text-white font-bold'>
                            Here are terms of our Standard License:
                        </p>

                        <div className='flex items-start justify-start gap-4'>
                            <FaCheckCircle className='text-green-400 text-xl md:text-sm'/>
                            <p className='font-montserrat text-sm text-white'>The Standard License grants you a non-exclusive right to navigate and register for our event
                            </p> 
                        </div>

                        <div className='flex items-start justify-start gap-4'>
                            <FaCheckCircle className='text-green-400 text-xl md:text-sm'/>
                            <p className='font-montserrat text-sm text-white'>You are licensed to use the item available at any free source
                            sites, for your project developement
                            </p> 
                        </div>

                        <button className='py-4 px-10 text-white font-montserrat text-sm cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm font-semibold'>Read More</button>


                    </div>

                </div>


                <div className='relative grid'>
                    <img src={privacy} className='z-40'></img>
                    <img src={padlock} className='absolute z-10 top-0'></img>
                </div>

                <img src={bigStar} className='absolute top-10 md:top-0 left-16 md:left-32'></img>
                <img src={whiteStar} className='bottom-0 right-0'></img>
                <img src={smallStar} className='absolute bottom-32 right-8 md:right-[35rem]'></img>

            </div>

        </section>


    </main>
  )
}

export default Main