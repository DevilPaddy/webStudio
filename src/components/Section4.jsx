import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {
    const container = useRef(null)

    useGSAP(()=>{
        gsap.from(container.current,{
            y:100,
            opacity:0,
            duration:2,
            ease: "none",
            scrollTrigger:{
                trigger:'.page4',
                start: "top top",
                end:"bottom bottom",
            }
        })
    })
    return (
        <section className="page4 w-[100vw] mt-[2rem] mb-8">
            <div className="flex items-center justify-start px-4 md:px-[2rem]">
                <h6 className='titles'>Our Services</h6>
            </div>
            <div className="services w-full mt-4 md:mt-[2rem] mb-[3rem]">
                <div className="service w-full border-t-2 border-[#1d1d1d] "><h4 className='sub-title'>CUSTOM AI SOFTWARE DEVELOPMENT </h4></div>
                <div className="service w-full "><h4 className='sub-title'>WEB APPLICATION DEVELOPMENT </h4></div>
                <div className="service w-full "><h4 className='sub-title'>MOBILE APPLICATION DEVELOPMENT </h4></div>
                <div className="service w-full "><h4 className='sub-title'>IOT & BIOMETRICS</h4></div>
            </div>

            <div ref={container} className='w-full md:p-8 px-2.5 md:px-12 flex justify-between items-center'>
                <div className='flex flex-col justify-center'><h6 className='text-[10vw] md:text-[16vh] font-semibold text-zinc-300'>750<sup>+</sup></h6><p className='md:text-[4.896vh] text-zinc-400'>SATISFIED CLIENTS</p></div>
                <div className='flex flex-col justify-center'><h6 className='text-[10vw] md:text-[16vh] font-semibold text-zinc-300'>15<sup>+</sup></h6> <p className='md:text-[4.896vh] text-zinc-400'>YEARS EXPERIENCE</p></div>
                <div className='flex flex-col justify-center'><h6 className='text-[10vw] md:text-[16vh] font-semibold text-zinc-300'>6<sup>+</sup></h6>  <p className='md:text-[4.896vh] text-zinc-400'>PRODUCTS</p></div>
            </div>
        </section>
    )
}

export default Section4