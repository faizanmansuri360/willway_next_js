"use client";
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard.jsx";
import { getCategory } from "../../API/ApisHome";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchProductByCategoryIdAsync } from "../../store/productSlice";



const Products = () => {
    const [getcategory, SetgetCategory] = useState();
    const [selectedCategory, setSelectedCategory] = useState(null);
    // const [getcategoryid, Setgetcategoryid] = useState();
    const dispatch = useDispatch();
    const params = useParams();

    function Setgetcategoryid(id) {
        dispatch(fetchProductByCategoryIdAsync(id));
    }

    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
        Setgetcategoryid(id);
    };


    useEffect(() => {
        dispatch(fetchProductByCategoryIdAsync(params.id));
        getCategory().then((res) => {
            SetgetCategory(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <section className="breadcrumb__area include-bg pt-170 pb-90">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6">
                                        <div className="breadcrumb__content p-relative text-center z-index-1">
                                            <h3 className="breadcrumb__title">Shop Grid</h3>
                                            <div className="breadcrumb__list"><span><a href="#">Home</a></span><span>Shop
                                                Grid</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="tp-shop-sidebar-area pb-80">
                            <div className="container container-1720">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-4">
                                        <div className="tp-shop-sidebar mr-10">
                                            <div className="tp-shop-widget mb-50 container">
                                                <h3 className="tp-shop-widget-title">Categories</h3>
                                                <div className="tp-shop-widget-content">
                                                    <div className="tp-shop-widget-categories">
                                                        <ul>
                                                            {getcategory?.productcategory?.filter((getcategory) => getcategory.id !== 17).map((category) => {
                                                                return (
                                                                    <li key={category.id} className={`category_list ${selectedCategory === category.id ? 'selected' : ''
                                                                        }`}>
                                                                        <a onClick={() => handleCategoryClick(category.id)} className=" d-flex py-2 text-gray justify-content-between active">
                                                                            <span>{category.category_name}</span><span></span>
                                                                        </a>
                                                                    </li>
                                                                )
                                                            })}
                                                           
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ProductsCard />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Products