import Container from "../Container";

import { TbSalad } from 'react-icons/tb';
import { IoPizzaOutline } from 'react-icons/io5';
import {  } from 'react-icons/';
import CategoryBox from "../CategoryBox";

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
        label: 'Salads',
        icon: TbSalad,
        description: 'These are only salads'
    },
]

const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox key={item.label} label={item.label} description={item.description} icon={item.icon} />
                ))}
            </div>
        </Container>
    );
}

export default Categories;