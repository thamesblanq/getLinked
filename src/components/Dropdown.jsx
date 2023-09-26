import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const Dropdown = ({ setShow }) => {
  return (
    <div className="md:hidden flex flex-col gap-4 bg-[#150E28] fixed top-0 right-0 w-full h-full animate-open-menu px-4 z-50 overflow-hidden">
        <FaTimes className="font-semibold text-primary text-5xl mt-2 mr-4 cursor-pointer absolute right-0 top-2" onClick={() => setShow((prev) => !prev)} />
        <nav className="flex flex-col gap-4 mt-16 items-start">
            <ul><li className="dark:text-white cursor-pointer hover:font-bold font-montserrat">Timeline</li></ul>
            <ul><li className="dark:text-white cursor-pointer hover:font-bold  font-montserrat">Overview</li></ul>
            <ul><li className="dark:text-white cursor-pointer hover:font-bold  font-montserrat">FAQs</li></ul>
            <ul><li className="dark:text-white cursor-pointer hover:font-bold  font-montserrat">Contact</li></ul>
        </nav>
        <Button />
    </div>
  )
}

export default Dropdown