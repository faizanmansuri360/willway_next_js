"use client";
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { selectAllVideos } from '../store/videoSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const PumpSection = () => {
    const video = useSelector(selectAllVideos);
    const item1 = video.find((v) => v.id === 5);
    const item2 = video.find((v) => v.id === 6);

    return (
        <>
            <div className="glue-page bookmark" id="pumps">
                <div className="section-title">

                    <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Syringe and Infusion Systems let you deliver fluids and medications with absolute precision – offering integrated, intelligent control for both infusion sets and syringes. They also deliver hospital-grade accuracy, excelling in safety, versatility, and simplified workflow management.</h2>
                    <div className="glue-headline glue-headline--headline-4 section-title__description" >
                        <p>A veterinarian setting up a complex, multi-drug protocol with confidence, supported by Willway pumps that work in perfect harmony for critical care.</p>
                    </div>
                </div>

                <div className="glue-carousel carousel">
                    <div className="carousel__button-wrapper">
                        <button className="glue-carousel__button glue-carousel__button--prev">

                            <willway-border-gradient className="willway-border carousel__border">
                                <div className="willway-border__sub-border"></div>
                            </willway-border-gradient>
                        </button>
                        <button className="glue-carousel__button glue-carousel__button--next">

                            <willway-border-gradient className="willway-border carousel__border">
                                <div className="willway-border__sub-border"></div>
                            </willway-border-gradient>
                        </button>
                    </div>

                    <div className="glue-carousel__viewport">
                        <div className="glue-carousel__list">


                            <Swiper
                                modules={[Navigation, Pagination]}
                                loop={true}
                                className="mySwiper"
                                navigation
                            >

                                {item1 && (
                                    <SwiperSlide>
                                        <div className="glue-carousel__item">
                                            <figure>
                                                <div
                                                    className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height gdm-video-embed--paused carousel__video" key={item1.id}>


                                                    <video
                                                        src={item1.video_file.path}
                                                        autoPlay
                                                        className="gdm-video-embed__player"
                                                        loop
                                                        muted
                                                        playsInline
                                                        width="1920"
                                                        height="1080"
                                                    />
                                                </div>
                                                <figcaption className="caption">
                                                    <div className="caption__text glue-caption">
                                                        <p><strong>{item1.title} :</strong> {item1.description}</p>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                )}

                                {item2 && (
                                    <SwiperSlide>
                                        <div className="glue-carousel__item">

                                            <figure >
                                                <div
                                                    className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height gdm-video-embed--paused carousel__video" key={item2.id}>
                                                    <video
                                                        src={item2.video_file.path}
                                                        autoPlay
                                                        className="gdm-video-embed__player"
                                                        loop
                                                        muted
                                                        playsInline
                                                        width="1920"
                                                        height="1080"
                                                    />
                                                </div>
                                                <figcaption className="caption">
                                                    <div className="caption__text glue-caption">
                                                        <p data-block-key="z0j7v"><strong>{item2.title} :</strong> {item2.description}
                                                        </p>
                                                    </div>
                                                </figcaption>
                                            </figure>

                                        </div>
                                    </SwiperSlide>
                                )}

                            </Swiper>





                        </div>
                    </div>
                    <div className="glue-carousel__navigation" aria-label="Choose item to display"></div>
                </div>

            </div>
        </>
    )
}

export default PumpSection