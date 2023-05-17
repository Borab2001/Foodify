'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-4 text-2xl font-semibold text-black dark:text-white cursor-pointer" onClick={() => router.push('/')}>
                {/* <Image onClick={() => router.push('/')} alt="Logo" className="block cursor-pointer" height="125" width="125" src="/images/logo.svg" /> */}
                <Image alt="Logo" className="block" height="35" width="35" src="/images/icon.svg" />
                Foodify
            </div>
        </>
    );
}

export default Logo;