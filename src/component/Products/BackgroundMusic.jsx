"use client";
import React, { useEffect, useRef, useState } from 'react';
import willwaysong from '../../assets/willway_song/song.mp3';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const handleUserInteraction = () => {
            if (!hasInteracted && audioRef.current) {
                audioRef.current.volume = 0.5;
                audioRef.current.play().catch(err => {
                    console.log("Autoplay failed:", err);
                });
                setHasInteracted(true);
            }
        };

        window.addEventListener('scroll', handleUserInteraction);

        return () => {
            window.removeEventListener('scroll', handleUserInteraction);
        };
    }, []);

    return (
        <audio
            ref={audioRef}
            src={willwaysong}
            loop
            preload="auto"
        />
    );
};

export default BackgroundMusic;
