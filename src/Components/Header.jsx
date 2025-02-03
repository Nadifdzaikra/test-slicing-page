import { BsStars } from "react-icons/bs";
import Button from "./Button";

const show = false;
export function Header({ scrollToSection, className }) {
   return (
      <div className={`navbar bg-base-100/50 backdrop:blur-lg flex flex-wrap justify-between w-full gap-5 ${className}`}>
         <div className="">
            <a className="text-2xl pr-2 font-semibold" to="/">Sublime</a>
            <BsStars className="text-3xl" />
         </div>
         <div className="list-none gap-10 font-semibold max-md:overflow-x-auto max-md:p-5 max-md:scrollbar-thin max-md:scrollbar-thumb-gray-500 max-md:scrollbar-track-gray-200">
            <li><a href="#" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#" onClick={() => scrollToSection('company')}>Company</a></li>
            <li><a href="#" onClick={() => scrollToSection('picking')}>Picking</a></li>
            <li><a href="#" onClick={() => scrollToSection('blog')}>Blog</a></li>
            <li><a href="#" onClick={() => scrollToSection('contact')}>Contact</a></li>
         </div>
         <div>
            <Button transparent={true} >Sign in</Button>
            <Button transparent={false} MoreClass="px-5" >Sign up for free</Button>
         </div>
      </div>
   )
}