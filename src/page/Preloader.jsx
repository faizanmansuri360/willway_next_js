"use client";
import React from 'react'

const Preloader = () => {
  return (
    <>
      <div id="loading" className="preloader-wrap">
        <div className="preloader-2 text-center">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
          <span className="line line-4"></span>
          <span className="line line-5"></span>
          <span className="line line-6"></span>
          <span className="line line-7"></span>
          <span className="line line-8"></span>
          <span className="line line-9"></span>
          <div className="loader-text">Loading ...</div>
        </div>
      </div>
    </>
  )
}

export default Preloader