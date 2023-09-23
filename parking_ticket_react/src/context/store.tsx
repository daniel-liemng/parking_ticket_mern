import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppState {
  fetchAgain: boolean;
  toggleFetchAgain: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        fetchAgain: false,
        toggleFetchAgain: () =>
          set((state) => ({ fetchAgain: !state.fetchAgain })),
      }),
      { name: 'storage' }
    )
  )
);
