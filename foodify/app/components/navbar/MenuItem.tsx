'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
    textWhite: boolean;
    background: boolean;
    radius: boolean;
    bold: boolean;
    hoverBackground: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    textWhite,
    background,
    radius,
    bold,
    hoverBackground
}) => {
    return (
        <div onClick={onClick} className={`py-3 w-full transition flex flex-row items-center justify-center gap-4 border-2 border-transparent cursor-pointer
            ${textWhite ? 'text-white' : 'text-black dark:text-white'}
            ${background ? 'bg-green' : 'bg-transparent'}
            ${radius ? 'rounded-full' : 'rounded-md'}
            ${bold ? 'font-bold' : 'font-semibold'}
            ${hoverBackground ? 'hover:bg-green-800 dark:hover:bg-green-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'}
        `}>
            {label}
        </div>
    )
};

export default MenuItem;