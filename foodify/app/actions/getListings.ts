import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    userId?: string;
    calories?: number;
    minuteCount?: number;
    ingredientCount?: number;
    category?: string;
}

export default async function getListings(
    params: IListingsParams
) {
    try {
        const { 
            userId,
            calories,
            minuteCount,
            ingredientCount,
            category
         } = params;

        let query: any = {};

        if (userId) {
            query.userId = userId;
        }

        if (calories) {
            query.calories = {
                lte: calories
            }
        }

        if (category) {
            query.category = category;
        }

        if (minuteCount) {
            query.minuteCount = {
                lte: +minuteCount
            }
        }
        
        if (ingredientCount) {
            query.ingredientCount = {
                lte: +ingredientCount
            }
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeListings;
        
    } catch (error: any) {
        throw new Error(error);
    }
}