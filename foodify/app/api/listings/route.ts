import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        title,
        ingredientList,
        description,
        imageSrc,
        category,
        ingredientCount,
        servingCount,
        minuteCount,            
        calories
    } = body;

    const listing = await prisma.listing.create({
        data: {
            title,
            ingredientList,
            description,
            imageSrc,
            category,
            ingredientCount,
            servingCount,
            minuteCount,            
            calories,
            userId: currentUser.id
        }
    });

    return NextResponse.json(listing);
}
