import React from "react";
import "./items.style.css";

export const Items = () => {
    return (

        <div id="page-container" class="page-container drawer-page-content">
            <div id="shopify-section-header" class="shopify-section">
                <header class="site-header">
                    <div class="site-header__trigger-container">
                        <button class="site-header__trigger site-header__trigger--menu" aria-label="Open Menu" js-drawer-open-left=""><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 26">
                            <path d="M0,0H54V8H0Z"></path>
                            <path d="M0,18H54v8H0Z"></path>
                        </svg></button>
                    </div>
                    <nav class="site-header__nav">
                        <ul class="site-header__links">
                            <li class="site-header__link-item">
                                <a href="/home" class="site-header__link" title="home" aria-label="Shop">HOME</a>
                            </li>
                            <li class="site-header__link-item">
                                <a href="/about" class="site-header__link" title="about" aria-label="Book">ABOUT</a>
                            </li>
                            <li class="site-header__link-item">
                                <a href="/policies" class="site-header__link" title="policies" aria-label="Tour">POLICIES</a>
                            </li>
                            <li class="site-header__link-item">
                                <a href="/contact" class="site-header__link" title="contact" aria-label="Retail">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="site-header__trigger-container site-header__trigger-container--cart">
                        <button class="site-header__trigger site-header__trigger--cart 
    hidden" aria-label="Open Cart Drawer" js-drawer-open-right="">
                            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 25.15">
                                <path class="cls-1" d="M17,6.63C17,6.23,16.8,0,11,0S4.82,6.22,4.81,6.62L0,6.65v18.5H21.9V6.65ZM11,2.09c3.71,0,4,4.3,4,4.56H6.89c0-.31.35-4.56,4.06-4.56"></path>
                            </svg>
                            <span class="site-header__cart-count" js-cart-count="">0</span>
                        </button>
                    </div>
                </header>
            </div>

            <main role="main" id="MainContent" class="modal-background">
                <section class="collection" data-section-type="collection">
                    <ul class="collection__products" js-products="">

                        <li class="collection__product" js-product="">
                            <div class="product-card" data-section-type="product-card">
                                <div class="product-card__images flickity-enabled is-draggable" js-carousel="" tabindex="0">
                                    <div class="flickity-viewport" style={{ height: 220, 'touchAction': 'pany' }}>
                                        <div class="flickity-slider" style={{ left: 0, transform: 'translateX(0%)' }}>
                                            <a href="/itemOne" class="product-card-image__variant is-selected" style={{ position: 'absolute', left: 0 }}>
                                                    <img class="lazyautosizes lazyloaded" src="https://golfwang.com/cdn/shop/files/FW23---CORDUROY-YOKE-DOWN-JACKET---BLACK---1_1728x.jpg?v=1701380978" alt="2"></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                    </ul>
                    <div class="collection__pagination">
                        <a href="/collections/new?page=2" aria-label="Next Page" class="loading__container" js-pagination-path="">
                            <div class="loading">
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}