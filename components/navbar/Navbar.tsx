import Image from 'next/image'
import logo from '../public/logo.svg'
import Menu from './Menu'

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full lg:w-auto justify-between items-center fixed lg:rounded-full lg:left-[50px] lg:right-[50px] lg:top-[40px] h-[80px] bg-[#585d65] text-white p-2 z-50">
      <div id="logo" className="px-4">
        <Image
          src={logo}
          alt="Leandro Rocha"
          height={44}
        />
      </div>
      <div id="menu" className='flex-1 '>
        <Menu />
      </div>
      <div id="menu-icon"></div>
      <div id="donwlod-cv" className="h-full">
        <a
          href="https://github.com/cv-cv/cv-cv"
          target="_blank"
          rel="noreferrer"
          className="rounded-full flex items-center justify-center px-8 h-full border border-primary text-primary"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
