import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const text = textRef.current;

        function getScrollAmount() {
            let textWidth = text.scrollWidth;
            return -(textWidth - window.innerWidth);
        }

        const tween = gsap.to(text, {
            x: getScrollAmount,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: ".page2",
            start: "top top",
            end: () => `+=${(getScrollAmount() * -1)+2}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <section className="page2 overflow-hidden w-screen h-[60vh] md:h-screen flex items-center">
                <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/bgVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <h6
                    ref={textRef}
                    className="relative text-[22.98vw] md:text-[16vw] font-bold whitespace-nowrap text-[#e8e8e8]"
                >
                    Shaping Elegant & Intelligent Solutions
                </h6>
            </section>
        </>
    );
};

export default Section2;
