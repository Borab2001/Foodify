'use client';

import { useMemo } from "react";

import { SafeListing, SafeUser } from "@/app/types";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

interface ListingClientProps {
    listing: SafeListing & {
        user: SafeUser
    };
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
    const category = useMemo(() => {
        return categories.find((items) => 
        items.label === listing.category);
    }, [listing.category]);

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        category={listing.category}
                        imageSrc={listing.imageSrc}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                    <div className="grid grid-cols-1 md:grid-cold-7 md:gap-10 mt-6">
                        <ListingInfo 
                            user={listing.user}
                            description={listing.description}
                            ingredientCount={listing.ingredientCount}
                            servingCount={listing.servingCount}
                            minuteCount={listing.minuteCount}
                            calories={listing.calories}
                            category={category} 
                            ingredientList={listing.ingredientList}                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ListingClient;