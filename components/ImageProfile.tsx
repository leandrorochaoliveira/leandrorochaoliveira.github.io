import profilePic from '../public/me.jpg'

export default function ImageProfile() {
  return (
    <div className="w-full overflow-hidden relative lg:h-full">
      <div className="w-full z-10 lg:h-full">
      <img
        className="w-full z-10 lg:h-full opacity-85 grayscale object-cover object-center"
        src={profilePic.src}
        alt=""
      />
      </div>
      
      <div className="bg-primary z-20 opacity-60 w-full h-full absolute top-0 left-0"></div>
    </div>
  );
}
