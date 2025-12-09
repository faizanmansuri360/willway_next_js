"use client";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import server from "../env";

export const fetchAllVideos = createAsyncThunk(
    "video/fetchAllVideos",
    async () => {
        const res = await fetch(`${server}/videos`);
        const data = await res.json();
        return { productcategory: data };
    }
);

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videos: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllVideos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllVideos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.videos = action.payload.productcategory; 
            })
            .addCase(fetchAllVideos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

export default videoSlice.reducer;
export const selectAllVideos = (state) => state.video.videos;