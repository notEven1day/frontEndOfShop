import { configureStore } from '@reduxjs/toolkit'
import cartIdReducer from './cartIdSlice';
import userReducer from './userSlice';
export const store = configureStore({
    reducer: {
        user: userReducer,
        cartId: cartIdReducer,
    },
})