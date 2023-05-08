'use client';

import { SafeUser } from "@/app/types";
import Image from "next/image";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
    title: string;
    category: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    category,
    imageSrc,
    id,
    currentUser
}) => {
    
    return (
        <>
            <Heading 
                title={title}
                subtitle={category}
            />
            <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
                <Image 
                    alt="Image"
                    src={imageSrc}
                    fill
                    className="object-cover w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton 
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    );
}

export default ListingHead;