export default function Navbar() {
  return (
    <nav className="flex flex-row w-full lg:w-auto justify-between items-center fixed lg:rounded-full lg:left-[50px] lg:right-[50px] lg:top-[40px] h-[80px] bg-back text-white p-2 z-50">
      <div id="logo" className="flex-1">
        logo
      </div>
      <div id="menu">menu</div>
      <div id="menu-icon"></div>
      <div id="donwlod-cv">
        <a
          href="https://github.com/cv-cv/cv-cv"
          target="_blank"
          rel="noreferrer"
          className="rounded-full text-white"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
