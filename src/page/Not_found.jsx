"use client";
import { Link, useLocation } from "react-router-dom";
const Not_found = () => {
    return (
        <>
            <main id="content" className="glue-page not-found-page__content">
                <h1 className="glue-headline glue-headline--headline-2">404. That’s an error</h1>
                <p className="not-found-page__text glue-headline glue-headline--headline-4">
                    Sorry - we can’t find the page you’re looking for.
                    <Link className="button glue-button glue-button--high-emphasis" to={"/"}>
                        <span className="button__text flex-font">Back to home</span>
                    </Link>
                </p>

            </main>
        </>
    )
}

export default Not_found