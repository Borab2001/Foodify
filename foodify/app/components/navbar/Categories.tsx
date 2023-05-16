'use client';

import Container from "../Container";

import { MdSoupKitchen } from 'react-icons/md';
import { FaHamburger, FaBlender } from 'react-icons/fa';
import { 
    GiCroissant,
    GiFullPizza, 
    GiBerriesBowl, 
    GiFruitBowl, 
    GiCakeSlice, GiFriedEggs, 
    GiSlicedBread, 
    GiMushroomGills, 
    GiCheeseWedge, 
    GiTomato, 
    GiCutLemon,
    GiChickenOven
} from 'react-icons/gi';


import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: "Vegetarian",
        icon: GiMushroomGills,
        description: "Explore a wonderful world of vegetarian cuisine with a selection of meat-free recipes. Vegetarian recipes offer a wide range of flavors and textures that are both healthy and satisfying. From hearty vegetable stews to fresh salads and pasta dishes, there's something for every taste and occasion."
    },
    {
        label: 'Breakfast',
        icon: GiFriedEggs,
        description: "Start your day off right with joyful breakfast recipes. Whether you prefer sweet or savory, breakfast recipes have a variety of options to suit your taste and dietary needs. From classic pancakes and omelets to healthy smoothie bowls and avocado toast, these recipes are sure to give you the energy you need to tackle the day ahead."
    },
    {
        label: 'Appetizers',
        icon: GiCheeseWedge,
        description: "Impress your guests with delicious appetizers. Perfect for parties or as a pre-dinner snack, these recipes range from classic favorites like deviled eggs and cheese platters to more exotic options like falafel and dumplings. Create impressive appetizers that are sure to wow your guests and their taste buds."
    },
    {
        label: 'Salad',
        icon: GiTomato,
        description: "Get your daily dose of greens with our delicious salads. Flavorful combinations that are both healthy and satisfying. Perfect as a side dish or a light meal, salads are sure to add a burst of freshness to your day."
    },
    {
        label: 'Pizza',
        icon: GiFullPizza,
        description: "Satisfy your pizza cravings with these mouth-watering pizza recipes. From classic margherita to creative combinations like fig and prosciutto or buffalo chicken, this category has a variety of toppings and crusts to choose from. Whether you prefer thin and crispy or thick and chewy, the recipes in this category are sure to impress even the most discerning pizza lover."
    },
    {
        label: 'Juice',
        icon: GiCutLemon,
        description: "Recharge your body with this category's refreshing juice recipes. Packed with vitamins and nutrients, these juices are a delicious and healthy way to stay hydrated and energized. From green juice blends to fruity smoothies, the recipes in this category offer a variety of options to suit your taste and dietary needs. Perfect for a post-workout pick-me-up or as a midday snack."
    },
    {
        label: 'Smoothie',
        icon: FaBlender,
        description: "Delicious and nutritious smoothie recipes that will help you start your day off right or give you a boost of energy any time of day. Packed with fresh fruits, vegetables, and other wholesome ingredients, these recipes offer a tasty and convenient way to get your daily dose of vitamins and minerals. Whether you prefer creamy and indulgent flavors like chocolate banana or refreshing and invigorating combinations like green smoothies, this category has a variety of options to suit your taste buds and dietary needs."
    },
    {
        label: 'Sandwich',
        icon: GiSlicedBread,
        description: "Enjoy a quick and tasty meal on-the-go with this category's collection of sandwich recipes. From classic favorites like BLTs and grilled cheese to more adventurous combinations like bahn mi and caprese, this category's recipes offer a variety of flavors and textures to satisfy your cravings. Easy to prepare and perfect for lunch or a light dinner."
    }, 
    {
        label: 'Hamburger',
        icon: FaHamburger,
        description: "Sink your teeth into this category's juicy and delicious hamburger recipes. Whether you prefer classic cheeseburgers or more adventurous combinations like BBQ bacon burgers or veggie burgers, this category has a variety of options to satisfy your cravings. Perfect for a backyard BBQ or a weeknight dinner, the recipes in this category offer step-by-step instructions and tips for success so you can create your own mouth-watering burgers at home."
    }, 
    {
        label: 'Bowl',
        icon: GiBerriesBowl,
        description: "Enjoy a complete and balanced meal in a bowl! Bowl recipes offer a healthy and convenient option that's both filling and delicious. Find a variety of flavors and textures that cater to your taste buds and dietary needs. Perfect for a quick and easy meal, for lunch or dinner."
    },
    {
        label: 'Soup',
        icon: MdSoupKitchen,
        description: "Warm up with this category's comforting soup recipes. Perfect for chilly days or when you're feeling under the weather, these recipes offer a variety of options to suit your taste and dietary needs. From creamy potato soup to spicy chicken chili and hearty vegetable stews, this category's soups are sure to satisfy your hunger and soothe your soul."
    },
    {
        label: 'Fruit',
        icon: GiFruitBowl,
        description: "Indulge in the sweetness of nature with this category's delicious fruit recipes. Whether you're looking for a healthy snack or a dessert option, the recipes in this category offer a variety of flavors and textures to suit your taste. From classic fruit salads to more creative options like grilled peaches or berry crumbles, this category's recipes are sure to satisfy your sweet tooth."
    },
    {
        label: 'Desert',
        icon: GiCakeSlice,
        description: "Treat yourself to something sweet with this category's collection of dessert recipes. From decadent chocolate cakes to light and fluffy mousse, these recipes offer a variety of options to satisfy your cravings. Perfect for special occasions or just a weeknight treat, this category's desserts are easy to make and sure to impress."
    },
    {
        label: 'Bakery',
        icon: GiCroissant,
        description: "From fluffy cakes and moist muffins to crispy croissants and flaky pastries, our recipes offer a variety of options to satisfy your cravings. Create delicious treats that are sure to impress your family and friends."
    },
    {
        label: 'Meat',
        icon: GiChickenOven,
        description: "Discover this category's flavorful and satisfying meat and chicken recipes. From succulent roasted chicken and tender beef brisket to hearty stews and comforting meatballs, this category has a variety of options to suit your taste and dietary needs. Whether you're looking for a quick and easy weeknight meal or a special occasion dish, the recipes in this category offer step-by-step instructions and cooking tips to help you achieve delicious results every time."
    }
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
                before:content-[''] before:h-full before:w-10 before:absolute before:left-0 before:top-0 before:bg-gradient-to-r from-white to-white/[0] dark:before:bg-gradient-to-r dark:from-dark dark:to-dark/[0]
                after:content-[''] after:h-full after:w-10 after:absolute after:right-0 after:top-0 after:bg-gradient-to-l from-white to-white/[0] dark:after:bg-gradient-to-l dark:from-dark dark:to-dark/[0]"                
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