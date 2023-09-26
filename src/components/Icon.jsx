import { FaPlus, FaMinus } from "react-icons/fa"

const Icon = ({ isActive }) => {
    const content = isActive ? <FaMinus className='text-white cursor-pointer'/> : <FaPlus className='text-white cursor-pointer'/>
  return (
    <div>{content}</div>
  )
}

export default Icon