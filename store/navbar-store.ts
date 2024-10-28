import { create } from 'zustand'

export const useNavbarStore = create((set) => ({
    isNavbarFixed: true,
    setIsNavbarFixed: () => set((state: boolean) => ({ isNavbarFixed: state })),
}))