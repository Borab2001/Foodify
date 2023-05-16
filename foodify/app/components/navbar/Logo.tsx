'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <>
            <Image onClick={() => router.push('/')} alt="Logo" className="block cursor-pointer" height="125" width="125" src="/images/logo.svg" />
        </>
    );
}

export default Logo;