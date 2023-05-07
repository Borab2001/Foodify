'use client';

import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";

import useAddRecipeModal from "@/app/hooks/useAddRecipeModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const loginModal = useLoginModal();
    const addRecipeModal = useAddRecipeModal();

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
        <div className="relative">
            <div className="flex flex-row items-center gap-3">

                {/* This button will allow you to add a recipe (not sure about the functionnality yet) */}
                <div onClick={onAddRecipe} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg:neutral-100 transition cursor-pointer">
                    Add Recipe
                </div>

                <div onClick={toggleOpen} className="flex flex-row shrink-0 grow-0 items-center justify-center rounded-full cursor-pointer hover:opacity-80 transition">
                    <Avatar src={currentUser?.image} />
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[200px] px-8 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                {/* This button will allow you to add a recipe (not sure about the functionnality yet) */}
                                <MenuItem onClick={addRecipeModal.onOpen} label="Add Recipe" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                                <MenuItem onClick={() => { } } label="Settings" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                                <hr />
                                <MenuItem onClick={() => signOut()} label="Sign Out" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={() => { } } label="Settings" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                                <MenuItem onClick={() => { } } label="Sign Out" textWhite={false} background={false} radius={false} bold={false} hoverBackground={false}/>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
