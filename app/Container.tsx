import React from 'react'
import {AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"



type Props = {}

const Container = (props: Props) => {
  return (
    <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto">
        <div className='md:flex items-center justify-between flex-row-reverse'>
            <div className=' flex justify-end items-end max-md:pt-4'>
                <div className='relative'>
                
                <div className='w-[60%] overflow-hidden h-[70%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400  absolute'></div>
                </div>
            </div>
            <div className='p-4 pl-0 mt-5 sm:mt-20'>
                <p className='flex text-xl sm:text-2xl  md:text-xl lg:text-2xl xl:text-3xl'>
                    Hello
                </p>
                <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 lg:pt-6'>  I&apos;m Zubair 
                <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'> Full stack Blockchain Developer </p></h1>
                <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>bringing New Blocks to live</p>
                <div className='flex items-center mt-6 md:mt-14'>
                    <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4 '>
                        <li><a href="https://twitter.com/binioosini" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineTwitter size={24}/></a></li>
                        <li><a href="https://www.instagram.com/binioosini" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><GrInstagram size={24}/></a></li>
                        <li><a href="https://www.linkedin.com/in/al-zbeer-khalf-293869294/" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiFillLinkedin size={24}/></a></li>
                        <li><a href="https://github.com/binioosini" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineGithub size={24}/></a></li>
                    </ul>
                    <a href="mailto:binioosini@gmail.com" className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Email me</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container