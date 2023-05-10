'use client';

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import Modal from "./Modal";
import Heading from "../Heading";
import Counter from "../inputs/Counter";
import CategoryInput from "../inputs/CategoryInput";
import { categories } from "../navbar/Categories";
import useSearchModal from "@/app/hooks/useSearchModal";

enum STEPS {
    CATEGORY = 0,
    COUNTERS = 1
}

const SearchModal = () => {
    const router = useRouter();
    const searchModal = useSearchModal();
    const params = useSearchParams();
    
    const [step, setStep] = useState(STEPS.CATEGORY);
    
    const [category, setCategory] = useState('');
    const [calories, setcalories] = useState(1);
    const [minuteCount, setMinuteCount] = useState(1);
    const [ingredientCount, setIngredientCount] = useState(1);

    const onBack = useCallback(() => {
        setStep((value) => value - 1);
    }, []);

    const onNext = useCallback(() => {
        setStep((value) => value + 1);
    }, []);

    const onSubmit = useCallback(async () => {
        if (step !== STEPS.COUNTERS) {
            return onNext();
        }

        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery = {
            category,
            calories,
            minuteCount,
            ingredientCount,
        };

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery,
        }, { skipNull: true });

        setStep(STEPS.CATEGORY);
        searchModal.onClose();
        router.push(url);
    }, [
        step,
        router,
        category,
        calories,
        minuteCount,
        ingredientCount,
        onNext,
    ]);

    const actionLabel = useMemo(() => {
        if (step === STEPS.COUNTERS) {
            return 'Search';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return 'Back';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
                title="What type are you looking for?"
                subtitle="Find the perfect recipe"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput 
                            onClick={(category) => setCategory(category)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    if (step === STEPS.COUNTERS) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Filter by additional options"
                    subtitle="Refine your search"
                />
                <Counter 
                    title="Ingredients" 
                    subtitle="Max number of ingredients"
                    value={ingredientCount}
                    onChange={(value) => setIngredientCount(value)}
                />
                <hr />
                <Counter 
                    title="Calories" 
                    subtitle="Max number of calories"
                    value={calories}
                    onChange={(value) => setcalories(value)}
                />
                <hr />
                <Counter 
                    title="Time" 
                    subtitle="Max preparation time (in minutes)"
                    value={minuteCount}
                    onChange={(value) => setMinuteCount(value)}
                />
            </div>
        );
    }

    return (
        <Modal 
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={onSubmit}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title="Filters"
            body={bodyContent}
        />
    );
}

export default SearchModal;
