'use client';

import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
    const searchModal = useSearchModal();
    const params = useSearchParams();

    const category = params?.get('category');
    const minuteCount = params?.get('minuteCount');
    const calories = params?.get('calories');
    const ingredientCount = params?.get('ingredientCount');

    const categoryLabel = useMemo(() => {
         if (category) {
            return `${category}`;
         }

         return 'Add Category';
    }, [category]);

    const minuteCountLabel = useMemo(() => {
        if (minuteCount) {
           return `${minuteCount} Minute(s)`;
        }

        return 'Add Time';
   }, [minuteCount]);

   const caloriesLabel = useMemo(() => {
    if (calories) {
       return `${calories} Calories`;
    }

    return 'Add Calories';
}, [calories]);

const ingredientCountLabel = useMemo(() => {
    if (ingredientCount) {
       return `${ingredientCount} Ingredients`;
    }

    return 'Add Ingredient';
}, [ingredientCount]);

    return (
        <div onClick={searchModal.onOpen} className="xl:border-[1px] w-auto ml-auto xl:ml-0 py-2 rounded-full xl:shadow-sm dark:border-neutral-700 hover:border-green dark:hover:border-green focus-within:border-green transition cursor-pointer">
            <div className="flex flex-row items-center justify-end pl-4 pr-2 gap-4">
                <div className="hidden xl:block text-sm font-semibold px-6 flex-1 text-center whitespace-nowrap dark:text-neutral-500">
                    {categoryLabel}
                </div>

                <div className="hidden xl:block text-sm font-semibold px-6 border-l-[1px] dark:border-neutral-500 flex-1 text-center whitespace-nowrap dark:text-neutral-500">
                    {minuteCountLabel}
                </div>

                <div className="hidden xl:block text-sm font-semibold px-6 border-l-[1px] dark:border-neutral-500 flex-1 text-center whitespace-nowrap dark:text-neutral-500">
                    {caloriesLabel}
                </div>

                <div className="text-sm flex flex-row items-center gap-3">
                    <div className="hidden xl:block text-sm font-semibold px-6 border-l-[1px] dark:border-neutral-500 flex-1 text-center whitespace-nowrap dark:text-neutral-500">
                        {ingredientCountLabel}
                    </div>
                    <div className="p-2 bg-green rounded-full text-white dark:text-black">
                        <FiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;