import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: true,
  setIsVisiblePlayer: (isVisiblePlayer) => set({ isVisiblePlayer }),
}));

export default usePlayerState;
