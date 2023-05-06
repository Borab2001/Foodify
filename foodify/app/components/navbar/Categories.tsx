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
        description: 'These are only salads'
    },
    {
        label: 'Pizza',
        icon: IoPizzaOutline,
        description: 'These are only pizzas'
    },
    {
        label: 'Juice',
        icon: CiGlass,
        description: 'These are only juices'
    },
    {
        label: 'Sandwich',
        icon: GiSandwich,
        description: 'These are only sandwiches'
    }, 
    {
        label: 'Bowl',
        icon: CgBowl,
        description: 'These are only bowls'
    },
    {
        label: 'Soup',
        icon: TbSoup,
        description: 'These are only soups'
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
            <div className="pt-4 flex flex-row items-center justify-start gap-4 sm:gap-8 overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon} />
                ))}
            </div>
        </Container>
    );
}

export default Categories;