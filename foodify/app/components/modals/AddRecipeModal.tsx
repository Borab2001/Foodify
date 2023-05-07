'use client';

import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useAddRecipeModal from "@/app/hooks/useAddRecipeModal";

import Heading from "../Heading";
import CategoryInput from "../inputs/CategoryInput";
import { categories } from "../navbar/Categories";

import Modal from "./Modal";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS {
    CATEGORY = 0,
    INFO = 1,
    IMAGES = 2,
    NAME = 3,
    DESCRIPTION = 4
}

const AddRecipeModal = () => {
    const router = useRouter();
    const addRecipeModal = useAddRecipeModal();

    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);

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
            ingredientCount: 1,
            servingCount: 1,
            minuteCount: 1,
            imageSrc: '',
            title: '',
            ingredientList: '',
            calories: '',
            description: ''
        }
    });

    const category = watch('category');
    const ingredientCount = watch('ingredientCount');
    const servingCount = watch('servingCount');
    const minuteCount = watch('minuteCount');
    const imageSrc = watch('imageSrc');
    const title = watch('title');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }

    const onBack = () => {
        setStep((value) => value - 1);
    }

    const onNext = () => {
        setStep((value) => value + 1);
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.DESCRIPTION) {
            return onNext();
        }

        setIsLoading(true);

        axios.post('/api/listings', data)
        .then(() => {
            toast.success('Recipe Added!');
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            addRecipeModal.onClose();
        })
        .catch(() => {
            toast.error('Something went wrong...');
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.DESCRIPTION) {
            return 'Create';
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

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Share some basics about your recipe"
                    subtitle="What ingredients do you have?"
                />
                <Counter 
                    title="Ingredients" 
                    subtitle="How many ingredients for this recipe?"
                    value={ingredientCount}
                    onChange={(value) => setCustomValue('ingredientCount', value)}
                />
                <hr />
                <Counter 
                    title="Servings" 
                    subtitle="For how many servings?"
                    value={servingCount}
                    onChange={(value) => setCustomValue('servingCount', value)}
                />
                <hr />
                <Counter 
                    title="Time" 
                    subtitle="For how much time? (in minutes)"
                    value={minuteCount}
                    onChange={(value) => setCustomValue('minuteCount', value)}
                />
            </div>
        )
    }

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Add a photo of your recipe"
                    subtitle="Show to everyone what your recipe looks like!"
                />
                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomValue('imageSrc', value)}
                />
            </div>
        )
    }

    if (step === STEPS.NAME) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Name your recipe"
                    subtitle="Show to everyone how to do it!"
                />
                <Input 
                    id="title"
                    label="Title"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <Input 
                    id="calories"
                    label="Number of Calories"
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        )
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Describe your recipe"
                    subtitle="Show to everyone how to do it!"
                />
                <Textarea 
                    id="ingredientList"
                    label="Ingredient : Quantity/Units"
                    rows={3}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <Textarea 
                    id="description"
                    label="Description"
                    rows={5}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        )
    }

    return (
        <Modal
            isOpen={addRecipeModal.isOpen} 
            onClose={addRecipeModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title="Add Recipe"
            body={bodyContent}
        />
    );
}

export default AddRecipeModal;