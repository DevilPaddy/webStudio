import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

import Topsection from './components/Topsection'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <ReactLenis root
      options={{
        lerp: 0.07,      
        duration: 1.5,   
        smoothTouch: true, 
        smoothWheel: true 
      }}
    >

      {/* page 1*/}
      <section className="page1 h-auto md:h-[100vh] w-[100vw] px-8">
        {/* top section */}
        <Topsection />
        {/* navbar */}
        <Navbar />
        {/* hero section */}
        <div className="hero-section mt-[8rem] md:mt-1 md:h-full w-full flex md:flex-row flex-col md:items-end justify-center pb-8 md:pb-20">
          <div className='flex md:flex-row flex-col items-end'>
            <div className="hero-text w-full md:w-[77%] text-balance pb-4">
              <h1>Premium Digital Design & Intelligent Solutions</h1>
            </div>
            <div className="hero-para para md:w-[23%] pb-4">
              <p>Delivering innovative AI, web, mobile, IoT, and biometric solutions tailored to your business needs. With a skilled and experienced team, we combine cutting-edge technology with industry expertise to create smart, scalable, and future-ready solutions that drive growth and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* page 2 */}
      <Section2 />

      {/* page 3 */}
      <Section3 />
      <div className="break"></div>

      {/* page 4 */}
      <Section4 />


      {/* page 5 */}
      <Section5 />

      <Section6 />
      <footer className="fooetr-container w-[100vw] h-auto p-8 md:px-28 bg-zinc-900 ">
        <div className='flex justify-between items-center mb-8 md:mb-18'>
          <Link to='/'><h1 className='text-[6.34vw] md:text-[2.432vw] font-bold text-[#d1cfcf]'>QUALSOFT</h1></Link>
          <div className='flex items-center justify-center gap-4 md:gap-22'>
            <div>
              <p className='text-[4vw] md:text-[2.432vw] font-semibold text-[#a0a0a0]'>Menu</p>
              <ul className='flex flex-col gap-1 md:gap-4'>
                <Link to='/' className='atag1'>Contact</Link>
                <Link to='/' className='atag1'>Studio</Link>
                <Link to='/' className='atag1'>Work</Link>
              </ul>
            </div>
            <div>
              <p className='text-[4vw] md:text-[2.432vw] font-semibold text-[#a0a0a0]'>Social</p>
              <ul className='flex flex-col gap-1 md:gap-4'>
                <Link to='/' className='atag1'>Instagram</Link>
                <Link to='/' className='atag1'>Linkedin</Link>
                <Link to='/' className='atag1'>Facebook</Link>
              </ul>
            </div>
          </div>
        </div>
        <Link to='https://www.anujbelsare.tech/' className='text-[3vw] mb-22 md:mb-4 md:text-[2vw] font-medium text-zinc-500'><em>Made by Anuj Belsare</em></Link>
      </footer>

    </ReactLenis>
  )
}

export default App