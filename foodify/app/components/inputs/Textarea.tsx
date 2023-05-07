'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BsFire } from 'react-icons/bs';

interface TextareaProps {
    id: string;
    label: string;
    rows?: number;
    disabled?: boolean;
    formatCalories?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Textarea: React.FC<TextareaProps> = ({
    id,
    label,
    disabled,
    rows,
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
            <textarea 
                id={id} 
                rows={rows}
                disabled={disabled} 
                {...register(id, { required })}
                placeholder=" "
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    resize-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatCalories ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
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

export default Textarea;