"use client";
import { useSelector } from "react-redux";
import { selectProductById } from '../../store/productSlice';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductData = () => {
    const product = useSelector(selectProductById);
    
    if (!product || !product.images || product.images.length === 0) {
        return <p>No images available</p>;
    }

    const images = product.images.map((img) => ({
        original: img,
        thumbnail: img,
    }));

    return (
        <>
            <div className="glue-page bookmark flex-font">
                <div className="article-cover article-cover--centered">
                    <div className="article-cover__header">
                        <p className="article-cover__eyebrow glue-label">{product?.model}</p>
                        <h1 className="article-cover__title glue-headline glue-headline--headline-2">{product?.name}</h1>
                        <dl className="article-cover__meta">
                            <dd className="article-cover__date glue-label"><time>{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</time></dd>
                            <dd className="article-cover__authors">
                                <p >By Willway Biotech</p>
                            </dd>
                        </dl>

                        <div className="article-cover__ctas">
                        </div>
                    </div>

                    <div className="col-lg-12 mb-4 mb-lg-0">
                        <div className="overflow-hidden position-relative">
                        </div>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showFullscreenButton={true}
                            slideInterval={1000}
                            slideOnThumbnailOver={true}
                            showNav={false}
                            thumbnailPosition="left"
                        />
                    </div>
                </div>

                <div className="gdm-rich-text rich-text flex-font">
                    <p >{product?.description}</p>
                </div>

                <div className="gdm-rich-text rich-text flex-font">
                   
                    <div dangerouslySetInnerHTML={{ __html: product?.features }}></div>
                </div>

            </div>
        </>
    )
}

export default ProductData