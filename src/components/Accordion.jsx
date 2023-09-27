//import AccordionItem from './AccordionItem';
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

const data =
[
    {
        open: false,
        id: 0,
        question: "Can I work on a project I started before the Hackathon?",
        answer: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        open: false,
        id: 1,
        question: "What happens if I need help during the hackathon?",
        answer: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        open: false,
        id: 2,
        question: "What happens if I don't have an idea for a project?",
        answer: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        open: false,
        id: 3,
        question: "Can I join a team or do I have to come with one?",
        answer: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        open: false,
        id: 4,
        question: "What happens after the hackathon ends?",
        answer: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        open: false,
        id: 5,
        question: "Can I work on a project I started before the hackathon?",
        answer: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    }
]


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = index => {
        if (activeIndex === index) {
            setActiveIndex(null)
        }else {
            setActiveIndex(index)
            console.log(activeIndex)
        }
    }

  return (
    <div>
        <ul className="flex flex-col gap-2 items-center justify-center">
            {data.map((item, index) => 
            <li key={index} className="mb-2 p-4 border-b border-b-white w-[400px] md:w-[500px]">
                <div className="font-bold text-white font-montserrat text-sm flex justify-between items-center">
                    <h1>{item.question}</h1>
                    <button onClick={() => toggle(index)}>
                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </button>
                </div>
                {activeIndex === index && (
                        <div className="text-white font-montserrat text-xs max-h-auto overflow-hidden duration-500 transition-all">
                            <p>{item.answer}</p>
                        </div>
                )}
            </li>    
            )}
        </ul>
    </div>
    
   
  )
}




export default Accordion