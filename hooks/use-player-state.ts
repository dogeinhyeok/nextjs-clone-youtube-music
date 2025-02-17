import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
}

const UsePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: false,
  setIsVisiblePlayer: (isVisiblePlayer) => set({ isVisiblePlayer }),
}));

export default UsePlayerState;
