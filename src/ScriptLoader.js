"use client";

import { useEffect } from "react";

const loadScript = (src) =>
    new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });

export default function ScriptLoader() {
    useEffect(() => {
        const loadScripts = async () => {
            try {
                await loadScript("/static/js/willwayone.js");
                await loadScript("/static/js/willwaytwo.js");
                await loadScript("/static/js/willwaythree.js");
                await loadScript("/static/js/willwayfour.js");
            } catch (error) {
                console.error("Script load failed:", error);
            }
        };
        loadScripts();
    }, []);

    return null;
}
