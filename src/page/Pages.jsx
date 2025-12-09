import { useState, useEffect } from "react";
// import Home 
// import Preloader from "./Preloader.jsx";
import Home from "../component/MainPages/Home";

const Pages = () => {
    // const [isLoading, setIsLoading] = useState(() => {
    //     return !localStorage.getItem('hasVisited');
    // });

    // useEffect(() => {
    //     if (isLoading) {
    //         const timeout = setTimeout(() => {
    //             localStorage.setItem('hasVisited', 'true');
    //             setIsLoading(false);
    //         }, 4000);

    //         return () => clearTimeout(timeout); 
    //     }
    // }, [isLoading]);

    // if (isLoading) {
    //     return <Preloader />;
    // }
    
        return (
            <>
                <Home />
            </>
        )
    }

    export default Pages