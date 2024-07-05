// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/myavatar.png'} width={737} height={678} alt="avatar_img" className="translate-z-0 w-[78%] h-full"/>
  </div>;
};

export default Avatar;
