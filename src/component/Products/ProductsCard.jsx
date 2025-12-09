"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import { selectProductByCategoryId } from "../../store/productSlice";



const ProductsCard = () => {
    const { data: product, status } = useSelector((state) => state.product);
    const [currentPage, setCurrentPage] = useState(0);
    const categoryproduct = useSelector(selectProductByCategoryId);
    const itemsPerPage = 6;

    useEffect(() => {
        setCurrentPage(0);
    }, [categoryproduct]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    const dataSource = categoryproduct?.products?.length > 0 ? categoryproduct.products : product;

    const offset = currentPage * itemsPerPage;
    const currentItems = dataSource?.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil((dataSource?.length || 0) / itemsPerPage);

    return (

        <div className="col-xl-12 col-lg-12">
            <div className="tp-shop-sidebar-wrap">
                <div className="tp-shop-top mb-45">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5 col-md-5">
                            <div className="tp-shop-top-left">
                                <div className="tp-shop-top-result">
                                    <p>Showing 1–14 of 26 results</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-shop-main-wrap">
                            <div className="row">
                                {currentItems?.map((product) => (
                                    <div className="col-xl-4 col-lg-6 col-md-6 product_list" key={product.id}>
                                        <div className="tp-shop-right-item mb-30 p-relative grid1">
                                            <div className="tp-shop-right-thumb fix">
                                                <img alt="product-img"
                                                    loading="lazy"
                                                    decoding="async" data-nimg="1" className="img-fluid"
                                                    srcSet={product.image}
                                                    src={product.image} />
                                            </div>

                                            <div
                                                className="tp-shop-right-content d-flex align-items-end justify-content-between">
                                                <div className="tp-shop-right-title-box">
                                                    <h4 className="tp-shop-right-title"><a
                                                        href="/shop-details/1">{product.name}</a>
                                                    </h4>
                                                </div>

                                            </div>
                                            <div className="tp-product-btn-box">
                                                <Link className="tp-btn-shop-category black-bg w-100" to={`/products-details/${product.id}`}>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}

export default ProductsCard