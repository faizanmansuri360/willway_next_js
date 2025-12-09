"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    // userDetails: JSON.parse(localStorage.getItem('userDetails')) || null,
    status: 'idle',
    error: null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setUser: (state, action) => {
            state.userDetails = action.payload;
            // localStorage.setItem('userDetails', JSON.stringify(action.payload));
        },
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;