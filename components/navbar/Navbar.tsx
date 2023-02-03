import Image from 'next/image'
import logo from '../../public/logo.svg'
import Menu from './Menu'
import { useState, useEffect } from 'react';
import { scrollToElement } from '../../shared/scroll';
import { BiDownload } from "react-icons/bi";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(window.innerWidth > 1024)
  }, [])

  return (
    <nav className="grid grid-cols-3 w-full lg:flex lg:flex-row  lg:w-auto lg:justify-between items-center fixed lg:rounded-full lg:left-[50px] lg:right-[50px] lg:top-[40px] h-[80px] bg-[#585d65] text-white p-2 z-50">
      <div id="logo" className="px-4">
        <a href="#Home" className="cursor-pointer" onClick={(e) => scrollToElement(`#Home`, e)}>
          <Image
            src={logo}
            alt="Leandro Rocha"
            height={44}
          />
        </a>

      </div>
      <div id="menu" className={`absolute left-0 p-4 top-[80px] w-full bg-back lg:relative lg:top-0 lg:p-0 lg:bg-inherit lg:w-auto lg:flex-1 ${menuOpen ?
        'scale-y-100' : 'scale-y-0'
        }`}
      >
        <Menu />
      </div>
      <div id="menu-icon" className='lg:hidden text-center'>
        <button onClick={() => setMenuOpen(!menuOpen)} type="button">
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </button>

      </div>
      <div id="donwlod-cv" className="h-full flex flex-row justify-end align-middle">
        <a
          href="/curriculo.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full flex items-center justify-center w-[64px] lg:w-auto p-4 lg:px-8 lg:h-full border border-primary text-primary"
        >
          <span className='hidden lg:block'>Download CV</span>
          <span className='block lg:hidden'><BiDownload /></span>
        </a>
      </div>
    </nav>
  );
}
