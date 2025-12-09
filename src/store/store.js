"use client"
import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import userReducer from './userSlice';
import videoReducer from './videoSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
        video: videoReducer,
    }
})

export default store;