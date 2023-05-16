'use client';

import { useCallback } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

interface SearchCounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
}

const SearchCounter: React.FC<SearchCounterProps> = ({
    title,
    subtitle,
    value,
    onChange,
}) => {

    const onAdd = useCallback(() => {
        onChange(value + 25);
    }, [onChange, value]);

    const onReduce = useCallback(() => {
        if (value === 25) {
            return;
        }
        
        onChange(value - 25);
    }, [value, onChange]);

    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <div className="font-medium dark:text-white">
                    {title}
                </div>
                <div className="font-light text-gray-600 dark:text-neutral-500">
                    {subtitle}
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div 
                    onClick={onReduce} 
                    className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 dark:text-neutral-400 cursor-pointer hover:opacity-80 transition" 
                >
                    <HiOutlineMinus />
                </div>
                <div className="font-light text-xl text-neutral-600 dark:text-neutral-400">
                    {value}
                </div>
                <div 
                    onClick={onAdd} 
                    className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 dark:text-neutral-400 cursor-pointer hover:opacity-80 transition" 
                >
                    <HiOutlinePlus />
                </div>
            </div>
        </div>
    );
}

export default SearchCounter;