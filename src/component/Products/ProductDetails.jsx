"use client";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductByIdAsync } from '../../store/productSlice';
import ProductData from './ProductData';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const params = useParams();
    

    useEffect(() => {
        dispatch(fetchProductByIdAsync(params.id));
    }, [dispatch, params.id]);

    return (
        <>
            <ProductData />
        </>
    )
}

export default ProductDetails