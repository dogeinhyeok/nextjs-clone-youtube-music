import { create } from "zustand";

interface UIState {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (homeCategory: string) => void;
  setHeaderImageSrc: (headerImageSrc: string) => void;
}

const useUIState = create<UIState>((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (homeCategory) => set({ homeCategory }),
  setHeaderImageSrc: (headerImageSrc) => set({ headerImageSrc }),
}));

export default useUIState;
