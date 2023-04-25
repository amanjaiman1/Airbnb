'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  

  return ( 
    <Image
      className="hidden md:block cursor-pointer" 
      src="/images/logo.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}
 
export default Logo;