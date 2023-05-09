'use client';

import { FiSearch } from 'react-icons/fi';

const Search = () => {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:border-green focus-within:border-green transition cursor-pointer">
            <div className="flex flex-row items-center justify-end pl-4 pr-2 gap-4">
                {/* <div className="text-sm font-semibold px-6">
                    
                </div>

                <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                    
                </div> */}
                {/* <input type="text" className="w-full py-2 outline-none focus:outline-none focus:border-green"/> */}

                <div className="text-sm text-gray-600 flex flex-row items-center gap-3">
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