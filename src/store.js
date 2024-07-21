import { configureStore } from '@reduxjs/toolkit'
import cartIdReducer from './cartIdSlice';
export const store = configureStore({
    reducer: {
        cartId: cartIdReducer,
    },
})