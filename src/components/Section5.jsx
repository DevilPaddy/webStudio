import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Section5 = () => {
    const container = useRef()

    useGSAP(()=>{
        gsap.from('.card',{
            x:-2000,
            duration:1.12,
            opacity:0,
            ease:'power3.inOut',
            stagger:0.2,
            scrollTrigger:{
                trigger:'.reviews',
                start:"top 50%",
                end:"bottom bottom",
            }
        })
    })
    return (
        <section ref={container} className="reviews w-[100vw] mt-4">
            <p className='titles px-2.5 md:px-8'>What Clients Say's</p>
            <div className="client-review w-full px-2.5 md:p-8">
                <div className='card'>
                    <p className='para1'>One of the best and most impressive applications I have ever used, backed by equally prompt and reliable service. If only more companies followed their approach! They truly understand how to deliver solutions that address real problems, combining innovation with technology to deliver exceptional quality.</p>
                    <p className='para1'><em>"Advance Generation School"</em></p>
                    <p className='para1'>Jeddah - K.S.A.</p>
                </div>

                <div className='card'>
                    <p className='para1'>We are satisfied and proudly Certify That Since Last 7 Years We Are Using Library Management Software Provided By Ms.Qualsoft. The Software Has So Far Given Good Performance And The Company Has Provided Very Good After Sales Service.</p>
                    <p className='para1'><em>"M.G.M's Jawaharlal Nehru Engineering College"</em></p>
                    <p className='para1'>Chh.Sambhajinagar (Aurangabad) - Maharashtra</p>
                </div>

                <div className='card'>
                    <p className='para1'>We would like to share a quick note and let everyone know that Qualsoft has provided very good software for our HR Management integrated with Biometric Device. Before we have to spend too much time in doing the HR Calculations Manually, now within span of a day we are ready to prepare the reports. Thanks Qualsoft</p>
                    <p className='para1'><em>"Vasantrao Naik Mahavidyalaya"</em></p>
                    <p className='para1'>Chh.Sambhajinagar (Aurangabad) - Maharashtra</p>
                </div>
            </div>
        </section>
    )
}

export default Section5