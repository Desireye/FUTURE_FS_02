import { createSlice } from "@reduxjs/toolkit"

const storedCart = localStorage.getItem("cartItems");
const initialState = {
    items: storedCart ? JSON.parse(storedCart) : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const newItem = action.payload;

            const existingItem = state.items.find(
                (item) => item.product_id === newItem.product_id
            );

            if (existingItem) {
                existingItem.quantity += newItem.quantity || 1;
            } else {
                state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
            }
        },

        //remove from cart
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.product_id !== action.payload);
        },

        //update
        updateQuantity: (state, action) => {
            const item = state.items.find((item) => item.product_id === action.payload.id);
            if(item) {
                item.quantity = action.payload.quantity;
            }
       },

       //clear
       clearCart: (state) => {
            state.items = [];
        },
    },
});

export const persistCart = (store) => {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cartItems", JSON.stringify(state.cart.items));
  });
};

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;