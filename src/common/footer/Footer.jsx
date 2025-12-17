"use client";
import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-top">
        <div className="footer-wrapper">
          <div className="block-social_links">
            <div className="footer-social-links__wrapper">
              <span className="footer-social-links__title gdm-text-body">Follow us</span>
              <div className="footer-social-links__icons-wrapper">
                <div className="footer-social-links__icon ">
                  <FaInstagram className="social" />
                </div>
                <div className="footer-social-links__icon ">
                  <FaFacebook className="social" />
                </div>
              </div>
            </div>
          </div>

          <div className="block-main_links">
            <div className="footer-main-links__wrapper">
              <div className="footer-main-links__border-top"></div>
              <div className="footer-main-links__title-wrapper">
                <div className="site-switcher__bottom" >
                  <Link className="site-switcher__title" href={"/"}><img src="/assets/willwayWhite.png" /></Link>
                </div>
                <span className="gdm-heading-5">Build veterinary technology responsibly to benefit animal health.</span>
              </div>
              <div className="footer-main-links__content-wrapper">

                <div className="footer-main-links__link-group">
                  <div className="footer-main-links__group-heading-wrapper">
                    <div className="footer-main-links__group-title gdm-text-caption">
                      <span>Equipment</span>
                    </div>

                    <div className="footer-main-links__group-description gdm-text-caption">
                      <span>Built with precision for next-generation veterinary care.</span>
                    </div>

                  </div>
                  <div className="footer-main-links__main-links-wrapper">

                    <div className="footer-main-links__group-heading-wrapper">
                      <div className="footer-main-links__group-title gdm-text-caption">
                        <span>Learn more</span>
                      </div>
                      <div className="footer-main-links__main-link" >
                        <span className="footer-main-links__main-link-label gdm-heading-9">About Us</span>
                      </div>

                      <div className="footer-main-links__main-link" >
                        <span className="footer-main-links__main-link-label gdm-heading-9">Contact Us</span>
                      </div>

                      <div className="footer-main-links__main-link" >
                        <span className="footer-main-links__main-link-label gdm-heading-9">Know More</span>
                      </div>

                      <div className="footer-main-links__main-link">
                        <span className="footer-main-links__main-link-label gdm-heading-9">Quality  &amp; Safety</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="footer-main-links__link-group">
                  <div className="footer-main-links__group-heading-wrapper">
                    <div className="footer-main-links__group-title gdm-text-caption">
                      <span>CONTACT US</span>
                    </div>

                    <div className="footer-main-links__group-description gdm-text-caption">
                      <span><div className="fw-bold">UK Address :</div> 34–35 Holborn Business Center Hatton Garden, Holborn, London EC1N 8DX, United Kingdom</span>

                      <span>
                        <div className="fw-bold">CN Address :</div> 5 Yipeng Industrail Park, Guansheng 2nd Rd, Luhu Community, Guanhu Street, Longhua District, Shenzhen City, Guangdong, China.</span>
                    </div>

                  </div>
                  <div className="footer-main-links__main-links-wrapper">
                    <div className="footer-main-links__main-link" >
                      <span className="footer-main-links__main-link-label gdm-heading-9">Mob: +86 158 1749 7863</span>
                    </div>
                    <div className="footer-main-links__main-link" >
                      <span className="footer-main-links__main-link-label gdm-heading-9">Mail : sales@willwaybiotech.com</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="block-google_links">

            <div className="footer-google-links__wrapper">
              <div className="footer-google-links__border-top"></div>
              <div className="footer-google-links__auxiliary-wrapper">

                <div className="footer-google-links__auxiliary-link gdm-text-body">
                  <div className="footer-google-links__link">
                    <span>About willway</span>
                  </div>
                </div>

                <div className="footer-google-links__auxiliary-link gdm-text-body">
                  <div className="footer-google-links__link">
                    <span>willway products</span>
                  </div>
                </div>

                <div className="footer-google-links__auxiliary-link gdm-text-body">
                  <div className="footer-google-links__link" >
                    <span>Privacy</span>
                  </div>
                </div>

                <div className="footer-google-links__auxiliary-link gdm-text-body">
                  <div className="footer-google-links__link" >
                    <span>Terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
