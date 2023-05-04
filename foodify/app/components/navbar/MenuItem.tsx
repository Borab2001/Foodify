'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
    textWhite: boolean;
    background: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    textWhite,
    background
}) => {
    return (
        <div onClick={onClick} className={`py-3 text-lg font-bold rounded-full w-full mt-1 hover:bg-lightGrey transition flex flex-row items-center justify-center gap-4 border-2 border-transparent
            ${textWhite ? 'text-white' : 'text-black'}
            ${background ? 'bg-green' : 'bg-transparent'}
        `}>
            {label}
        </div>
    )
};

export default MenuItem;