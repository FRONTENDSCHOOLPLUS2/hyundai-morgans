import { create } from 'zustand';

interface ModelStore {
  items: string[],
  [key: number]: string; // 인덱스 스그니처 추가
}

export const useModelStore = create<ModelStore>((set) => ({
  items: ["g90-black", "g90-long-wheel-base", "g90", "g80", "g80-electrified", "g70", "g70-shooting-brake", "gv80", "gv80-coupe", "gv70", "gv70-electrified", "gv60", "neolun-concept"],
  // addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  // removeItem: (index) => set((state) => ({
  //   items: state.items.filter((_, i) => i !== index)
  // })),
}));
