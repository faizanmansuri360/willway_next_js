"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductByIdAsync } from '../../store/productSlice';
import ProductData from './ProductData';

export default function ProductDetails({ id }) {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductByIdAsync(id));
    }, [dispatch, id]);

    return <ProductData />;
}