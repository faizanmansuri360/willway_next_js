"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { selectAllVideos } from '../store/videoSlice';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const DentalSection = () => {
    const video = useSelector(selectAllVideos);
    const [open, setOpen] = useState(false)
    const item2 = video.find((v) => v.id === 2);
    const item3 = video.find((v) => v.id === 3);
    const item4 = video.find((v) => v.id === 4);
    return (
        <>
            <div className="">
                <div className="willway-large-text__headline glue-headline glue-headline--headline-2">
                    <p >Willway Dental Suite lets you image, diagnose, and perform procedures with integrated precision – engineering a complete dental ecosystem for modern veterinary practice. It also delivers best-in-class clarity and control, excelling in portability, image quality, and streamlined workflows.</p>
                </div>
            </div>

            <div className="glue-carousel carousel" >
                <div className="glue-carousel__viewport">
                    <div className="glue-carousel__list">

                        <Swiper
                            modules={[Navigation, Pagination]}
                            loop={true}
                            className="mySwiper"
                            navigation
                        >

                            {item2 && (
                                <SwiperSlide>
                                    <div className="glue-carousel__item" >

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
                                                />
                                            </div>
                                            <figcaption className="caption">
                                                <div>

                                                    <div>
                                                        <div className="caption__text glue-caption d-flex"><strong>{item2.title} </strong>&nbsp;is a powerful all-in-one system designed to...
                                                            <Button
                                                                onClick={() => setOpen(!open)}
                                                                aria-controls="example-collapse-text"
                                                                aria-expanded={open}
                                                                className="collaps_btn float-end"
                                                            >
                                                                {open ? '-' : '+'}
                                                            </Button>
                                                        </div>
                                                        <Collapse in={open}>
                                                            <div id="example-collapse-text" className="caption__text glue-caption">
                                                                <div>
                                                                    {item2.description}
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>

                                    </div>
                                </SwiperSlide>
                            )}

                            {item3 && (
                                <SwiperSlide>
                                    <div className="glue-carousel__item" >

                                        <figure >
                                            <div
                                                className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height gdm-video-embed--paused carousel__video" key={item3.id}>
                                                <video
                                                    src={item3.video_file.path}
                                                    autoPlay
                                                    className="gdm-video-embed__player"
                                                    loop
                                                    muted
                                                    playsInline
                                                />
                                            </div>
                                            <figcaption className="caption">
                                                <div>

                                                    <div>
                                                        <div className="caption__text glue-caption d-flex"><strong>{item3.title} </strong>&nbsp;The Willway WDUS-A8 is a state-of-the-art veterinary dental...
                                                            <Button
                                                                onClick={() => setOpen(!open)}
                                                                aria-controls="example-collapse-text"
                                                                aria-expanded={open}
                                                                className="collaps_btn float-end"
                                                            >
                                                                {open ? '-' : '+'}
                                                            </Button>
                                                        </div>
                                                        <Collapse in={open}>
                                                            <div id="example-collapse-text" className="caption__text glue-caption">
                                                                <div>
                                                                    {item3.description}
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>

                                    </div>
                                </SwiperSlide>
                            )}

                            {item4 && (
                                <SwiperSlide>
                                    <div className="glue-carousel__item" >

                                        <figure >
                                            <div
                                                className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height gdm-video-embed--paused carousel__video" key={item4.id}>
                                                <video
                                                    src={item4.video_file.path}
                                                    autoPlay
                                                    className="gdm-video-embed__player"
                                                    loop
                                                    muted
                                                    playsInline
                                                />
                                            </div>
                                            <figcaption className="caption">
                                                <div>

                                                    <div>
                                                        <div className="caption__text glue-caption d-flex"><strong>{item4.title} </strong>&nbsp;Willway ...
                                                            <Button
                                                                onClick={() => setOpen(!open)}
                                                                aria-controls="example-collapse-text"
                                                                aria-expanded={open}
                                                                className="collaps_btn float-end"
                                                            >
                                                                {open ? '-' : '+'}
                                                            </Button>
                                                        </div>
                                                        <Collapse in={open}>
                                                            <div id="example-collapse-text" className="caption__text glue-caption">
                                                                <div>
                                                                    {item4.description}
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </div>
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
        </>
    )
}

export default DentalSection