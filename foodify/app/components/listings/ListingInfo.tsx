'use client';

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

import { TbEggs } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

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
                <div className="text-xl font-semibold flex flex-row items-center gap-2 dark:text-white">
                    <div>Recipe by {user?.name}</div>
                    <Avatar  src={user?.image}/>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-light text-neutral-500">
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
                    <div className="flex flex-row gap-2 items-center mb-1 dark:text-white">
                        <TbEggs size={30} className="text-green shrink-0" />
                        Ingredients
                    </div>
                    {/* To display ingredients with bullet points */}
                    {/* <div className="text-neutral-500 font-light text-base whitespace-pre-line">
                        {ingredientList}
                    </div> */}
                    {/* To display ingredients with bullet points */}
                    <ul className="text-neutral-500 font-light text-base">
                        {ingredientList.split('\n').map((ingredient, index) => (
                            <li key={index} className="flex items-center">
                            <span className="bullet">&bull;</span>
                            <span className="ml-2">{ingredient}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-lg font-semibold">
                    <div className="flex flex-row gap-2 items-center mb-1 dark:text-white">
                        <HiOutlineClipboardDocumentList size={30} className="text-green shrink-0" />
                        Tutorial
                    </div>
                    <div className="text-neutral-500 font-light text-base whitespace-pre-line">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingInfo;