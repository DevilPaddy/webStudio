import React, { useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = ({ className = '' }) => {
  gsap.registerPlugin(useGSAP)
  const container = useRef()

  const [hovered, setHovered] = useState(null)
  const location = useLocation()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(container.current, { duration: 0.2, opacity: 0 })
  }, { scope: container })

  const isLinkActive = (path) => {
    if (hovered) return hovered === path
    return location.pathname === path
  }

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'ARCHIVE', path: '/archive' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <div ref={container}>
      <nav className="nav-bar w-[94%] md:w-[32%] h-12 md:h-14 fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center z-50">
        <div className="atag flex select-none">
          {links.map(({ name, path }) => {
            const active = isLinkActive(path)

            return (
              <NavLink
                key={path}
                to={path}
                onMouseEnter={() => setHovered(path)}
                onMouseLeave={() => setHovered(null)}
                className={`rounded-full font-medium text-center
                  min-w-[50px] md:min-w-[68px]
                  py-2 px-3 md:py-2 md:px-4
                  transition-colors duration-100
                  ${active
                    ? 'bg-white text-black shadow-md'
                    : 'text-white hover:bg-white hover:text-black'}
                `}
              >
                {name}
              </NavLink>

            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
