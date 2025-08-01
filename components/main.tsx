import React from 'react'
import { Button } from './ui/button'
import { FaArrowRight } from "react-icons/fa";
import HangingBanner from '@/app/hanging-bar';

const main = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center ' >
        <div className='flex justify-center flex-col gap-[20px] items-center '>
            <div className='flex items-center flex-col text-[black] dark:text-[white] space-y-2'>
                <h1 className='text-[3rem] font-bold'>Advance Your Career With <span className='text-[#ea763f]'>e<sup>16</sup>classes</span></h1>
                <h2 className='text-[2.3rem] mb-[20px]'>Join the <span className='inline-block -rotate-15 text-[#ea763f] text-[1.2rem] border-2 border-orange-500 pt-[5px] pb-[5px] pl-[10px] pr-[10px] m1-[10px] mr-[10px] rounded-[40px] '>Top 1%</span>Today</h2>
                <p className='text-gray-400'>Master DSA with curated resources and expert guidance – Learn the skills that set you apart and join the Top 1% of coding achievers!</p>
            </div>
            <div className='space-x-2'>
              <Button className='p-[20px] bg-white text-black font-bold border-2 border-black hover:border-2 hover:border-yellow-500 hover:bg-yellow-500  cursor-pointer'>Learn More</Button>
              <Button className='p-[20px] border-2 border-yellow-500 bg-yellow-500 font-bold text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer'>Explore Test Series<FaArrowRight></FaArrowRight></Button>
            </div>
        </div>
        <div>
          <HangingBanner/>
        </div>
    </div>
  )
}

export default main