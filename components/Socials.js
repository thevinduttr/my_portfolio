//links
import Link from "next/link";

//icons
import { RiLinkedinLine, RiInstagramLine, RiFacebookLine, RiGithubLine, RiYoutubeLine, RiWhatsappLine} from "react-icons/ri";


const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/thevindu-rathnaweera-3a46ba244/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>

    <Link href={'https://www.instagram.com/thevindu_tr'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>

    <Link href={'https://www.facebook.com/thevindu.rathnaweera.3/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>

    <Link href={'https://github.com/thevinduttr'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>

    <Link href={'https://www.youtube.com/channel/UC6Pnztg_qGbAli5uCRS1-9w'} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link>

    <Link href={'https://api.whatsapp.com/send/?phone=%2B94714337912&text&type=phone_number&app_absent=0'} className="hover:text-accent transition-all duration-300">
      <RiWhatsappLine />
    </Link>
  </div>;
};

export default Socials;
