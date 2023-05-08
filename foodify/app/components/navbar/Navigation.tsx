'use client';

import { SafeUser } from "@/app/types";

import Container from "../Container";

import { GrHomeRounded } from "react-icons/gr";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsListUl } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";


interface NavigationProps {
    currentUser?: SafeUser | null;
}

const Navigation: React.FC<NavigationProps> = ({
    currentUser
}) => {
    return (
        <div className="fixed bottom-0 w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-t-[1px] px-4">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div className="cursor-pointer rounded-md hover:bg-neutral-200 h-10 w-10 flex items-center justify-center transition">
                            <GrHomeRounded size={25}/>
                        </div>
                        <div className="cursor-pointer rounded-md hover:bg-neutral-200 h-10 w-10 flex items-center justify-center transition">
                            <BsListUl size={30}/>
                        </div>
                        <div className="cursor-pointer rounded-md hover:bg-neutral-200 h-10 w-10 flex items-center justify-center transition">
                            <CgSmartHomeRefrigerator size={30}/>
                        </div>
                        <div className="cursor-pointer rounded-md hover:bg-neutral-200 h-10 w-10 flex items-center justify-center transition">
                            <HiOutlineCalendar size={30}/>
                        </div>
                        <div className="cursor-pointer rounded-md hover:bg-neutral-200 h-10 w-10 flex items-center justify-center transition">
                            <FaRegUser size={25}/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navigation;