'use client';

import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";

import useAddRecipeModal from "@/app/hooks/useAddRecipeModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlusCircle }  from "react-icons/ai";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const router = useRouter();

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const addRecipeModal = useAddRecipeModal();
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onAddRecipe = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        // Open Add Recipe Modal
        addRecipeModal.onOpen();
    }, [currentUser, loginModal, addRecipeModal]);

    return(
        <div className="relative z-10">
            <div className="flex flex-row items-center gap-3">

                {/* This button will allow you to add a recipe (not sure about if I should keep it) */}
                <div onClick={onAddRecipe} className="hidden md:flex flex-row items-center gap-1 text-sm font-semibold py-3 px-4 rounded-full shrink-0 hover:bg-neutral-100 transition cursor-pointer">
                    <AiOutlinePlusCircle size={18}/>
                    Add Recipe
                </div>

                <div onClick={toggleOpen} className="flex flex-row shrink-0 grow-0 items-center justify-center rounded-full cursor-pointer hover:opacity-80 transition">
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                    <div className="block md:hidden">
                        <RxHamburgerMenu size={30} className="shrink-0" />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[200px] px-8 py-2 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col gap-1">
                        {currentUser ? (
                            <>
                                {/* This button will allow you to add a recipe (not sure about the functionnality yet) */}
                                <div className="block md:hidden">
                                    <MenuItem onClick={addRecipeModal.onOpen} label="Add Recipe" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                                </div>
                                <div className="block">
                                    <MenuItem onClick={() => router.push('/favorites')} label="My Favorites" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                                </div>
                                <MenuItem onClick={() => { } } label="Settings" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                                <hr />
                                <MenuItem onClick={() => signOut()} label="Sign Out" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={registerModal.onOpen} label="Sign Up" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                                <MenuItem onClick={loginModal.onOpen} label="Sign In" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
