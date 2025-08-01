import signin from "@/app/signin/signin"
import signup from "@/app/signup/signup"
import { Button } from "./ui/button"
import { ThemeToggle } from "@/app/theme-toggle"


function Navbar(){
    return(
        <div className="w-[100%] flex justify-center"> 
            <div className="w-[70%] h-[70px] flex justify-between items-center  pl-[20px] pr-[20px] dark:bg-[#1d1c20] bg-[#FFF0F0] border-[2px] shadow-md rounded-[10px] fixed top-[10px] z-[100]"> 
                 <div className="logo flex justify-center items-center gap-[7px]">
                       <img src="/e16classes_logo.png" alt="e16 logo" className="h-[50px] rounded-[10px]"/>
                       <h2 className="dark:text-blue-500 text-blue-800 font-bold">e<sup>16</sup>classes</h2>
                 </div>
                 <div className="nav_item">
                    <ul className="list-none flex gap-[30px] text-[20px] font-bold text-[black] dark:text-[white]">
                        <li className="hover:text-[#ea763f] hover:scale-125 hover:duration-400 hover:ease-in-out">
                            <a href="#">Home</a>
                        </li>
                        <li className="hover:text-[#ea763f] hover:scale-125 hover:duration-400 hover:ease-in-out">
                            <a href="#">About</a>
                        </li>
                        <li className="hover:text-[#ea763f] hover:scale-125 hover:duration-400 hover:ease-in-out">
                            <a href="#">Courses</a>
                        </li>
                        <li className="hover:text-[#ea763f] hover:scale-125 hover:duration-400 hover:ease-in-out">
                            <a href="#">Webiner</a>
                        </li>
                        <li className="hover:text-[#ea763f] hover:scale-125 hover:duration-400 hover:ease-in-out">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                 </div>
                 <div className="Auth_div flex space-x-2">
                    <div>
                        <ThemeToggle/>
                    </div>
                     <div className="auth_btn flex gap-[10px]">
                        {signin()}
                        {signup()}
                     </div>
                 </div>
            </div>
        </div>
    )
}


export default Navbar