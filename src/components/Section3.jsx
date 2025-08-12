import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {
    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            console.log(e)
        })

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    })

    useGSAP(() => {
        gsap.utils.toArray(".img").forEach((el) => {
            const randomY = gsap.utils.random(-200, 350);

            gsap.to(el, {
                y: randomY,
                ease: "none",
                scrollTrigger: {
                    trigger: '.page3',
                    start: "top 40%",
                    end: "bottom bottom",
                    scrub:true
                }
            });
        });
    });


    return (

        <section className="page3 relative w-[100vw] h-[160vh] p-8 overflow-hidden">
            <div className="columns-1 md:columns-3 lg:columns-4 gap-4 h-[200vh]">
                {[
                    "/image1.jpg",
                    "/image2.jpg",
                    "/image3.jpg",
                    "/image4.jpg",
                    "/image5.jpg",
                    "/image6.jpg",
                    "/image7.jpg",
                    "/image8.jpg",
                    "/image9.jpg",
                    "/image10.jpg"
                ].map((src, i) => (
                    <div key={i} className="img mb-4 break-inside-avoid">
                        <img src={src} alt="" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                ))}
            </div>



            <div className="absolute inset-0 top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 bg-[#00000078] px-4">
                <p className="md:text-[4vw] text-[10vw] font-[700] text-center max-w-5xl text-[#ffffff] leading-[34.6px] md:leading-[56px] text-pretty">
                    Harness the power of innovation and elevate your presence.
                    Trusted by 750+ satisfied clients worldwide.
                    Crafting bespoke, cutting-edge solutions tailored to your vision.
                </p>
            </div>
        </section>

    )
}

export default Section3