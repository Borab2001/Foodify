'use client';

import { Listing } from "@prisma/client";

import { SafeListing, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
    data: SafeListing;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {
    const router = useRouter();
    const title = data.title;

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId);
        }, [onAction, actionId, disabled]
    )

    const calories = useMemo(() => {
        return data.calories;
    }, [data.calories]);



    return (
        <div 
            onClick={() => router.push(`/listings/${data.id}`)}
            className="col-span-1 cursor-pointer group">
                <div className="flex flex-col w-full">
                    <div className="aspect-square w-full relative overflow-hidden rounded-xl mb-2">
                        <Image 
                            fill
                            alt="Listing"
                            src={data.imageSrc}
                            className="object-cover h-full w-full group-hover:scale-110 transition duration-300" 
                        />
                        <div className="absolute top-3 right-3">
                            <HeartButton
                                listingId={data.id}
                                currentUser={currentUser}
                            />
                        </div>
                    </div>
                    <div className="font-semibold text-lg dark:text-white">
                        {title}
                    </div>
                    <div className="font-light text-neutral-500 mb-2">
                        {data.category}
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <div className="font-semibold dark:text-white">
                            {calories} kcal
                        </div>
                    </div>
                    <div className="mt-3">
                        {onAction && actionLabel && (
                            <Button
                                disabled={disabled}
                                small
                                label={actionLabel}
                                onClick={handleCancel}
                            />
                        )}
                    </div>
                </div>
        </div>
    );
}

export default ListingCard;