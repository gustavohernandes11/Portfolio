import Image from "next/image";
import LogoIMG from "../../public/favicon-32x32.png";

export const Logo = () => (
    <Image alt="logo" src={LogoIMG} height={32} width={32} />
);
