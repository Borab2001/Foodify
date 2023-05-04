'use client';

import { FiSearch } from 'react-icons/fi';

const Search = () => {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">
                    
                </div>

                <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                    
                </div>

                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block">
                        
                    </div>
                    <div className="p-2 bg-green rounded-full text-white">
                        <FiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;