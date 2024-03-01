export const createCounterSlice = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementLater: async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    set((state) => ({ count: state.count + 1 }));
  },
})