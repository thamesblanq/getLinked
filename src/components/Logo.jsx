import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <h1 className="text-white font-clash text-xl cursor-pointer">get<span className="text-[#D434FE]">linked</span></h1>
      </Link>
      
    </div>
  )
}

export default Logo