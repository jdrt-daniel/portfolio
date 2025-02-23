import { create } from "zustand";

interface OrbState {
  orbVisible: boolean;
  setOrbVisible: (value: boolean) => void;
}

const useOrbStore = create<OrbState>((set) => ({
  orbVisible: false,
  setOrbVisible: (value) => set({ orbVisible: value }),
}));

export default useOrbStore;
