'use client';

import { IconType } from "react-icons";

interface ListingCategoryProps {
    icon: IconType;
    label: string;
    description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
    icon: Icon,
    label,
    description
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2 mb-1 text-lg font-semibold">
                    <Icon size={30} className="text-green shrink-0" />
                    {label}
                </div>
                <div className="text-neutral-500 font-light">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ListingCategory;