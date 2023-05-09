'use client';

import { IconType } from "react-icons/lib";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon
}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
            ${outline ? 'bg-white' : 'bg-green'} 
            ${outline ? 'border-black' : 'border-green'} 
            ${outline ? 'text-black' : 'text-black'} 
            ${small ? 'py-2' : 'py-3'} 
            ${small ? 'text-sm' : 'text-md'} 
            ${small ? 'font-medium' : 'font-semibold'}
            ${small ? 'border-[1px]' : 'border-2'}`}
        >
            {Icon && (
                <Icon size={24} className="absolute left-4 top-3"/>
            )}
            {label}
        </button>
    );
}

export default Button;