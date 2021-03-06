import React from 'react'
import { AiFillGithub, AiFillYoutube } from "react-icons/ai"
import { MdOutgoingMail } from "react-icons/md"
import { FaTwitter } from "react-icons/fa"
import Link from 'next/link'

function Hero() {
    return (
        <div data-aos='fade-up' className='w-[80%] xl:w-[55%] pt-10 pb-24 flex flex-col-reverse lg:flex-row justify-between mt-10 lg:items-center'>
            <div>
                <div className='font-extrabold text-5xl'> Duwal Kreation</div>
                <div className='font-semibold text-lg'> Software Developer <span className='font-normal'> and </span> Content Creator</div>
                <div className='mt-4 text-sm'> 14 year old student, developing software in public, posting development tips and hacks, and helping others grow </div>
                <div className='flex items-center mt-4'> 
                    <Link href="https://www.youtube.com/channel/UCliXIi69MBphGgsxN693p0g">
                        <a target={'_blank'} rel="noreferrer">
                            <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> 
                                <AiFillYoutube size={30} /> 
                            </div> 
                        </a>
                    </Link> 
                    <Link href="https://github.com/crebro">
                        <a target={'_blank'} rel="noreferrer">
                            <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> 
                                <AiFillGithub size={30} /> 
                            </div> 
                        </a>
                    </Link> 
                    <Link href="mailto:creationduwal@gmail.">
                        <a target={'_blank'} rel="noreferrer">
                            <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> 
                                <MdOutgoingMail size={30} /> 
                            </div> 
                        </a>
                    </Link> 
                    <Link href="https://twitter.com/duwalkreation">
                        <a target={'_blank'} rel="noreferrer">
                            <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> 
                                <FaTwitter size={30} /> 
                            </div> 
                        </a>
                    </Link> 
                </div>
            </div>
            <div className='my-2 min-h-[125px] min-w-[125px] h-[125px] w-[125px] lg:h-[140px] lg:w-[140px] xl:h-[150px] xl:w-[150px]'>
                <img className='hover:cursor-pointer rounded-2xl aspect-square border-white transition duration-150 hover:scale-110 hover:-translate-y-3' src="https://avatars.githubusercontent.com/crebro" />
            </div>
        </div>
    )
}

export default Hero
