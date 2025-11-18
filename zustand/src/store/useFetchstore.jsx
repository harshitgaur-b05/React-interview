import { create } from "zustand";

const useFetchstore=create((set,get)=>({
    product:[],
    loading:false,
    err:null,

    fetchData:async (url) => {
        set({loading:true ,err:null});
        try {
            const res=await fetch(url)
            const data=await res.json()
            set({product:data.products,loading:false})
        } catch (error) {
            set({err:error,loading:false})
        }
    }
}))

export default useFetchstore;