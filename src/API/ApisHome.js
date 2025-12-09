"use client";

import server from "../env.js";
import axios from "axios";

export function Bannerdata() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/getbannerdata`,
                {
                    method: 'GET',
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const bannerdata = await response.json();
            resolve({ bannerdata });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}

export function Categories() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/getcategories`,
                { method: 'GET' }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const Categories = await response.json();
            resolve({ Categories });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}

export function Mediapost() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/getmedia`,
                { method: 'GET' }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const Mediapost = await response.json();
            resolve({ Mediapost });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}

export function fetchProductById(id) {
    return new Promise(async (resolve) => {
        const response = await fetch(`${server}/products/details/` + id);
        const data = await response.json();
        resolve({ data });
    });
}

export function fetchProductPriceById(userId, productId) {
    return new Promise(async (resolve) => {
        const response = await fetch(
            `${server}/get-product-price?user_id=${userId}&product_id=${productId}`
        );
        const data = await response.json();
        resolve({ data });
    });
}

export function getdiscount() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/disountoffer`,
                { method: 'GET' }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const discountoffer = await response.json();
            resolve({ discountoffer });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}

export function userContect(contactData) {
    console.log("Sending data to API:", contactData);
    return fetch(`${server}/usercontect`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(contactData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching contact data:', error);
            throw error;
        });
}

export function getCategory() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/getwillwaycategory`,
                { method: 'GET' }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const productcategory = await response.json();
            resolve({ productcategory });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}

export function ProductByCategoryId(id) {
    return new Promise(async (resolve) => {
        const response = await fetch(`${server}/category-willwayproducts/` + id);
        const data = await response.json();
        resolve({ data });
    });
}

export function ProductBySearch(key) {
    return new Promise(async (resolve) => {
        const response = await fetch(`${server}/search-products/` + key);
        const data = await response.json();
        resolve({ data });
    });
}


export function getCategorywithproduct() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/getwillwaycategory-products`,
                { method: 'GET' }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const productcategory = await response.json();
            resolve({ productcategory });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}



export function ProductVideos() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/videos`,
                { method: 'GET' }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const productcategory = await response.json();
            console.log("productcategory----", productcategory);
            resolve({ productcategory });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}




export function userLogin(loginData) {
    return axios.post(`${server}/api/login`, loginData)
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.error('Error during user login:', error);
            throw error;
        });
}

export function GetRepidtestkits() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(
                `${server}/getrepidtestkits`,
                {
                    method: 'GET',
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const repistestkits = await response.json();
            resolve({ repistestkits });
        } catch (error) {
            console.error('Error :', error);
            resolve({ error: 'Error ' });
        }
    })
}