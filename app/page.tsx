import Navbar from "@/components/navbar";
import main from "@/components/main";
export default function Home() {
  return (
    <div className="dark:bg-black bg-[#F7DFDF]">
       <Navbar/>
      {main()}
    </div>
  );
}
