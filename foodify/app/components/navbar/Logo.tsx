'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <>
            <Image onClick={() => router.push('/')} alt="Logo" className="block cursor-pointer" height="125" width="125" src="/images/logo.svg" />
            {/* <Image onClick={() => router.push('/')} alt="Logo" className="block sm:hidden cursor-pointer" height="35" width="35" src="/images/icon.svg" /> */}
        </>
    );
}

export default Logo;