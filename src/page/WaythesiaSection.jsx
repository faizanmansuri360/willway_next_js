"use client";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllVideos } from '../store/videoSlice';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const WaythesiaSection = () => {
    const video = useSelector(selectAllVideos);
    console.log(video);
    
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="section-title section-title--large">
                <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Waythesia WVA-100</h2>
                <div className="glue-headline glue-headline--headline-4 section-title__description" >
                    <p>Willway Anesthesia Machine Care.</p>
                </div>
            </div>
            {video
                .filter((item) => item.page.includes("Waythesia"))
                .map((item) => (
                    <figure className="single-media single-media--fullbleed" key={item.id}>
                        <div className="single-media__media">
                            <div className="gdm-video-embed gdm-video-embed--muted"
                                data-autoplay="true" >
                                <picture className="picture gdm-video-embed__poster" aria-hidden="true">
                                    <img alt="" className="picture__image" height="810" role="presentation"
                                        src={item.video_url}
                                        width="1440" />
                                </picture>
                                {/* <ReactPlayer
                                    className="gdm-video-embed__player"
                                    url={item.video_url}
                                    playing
                                    muted
                                    loop
                                    width="100%"
                                    height="100%"
                                    playsinline
                                /> */}

                                <video
                                    src={item.video_file.path}
                                    className="gdm-video-embed__player"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>

                        <figcaption className="caption">
                            <div>

                                <div>
                                    <div className="caption__text glue-caption d-flex"><strong>{item.title} </strong>&nbsp; The WVA-100 is a high-end anesthesia machine with an...
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
                                                {item.description}
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </figcaption>









                    </figure>
                ))}

        </>
    )
}

export default WaythesiaSection