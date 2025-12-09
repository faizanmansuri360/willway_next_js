"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { selectAllVideos } from '../store/videoSlice';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const DentalSection = () => {
    const video = useSelector(selectAllVideos);
    const [open, setOpen] = useState(false)
    const item2 = video.find((v) => v.id === 2);
    const item3 = video.find((v) => v.id === 3);
    const item4 = video.find((v) => v.id === 4);
    return (
        <>
            <willway-large-text className="willway-large-text willway-large-text--full-gradient">
                <div className="willway-large-text__headline glue-headline glue-headline--headline-2">
                    <p data-block-key="9upom">Willway Dental Suite lets you image, diagnose, and perform procedures with integrated precision – engineering a complete dental ecosystem for modern veterinary practice. It also delivers best-in-class clarity and control, excelling in portability, image quality, and streamlined workflows.</p>
                </div>
            </willway-large-text>

            <gdm-carousel className="glue-carousel carousel" >
                <div className="carousel__button-wrapper">
                    <button className="glue-carousel__button glue-carousel__button--prev" >
                        <FiChevronRight />
                    </button>
                    <button className="glue-carousel__button glue-carousel__button--next" >
                        <FiChevronLeft />
                    </button>
                </div>
                <div className="glue-carousel__viewport">
                    <div className="glue-carousel__list">


                        <div className="glue-carousel__item" >
                            {item2 && (
                                <figure >
                                    <gdm-video-embed
                                        className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height gdm-video-embed--paused carousel__video" key={item2.id}>
                                        <ReactPlayer
                                            url={item2.video_file.path}
                                            playing
                                            className="gdm-video-embed__player"
                                            muted
                                            loop
                                            width="1920"
                                            height="1080"
                                            playsinline
                                        />
                                    </gdm-video-embed>
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
                            )}
                        </div>
                        <div className="glue-carousel__item" >
                            {item3 && (
                                <figure >
                                    <gdm-video-embed
                                        className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height gdm-video-embed--paused carousel__video" key={item3.id}>
                                        <ReactPlayer
                                            url={item3.video_file.path}
                                            playing
                                            className="gdm-video-embed__player"
                                            muted
                                            loop
                                            width="1920"
                                            height="1080"
                                            playsinline
                                        />
                                    </gdm-video-embed>
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
                            )}
                        </div>
                        <div className="glue-carousel__item" >
                            {item4 && (
                                <figure >
                                    <gdm-video-embed
                                        className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height gdm-video-embed--paused carousel__video" key={item4.id}>
                                        <ReactPlayer
                                            url={item4.video_file.path}
                                            playing
                                            className="gdm-video-embed__player"
                                            muted
                                            loop
                                            width="1920"
                                            height="1080"
                                            playsinline
                                        />
                                    </gdm-video-embed>
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
                            )}
                        </div>
                    </div>
                </div>
                <div className="glue-carousel__navigation" aria-label="Choose item to display"></div>
            </gdm-carousel>
        </>
    )
}

export default DentalSection