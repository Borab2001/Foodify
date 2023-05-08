'use client';

import Container from "../Container";

import { TbSalad, TbSoup } from 'react-icons/tb';
import { IoPizzaOutline } from 'react-icons/io5';
import { CiGlass } from 'react-icons/ci';
import { GiSandwich } from 'react-icons/gi';
import { CgBowl } from 'react-icons/cg';


import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Salad',
        icon: TbSalad,
        description: "Get your daily dose of greens with our delicious salads. Flavorful combinations that are both healthy and satisfying. Perfect as a side dish or a light meal, salads are sure to add a burst of freshness to your day."
    },
    {
        label: 'Pizza',
        icon: IoPizzaOutline,
        description: "These are only pizzas"
    },
    {
        label: 'Juice',
        icon: CiGlass,
        description: "These are only juices"
    },
    {
        label: 'Sandwich',
        icon: GiSandwich,
        description: "These are only sandwiches"
    }, 
    {
        label: 'Bowl',
        icon: CgBowl,
        description: "Enjoy a complete and balanced meal in a bowl! Bowl recipes offer a healthy and convenient option that's both filling and delicious. Find a variety of flavors and textures that cater to your taste buds and dietary needs. Perfect for a quick and easy meal, for lunch or dinner."
    },
    {
        label: 'Soup',
        icon: TbSoup,
        description: "These are only soups"
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="relative 
                before:content-[''] before:h-full before:w-10 before:absolute before:left-0 before:top-0 before:bg-gradient-to-r from-white to-white/[0]
                after:content-[''] after:h-full after:w-10 after:absolute after:right-0 after:top-0 after:bg-gradient-to-l from-white to-white/[0]"                
            >
                <div className="pt-4 px-4 flex flex-row items-center justify-start gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
                    {categories.map((item) => (
                        <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Categories;
// background: linear-gradient(to left,var(--yt-spec-base-background) 20%,rgba(33,33,33,0) 80%);