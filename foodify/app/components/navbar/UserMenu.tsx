'use client';

import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return(
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => {}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg:neutral-100 transition cursor-pointer">
                    
                </div>
                <div onClick={toggleOpen} className="flex flex-row shrink-0 grow-0 items-center justify-center rounded-full cursor-pointer hover:opacity-80 transition">
                    <Avatar />
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[35vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                        <MenuItem onClick={() => {}} label="Settings"/>
                        <MenuItem onClick={() => {}} label="Sign Out"/>
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;