'use client'
import {BsArrowUpRight} from "react-icons/bs"

type Props = {}

const Projects = (props: Props) => {

    return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Projects</h1>
        <p className='pt-6 text-neutral-300'>Over the 1 year, I have gained experience in developing a variety of websites, ranging from simple one-page landing pages to complex multi-page applications.Here are some projects that I would like to present to all of you, showcasing my work and achievements in the field of <span className=' text-xl font-bold '>BlockChain</span> development.</p>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>CrossChainMessage</h1>
                <div className='text-neutral-300'>CrossChainMessage.</div>
                <div className='mt-6 inline-block'><a href="https://github.com/binioosini/CrossChainMessage" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project3.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>bunToken</h1>
                <div className='text-neutral-300'><h1>bunToken</h1></div>
                <div className='mt-6 inline-block'><a href="https://github.com/binioosini/bunToken" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project1.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>simpleLottery contract</h1>
                <div className='text-neutral-300'>simpleLottery. </div>
                <div className='mt-6 inline-block'><a href="https://github.com/binioosini/simpleLottery" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Projects