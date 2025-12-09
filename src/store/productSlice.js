"use client"
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "@/API/ApisHome";
import { ProductByCategoryId } from "@/API/ApisHome";
import {ProductBySearch} from "@/API/ApisHome"
import { ProductVideos } from "@/API/ApisHome";
import server from "../env";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        selectedProduct: null,
        searchProduct: [],
        searchallProduct: [],
        searchaProduct: [],
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })

            .addCase(fetchProductByIdAsync.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
                state.selectedProduct = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductByIdAsync.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchProductByCategoryIdAsync.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductByCategoryIdAsync.fulfilled, (state, action) => {
                state.categoryProduct = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductByCategoryIdAsync.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchProductBySearch.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductBySearch.fulfilled, (state, action) => {
                state.searchaProduct = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductBySearch.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
})

export default productSlice.reducer;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectProductByCategoryId = (state) => state.product.categoryProduct;
export const selectProductBySearch = (state) => state.product.searchaProduct;

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch(`${server}/products`);
    const data = await res.json();
    return data;
});

export const fetchProductByIdAsync = createAsyncThunk(
    'product/fetchProductById',
    async (id) => {
        const response = await fetchProductById(id);
        return response.data;
    }
);

export const fetchProductByCategoryIdAsync = createAsyncThunk(
    '/fetchProductByCategoryIdAsync',
    async (id) => {
        const response = await ProductByCategoryId(id);
        return response.data;
    }
);

export const fetchProductBySearch = createAsyncThunk(
    '/fetchProductBySearch',
    async (key) => {
        const response = await ProductBySearch(key);
        return response.data;
    }
);