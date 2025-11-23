import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useEcommStore=create(immer((set,get)=>({
    cart :{
        item:[],
        coupen:null,
        shoping:{
            method:'standard',
            addr:null
        }
    },
    addItem,
    updateQuantity,
    applyCoupen,
    setShippingAdress,
    clearCart,
    getSubtotal,
    getShipingcost,
    getDiscount,
    getTotal,
    getItemCount
})))