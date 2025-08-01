import signin from "@/app/signin/signin"
import signup from "@/app/signup/signup"


function Navbar(){
    return(
        <div className="w-[100%] flex justify-center mt-[15px]"> 
            <div className="w-[80%] h-[70px] flex justify-between items-center  pl-[20px] pr-[20px] bg-[#1d1c20] rounded-[10px]"> 
                 <div className="logo flex justify-center items-center gap-[7px]">
                       <img src="/e16classes_logo.png" alt="e16 logo" className="h-[50px] rounded-[10px]"/>
                       <h2 className="text-blue-500 font-bold">e<sup>16</sup>classes</h2>
                 </div>
                 <div className="nav_item">
                    <ul className="list-none flex gap-[30px] text-[20px] font-bold">
                        <li className="">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Courses</a>
                        </li>
                        <li>
                            <a href="#">Webiner</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                 </div>
                 <div className="Auth_btn">
                       {signin()}
                       {signup()}
                 </div>
            </div>
        </div>
    )
}


export default Navbar