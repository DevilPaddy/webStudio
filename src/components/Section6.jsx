import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const Section6 = () => {

    const container = useRef(null);

    useGSAP(() => {
        const belt = container.current;
        const beltContent = belt.innerHTML;
        const beltWidth = belt.scrollWidth / 2;
        belt.innerHTML += beltContent;

        gsap.to(belt, {
            x: -beltWidth,
            duration: 15,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % beltWidth)
            }
        });
    });
    return (
        <section className="last w-[100vw] mt-8">

            <div className="clients md:mt-8 mb-8">
                <h6 className='titles px-2.5 md:px-8'>Our Clients</h6>
                <div ref={container} className="loop flex gap-8 w-full m-2">
                    <p className='brand-logo'>TCS</p>
                    <p className='brand-logo'>QATAR_CHAMBER</p>
                    <p className='brand-logo'>MET</p>
                    <p className='brand-logo'>AGS</p>
                    <p className='brand-logo'>TERNA</p>
                    <p className='brand-logo'>IDEMI</p>
                    <p className='brand-logo'>LBS</p>
                    <p className='brand-logo'>MGM</p>
                    <p className='brand-logo'>TCS</p>
                    <p className='brand-logo'>QATAR_CHAMBER</p>
                    <p className='brand-logo'>MET</p>
                    <p className='brand-logo'>AGS</p>
                    <p className='brand-logo'>TERNA</p>
                    <p className='brand-logo'>IDEMI</p>
                    <p className='brand-logo'>LBS</p>
                    <p className='brand-logo'>MGM</p>
                </div>
            </div>

            <div className="upper flex flex-col justify-center items-center gap-2 md:gap-4 px-2.5 md:px-[18%] ">
                <h6 className="titles">OUR SOLUTIONS</h6>
                <p className='para2 text-center'>Qualsoft delivers premium, next-gen IT solutions empowering businesses worldwide with innovation, precision, and strategic partnerships.</p>
            </div>

            <div className="big-font w-[100vw] mx-2.5 md:mx-12">
                <p>Designing innovation <em className='lowercase font-light '>for</em> brands</p>
            </div>
        </section>
    )
}

export default Section6