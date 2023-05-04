'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import { useCallback, useState } from "react";
import MenuItem from './navbar/MenuItem';
import useRegisterModal from "@/app/hooks/useRegisterModal";

const Auth = () => {
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative h-full w-full bg-[url('/images/home_bg.webp')] bg-no-repeat bg-bottom bg-fixed bg-cover flex justify-center items-center">
            <div className="absolute z-0 h-full w-full bg-gradient-to-t from-black/80 to-black/20"></div>
            <div className="absolute z-1 flex flex-col items-center justify-center text-center max-w-sm w-full px-4 gap-4">
                <img className="w-48 h-auto" src="/images/icon.svg" alt="" />
                <h1 className="text-white font-bold text-4xl">Multiple Uses.<br/>One App.</h1>
                <h2 className="text-white font-semibold text-xl">Look | Save | Cook</h2>

                {/* <button className="bg-green text-black text-center text-lg rounded-full py-3 px-2 w-full mt-8 font-bold">Sign Up</button> */}
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" textWhite={false} background={true}/>
                <button className='bg-transparent py-3 text-white text-lg font-bold rounded-full w-full mt-1 hover:bg-lightGrey transition flex flex-row items-center justify-center gap-4 border-2'
                    onClick={() => {}}
                >
                    <FcGoogle size={25} />
                    Continue with Google
                </button>
                <button className='bg-transparent py-3 text-white text-lg font-bold rounded-full w-full mt-1 hover:bg-lightGrey transition flex flex-row items-center justify-center gap-4 border-2'
                    onClick={() => {}}
                >
                    <FaGithub size={25} />
                    Continue with GitHub
                </button>
                <MenuItem onClick={registerModal.onOpen} label="Log In" textWhite={true} background={false}/>
            </div>
        </div>
    );
}

export default Auth;