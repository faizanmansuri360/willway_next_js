"use client";
import Navbar from "./Navbar";
import React, { useEffect, useState, useRef } from "react";
import { Categories } from "../../API/ApisHome";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaCross, FaSearch, FaTimes } from "react-icons/fa";
import Search from "./Search";
import willwayLogo from "../../../public/assets/logo.png";
import Image from "next/image";


const Header = () => {
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const timeoutRef = useRef(null);

  const pathname = usePathname();
  useEffect(() => {
    setIsMobileDropdownOpen(false);
    setIsModelsDropdownOpen(false);
  }, [pathname]);


  useEffect(() => {
    Categories().then((res) => {
      setCategories(res.Categories || []);
    });
  }, []);




  const handleMouseEnter = () => {

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsModelsDropdownOpen(true);
  };

  const handleMouseLeave = () => {

    timeoutRef.current = setTimeout(() => {
      setIsModelsDropdownOpen(false);
    }, 200);
  };


  return (
    <>
      <header className="header-io-2025 header glue-header glue-header--no-cta gdm-header">
        <div className="header-container">
          <nav id="main_content" className={`header flyout desktop ${isModelsDropdownOpen ? "show" : ''}`} data-section="Models" aria-labelledby="Models">
            <div className="flyout__container gdm-grid"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flyout__intro gdm-grid__column--span-3">
                <h2 className="flyout__title gdm-heading-7">
                  <p data-block-key="ml68n">Explore Our Veterinary Equipment</p>
                </h2>

                <div className="cta__wrapper normal-align cta__tonal-compact cta--icon" >
                  <div className="cta__content-wrapper normal-align tonal-compact">
                    <span className="cta__label gdm-text-call-to-action--nav">
                      Product Categories
                    </span>
                  </div>
                </div>

              </div>

              {categories.map((category) => (

                <div className="flyout__submenu gdm-grid__column--span-3" key={category.id}>
                  <div className="flyout__submenu__intro">
                    <h3 className="gdm-heading-9">{category.heading}</h3>
                    <div className="gdm-text-caption">
                      <p data-block-key="9jdlk">{category.description}</p>
                    </div>
                  </div>

                  {category.products && category.products.length > 0 && category.products.map((product) => (
                    <div className="flyout__submenu__links" key={product.id}>
                      <div className="flyout__submenu__link" aria-label="2.5 Pro" data-gtm-tag="header-selection"
                        data-event-io="nav_select" >

                        <div className="icon">
                          <picture className="picture">
                            <img alt="" className="picture__image" height="18" loading="lazy"
                              src={product.image} width="18" />
                          </picture>
                        </div>

                        <div className="label">
                          <Link className="gdm-text-call-to-action--nav" href={`/products-details/${product.product_details_id}`}>{product.name}</Link>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </nav>
          <nav className={`header flyout tablet ${isMobileDropdownOpen ? "show" : ''}`} >
            <div className="flyout__container gdm-grid">
              <div className="flyout__main-menu-mobile gdm-grid__column--span-3 gdm-grid__column--span-4-md">
                <nav className="main-menu__container">
                  <Link className="main-menu__label-tablet flyout__accordion__toggle gdm-text-call-to-action--nav open" href={"/"}>Home</Link>
                  <Link className="main-menu__label-tablet flyout__accordion__toggle gdm-text-call-to-action--nav open" href={"/about"}>About</Link>
                  <Link className="main-menu__label-tablet flyout__accordion__toggle gdm-text-call-to-action--nav open" href={"/contact"}>Contact us</Link>
                </nav>

              </div>
              <div className="flyout__content-tablet gdm-grid__column--span-12">
                <div className="flyout__accordion__content show" data-section="Models">
                  <div className="flyout__intro">
                    <h2 className="flyout__title gdm-heading-7">
                      <p data-block-key="ml68n">Explore Our Veterinary Equipment</p>
                    </h2>
                    <div className="cta__wrapper normal-align cta__tonal-compact cta--icon" >
                      <div className="cta__content-wrapper normal-align tonal-compact">
                        <span className="cta__label gdm-text-call-to-action--nav">
                          Product Categories
                        </span>
                      </div>
                    </div>
                  </div>
                  {categories.map((category) =>
                    <div className="flyout__submenu" key={category.id}>
                      <div className="flyout__submenu__intro">
                        <h3 className="gdm-heading-9">{category.heading}</h3>
                        <div className="gdm-text-caption">
                          <p data-block-key="9jdlk">{category.description}</p>
                        </div>
                      </div>
                      <div className="flyout__submenu__links">
                        {category.products && category.products.length > 0 && category.products.map((product) => (
                          <div className="flyout__submenu__link" key={product.id}>
                            <div className="icon">
                              <picture className="picture">
                                <img alt="" className="picture__image" height="18" loading="lazy"
                                  src={product.image} width="18" />
                              </picture>
                            </div>
                            <div className="label">
                              <Link className="gdm-text-call-to-action--nav" href={`/products-details/${product.product_details_id}`}>{product.name}</Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          <nav className={`header flyout mobile  ${isMobileDropdownOpen ? "show" : ''}`} >
            <div className="flyout__container gdm-grid">
              <div className="flyout__content-mobile gdm-grid__column--span-8 gdm-grid__column--span-4-md">
                <div className="flyout__accordion">
                  <div className="flyout__accordion__content show" data-section="Models">
                    <div className="flyout__intro">
                      <h2 className="flyout__title gdm-heading-7">
                        <p data-block-key="ml68n">Explore Our Veterinary Equipment</p>
                      </h2>
                      <div className="cta__wrapper normal-align cta__tonal-compact cta--icon">
                        <div className="cta__content-wrapper normal-align tonal-compact">
                          <Link className="cta__label gdm-text-call-to-action--na" href={"/"}>Home</Link>
                        </div>
                      </div>
                      <div className="cta__wrapper normal-align cta__tonal-compact cta--icon">
                        <div className="cta__content-wrapper normal-align tonal-compact">
                          <Link className="cta__label gdm-text-call-to-action--na" href={"/about"}>About</Link>
                        </div>
                      </div>
                      <div className="cta__wrapper normal-align cta__tonal-compact cta--icon">
                        <div className="cta__content-wrapper normal-align tonal-compact">
                          <Link className="cta__label gdm-text-call-to-action--na" href={"/contact"}>Contact us</Link>
                        </div>
                      </div>
                    </div>

                    {categories.map((category) =>
                      <div className="flyout__submenu gdm-grid__column--span-3" key={category.id}>
                        <div className="flyout__submenu__intro">
                          <h3 className="gdm-heading-9">{category.heading}</h3>
                          <div className="gdm-text-caption">
                            <p data-block-key="9jdlk">{category.description}</p>
                          </div>
                        </div>

                        <div className="flyout__submenu__links">
                          {category.products && category.products.length > 0 && category.products.map((product) => (
                            <div className="flyout__submenu__link" key={product.id}>

                              <div className="icon">

                                <picture className="picture">
                                  <img alt="" className="picture__image" height="18" loading="lazy"
                                    src={product.image} width="18" />
                                </picture>
                              </div>
                              <div className="label">
                                <Link onClick={() => setIsMobileDropdownOpen(false)} className="gdm-text-call-to-action--nav" href={`/products-details/${product.product_details_id}`}>{product.name}</Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="header-bar ">
            <div className="left-menu">

              <div className="hamburger-mobile">
                <button className="open" aria-label="Open the site navigation"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} >
                  {isMobileDropdownOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              <div className="site-switcher">
                <div className="site-switcher__bar">
                  <div className="site-switcher__home" >
                    <Link className="site-switcher__title" href={"/"}><Image src={willwayLogo} alt="Willway Logo" priority /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-menu">
              <nav className="main-menu__container" aria-label="Main menu">
                <Link className="main-menu__label gdm-text-call-to-action--nav" href={"/"}>Home</Link>
                <Link className="main-menu__label gdm-text-call-to-action--nav" href={"/about"}>About</Link>
                <div className="main-menu__label gdm-text-call-to-action--nav"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} >
                  Categories
                </div>
                <Link className="main-menu__label gdm-text-call-to-action--nav" href={"/contact"}>Contact us</Link>
              </nav>
            </div>

            {/* <div className="right-menu">
              <div className="search-icon">
                <FaSearch />
              </div>
            </div> */}

          </div>

        </div>
        <div className="order-3 navbar-right-elements">
          <div className="search-cart">
            <Search />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

