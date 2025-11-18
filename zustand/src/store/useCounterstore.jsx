import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCounterStore = create(persist((set, get) => ({

    count: 0,

    incre: () => set((state) => ({ count: state.count + 1 })),
    decre: () => set((state) => ({ count: state.count - 1 }))

})
    , { name: 'hello' }
))
export default useCounterStore