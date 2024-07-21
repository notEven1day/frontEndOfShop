import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartId: "", // Use a more descriptive state key
};


//store user in slice use globally

export const cartIdSlice = createSlice({
    name: 'cartId',
    initialState,
    reducers: {
        // Action to set the cart ID
        setCartId: (state, action) => {
            state.cartId = action.payload;
        },
        // Action to clear the cart ID (if needed)
        clearCartId: (state) => {
            state.cartId = "";
        },
    },
});

// Export the actions for use in components
export const { setCartId, clearCartId } = cartIdSlice.actions;

// Export the reducer to be included in the store
export default cartIdSlice.reducer;
