'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BsFire } from 'react-icons/bs';

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatCalories?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatCalories,
    required,
    register,
    errors
}) => {
    return (
        <div className="w-full relative">
            {formatCalories && (
                <BsFire size={24} className="text-neutral-700 absolute top-5 left-2"/>
            )}
            <input 
                id={id} 
                disabled={disabled} 
                {...register(id, { required })}
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    dark:bg-dark
                    dark:text-white
                    border-2
                    dark:border-neutral-500
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatCalories ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black dark:focus:border-white'}
                `}
             />
             <label className={`
                absolute 
                text-md 
                duration-150 
                transform 
                scale-75
                -translate-y-3 
                top-5 
                z-10 
                origin-[0]
                ${formatCalories ? 'left-9' : 'left-4'}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
                ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
             `}>
                {label}
             </label>
        </div>
    );
}

export default Input;