'use client';

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return (
        <Image className="rounded-full" height="34" width="34" alt="Avatar" src={src || "/images/placeholder.webp"} />
    );
}

export default Avatar;