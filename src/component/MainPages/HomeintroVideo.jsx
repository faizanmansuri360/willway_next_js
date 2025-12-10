"use client";
import { selectAllVideos, fetchAllVideos } from '../../store/videoSlice';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

const HomeintroVideo = () => {
    const video = useSelector(selectAllVideos);
    const dispatch = useDispatch();
    const item1 = video.find((v) => v.id === 1);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        dispatch(fetchAllVideos());
    }, [dispatch]);

    if (!item1?.video_file?.path) {
        console.log("Video not loaded yet...");
        return null; // prevent flicker
    }

    return (
        <article>
            <div className="glue-page bookmark">
                <div className="willway-page-cover willway-page-cover--first">
                    <div className="willway-page-cover__inner glue-grid">
                        <div className="glue-grid__col glue-grid__col--span-12 willway-page-cover__content-row ">
                            <h1 className="willway-page-cover__headline glue-headline" data-in-view></h1>
                            <div className="willway-page-cover__paragraph" data-in-view>
                            </div>
                        </div>
                    </div>
                    <div
                        className="gdm-video-embed gdm-video-embed--muted gdm-video-embed--background gdm-video-embed--fit-height willway-page-cover__background willway-page-cover__background--video"
                        data-autoplay="true">
                        {/* {item1 && (
                            <ReactPlayer
                                url={item1}
                                playing={false}
                                key={item1.id}
                                loop
                                width="1920"
                                height="100%"
                                playsinline
                            />
                        )} */}

                        <video
                            src="/static/video/frame.mp4"
                            autoPlay
                            loop
                            muted={muted}
                            playsInline
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />

                        <div className="gdm-video-embed__controls">
                            <button
                                className="glue-button glue-button--low-emphasis gdm-video-embed__play-toggle"
                                onClick={() => setMuted(!muted)}
                            >
                                {muted ? "🔇 Unmute" : "🔊 Mute"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default HomeintroVideo