'use client';

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

import { TbEggs } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
    user: SafeUser;
    description: string;
    ingredientCount: number;
    servingCount: number;
    minuteCount: number;
    calories: string;
    ingredientList: string;
    category: {
        icon: IconType,
        label: string;
        description: string;
    } | undefined
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    ingredientCount,
    servingCount,
    minuteCount,
    calories,
    ingredientList,
    category
}) => {

    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">

                {/* Optional */}
                <div className="text-xl font-semibold flex flex-row items-center gap-2">
                    <div>Recipe by {user?.name}</div>
                    <Avatar  src={user?.image}/>
                </div>

                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    <div className="flex flex-row items-center gap-1">
                        <TbEggs />
                        {ingredientCount} ingredients
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <GiKnifeFork />
                        {servingCount} servings
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <BiTimeFive />
                        {minuteCount} minutes
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <AiOutlineFire />
                        {calories} kcal
                    </div>
                </div>
                
            </div>
            <hr />
            {category && (
                <ListingCategory
                icon={category.icon}
                label={category.label}
                description={category.description}
            />
            )}
            <hr />
            <div className="flex flex-col gap-10">
                <div className="text-lg font-semibold">
                    Ingredients
                    <div className="text-neutral-500 font-light text-base">
                        {ingredientList}
                    </div>
                </div>
                <div className="text-lg font-semibold">
                    Tutorial
                    <div className="text-neutral-500 font-light text-base">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingInfo;