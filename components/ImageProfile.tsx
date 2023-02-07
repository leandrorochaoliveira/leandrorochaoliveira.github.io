import profilePic from '../public/me.jpg'
import Image from 'next/image';

export default function ImageProfile() {
  return (
    <div className="w-full h-1/2 overflow-hidden relative lg:h-full">
      <div className="w-full z-10 lg:h-full">
        <Image
          className="w-full z-10 h-1/2 lg:h-full opacity-85 grayscale object-cover object-center"
          src={profilePic}
          alt="Leandro Rocha"
        />
      </div>

      <div className="bg-primary z-20 opacity-60 w-full h-full absolute top-0 left-0"></div>
    </div>
  );
}
