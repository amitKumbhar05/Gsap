import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import {
    AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub, AiOutlineProject,
    AiOutlineYoutube, AiOutlineMail
} from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { BiLogoWhatsapp } from 'react-icons/bi'

function Dash() {
    const [issmall, setIssmall] = useState(false)
    useEffect(()=>{
        gsap.to('.inner', {
            opacity: 0
        })
        gsap.to('.bx', {
            scale: 0.2,
            backgroundColor: 'red'
        })
        gsap.to('.l', {
            x: 90
        })
        gsap.to('.t', {
            y: 90
        })
        gsap.to('.r', {
            x: -90
        })
        gsap.to('.d', {
            y: -90
        })
        setIssmall(true)
    },[])
    const run = () => {
        if (!issmall) {
            gsap.to('.inner', {
                opacity: 0
            })
            gsap.to('.bx', {
                scale: 0.2,
                backgroundColor: 'red'
            })
            gsap.to('.l', {
                x: 90
            })
            gsap.to('.t', {
                y: 90
            })
            gsap.to('.r', {
                x: -90
            })
            gsap.to('.d', {
                y: -90
            })
            setIssmall(true)
        }
        else {
            gsap.to('.inner', {
                opacity: 1
            })
            gsap.to('.bx', {
                scale: 1,
                backgroundColor: '#EA580C'
            })
            gsap.to('.l', {
                x: 0
            })
            gsap.to('.t', {
                y: 0
            })
            gsap.to('.r', {
                x: 0
            })
            gsap.to('.d', {
                y: 0
            })
            setIssmall(false)
        }


    }
    return (
        <div className='m-5 flex gap-2 flex-col'>
            <div className='flex gap-2'>
                <a href="https://www.instagram.com/" target='_blank'>
                    <div className='bx t l h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <AiOutlineInstagram className='h-10 w-10 ml-3' />Instagram
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://www.facebook.com/" target='_blank'>
                    <div className='bx t h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <AiOutlineFacebook className='h-10 w-10 ml-3' />Facebook
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://twitter.com/" target='_blank'>
                    <div className='bx t r h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <CiTwitter className='h-10 w-10 ml-2' />Twitter
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <div className='flex gap-2'>
                <a href="https://www.linkedin.com/in/amit-kumbhar-2468a024a/" target='_blank'>
                    <div className='bx l h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <AiOutlineLinkedin className='h-10 w-10 ml-2' />Linkedin
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/amitKumbhar05" target='_blank'>
                    <div className='bx h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <AiOutlineGithub className='h-10 w-10 ml-1' />Github
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://amitkumbhar05.github.io/Projects/" target='_blank'>
                    <div className='bx r h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <AiOutlineProject className='h-10 w-10 ml-1' />Projects
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <div className='flex gap-2'>
                <a href="https://wa.me/918208620606" target='_blank'>
                    <div className='bx l d h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <BiLogoWhatsapp className='h-10 w-10 ml-3' />WhatsApp
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/" target='_blank'>
                    <div className='bx d h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <AiOutlineYoutube className='h-10 w-10 ml-2' />YouTube
                            </div>
                        </div>
                    </div>
                </a>
                <a href="mailto:amitkumbhar189@gmail.com">
                    <div className='bx r d h-24 w-24 bg-orange-600 rounded-lg m-2'>
                        <div className="inner text-sm flex flex-col justify-center items-center text-white">
                            <div className='pt-4'>
                                <AiOutlineMail className='h-10 w-10 ml-1' />E-mail
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <button onClick={run} className="bg-purple-900 p-2 text-white text-2xl font-bold rounded-lg" >Click Me</button>
        </div>
    )
}

export default Dash
