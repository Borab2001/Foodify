'use client';

import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import useAddRecipeModal from "@/app/hooks/useAddRecipeModal";

import Heading from "../Heading";
import CategoryInput from "../inputs/categoryInput";
import { categories } from "../navbar/Categories";

import Modal from "./Modal";

enum STEPS {
    CATEGORY = 0,
    INFO = 1,
    IMAGES = 2,
    DESCRIPTION = 3,
    CALORIES = 4
}

const AddRecipeModal = () => {
    const addRecipeModal = useAddRecipeModal();

    const [step, setStep] = useState(STEPS.CATEGORY)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            ingredientCount: '1',
            imageSrc: '',
            calories: '1',
            title: '',
            description: ''
        }
    });

    const category = watch('category');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }

    const onBack = () => {
        setStep((value) => value -1);
    }

    const onNext = () => {
        setStep((value) => value +1);
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.CALORIES) {
            return 'Create';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return 'Back';
    }, []);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
                title="Which of these best describe your recipe?"
                subtitle="Pick a category"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput 
                            onClick={(category) => setCustomValue('category', category)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <Modal
            isOpen={addRecipeModal.isOpen} 
            onClose={addRecipeModal.onClose}
            onSubmit={addRecipeModal.onClose}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title="Add Recipe"
            body={bodyContent}
        />
    );
}

export default AddRecipeModal;