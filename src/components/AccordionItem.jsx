import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ data, toggle, selected }) => {
  return (
    <ul>
        {data.map((item, i) => {
               return  (
                    <li className="mb-2 p-4 border-b border-b-white w-[400px] md:w-[500px] group-[.is-active]" key={i}>

                        <div className="font-bold text-white font-montserrat text-sm flex justify-between items-center" onClick={() => toggle(i)}>
                            <h1>{item.question}</h1>
                            <span className='text-white cursor-pointer'>{selected === 1 ? <FaMinus /> : <FaPlus/>}</span>
                        </div>
 
                        
                        <div className="text-white font-montserrat text-xs max-h-0 overflow-hidden duration-500 transition-all">
                            {item.answer}
                        </div>

                       

                    </li>
                )
        })}
    </ul>
  )
}

export default AccordionItem