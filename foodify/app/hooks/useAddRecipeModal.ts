import { create } from 'zustand';

interface AddRecipeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const useAddRecipeModal = create<AddRecipeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useAddRecipeModal;