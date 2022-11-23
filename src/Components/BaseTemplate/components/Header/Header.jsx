import React, { useContext, useEffect } from 'react'
import $ from 'jquery';

import "./Header.css";
import { LoginButton } from './components/LoginButton';
import { DefaultButton } from './components/DefaultButton';
import { Link } from 'react-router-dom';
import { SideBarContext } from '../SideBar/context';
import { useAuth } from '../../../../contexts/auth.context';

const Header = (props) => {
    const { isCollapsed } = useContext(SideBarContext)
    const { user } = useAuth();
    const { hasContainer = true } = props;

    useEffect(() => {
        //SubMenu Dropdown Toggle
        if ($('.menu-area li.menu-item-has-children ul').length) {
            $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
        }

        //Mobile Nav Hide Show
        if ($('.mobile-menu').length) {

            var mobileMenuContent = $('.menu-area .push-menu').html();
            $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

            //Dropdown Button
            $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(500);
            });

            $('.menu-backdrop, .mobile-menu .close-btn').click(() => {
                $('body').removeClass('mobile-menu-visible');
            })

            //Menu Toggle Btn
            $('.mobile-nav-toggler').on('click', function () {
                $('body').addClass('mobile-menu-visible');
            });
        }
    }, []);

    useEffect(() => {
        $(".menu-tigger").on("click", function () {
            $(".extra-info,.offcanvas-overly").addClass("active");
            return false;
        });

        $(".menu-close,.offcanvas-overly").on("click", function () {
            $(".extra-info,.offcanvas-overly").removeClass("active");
        });
        /*=============================================
            =     Menu sticky & Scroll to top      =
        =============================================*/
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $("#sticky-header").removeClass("sticky-menu");
                $('.scroll-to-target').removeClass('open');
                $("#header-top-fixed").removeClass("header-fixed-position");

            } else {
                $("#sticky-header").addClass("sticky-menu");
                $('.scroll-to-target').addClass('open');
                $("#header-top-fixed").addClass("header-fixed-position");
            }
        });


        /*=============================================
            =    		 Scroll Up  	         =
        =============================================*/
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);
            });
        }
    }, []);

    return (
        <header className='main-header'>
            <div id='sticky-header' className="menu-area ">
                <div className={hasContainer ? 'container' : ''}>
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                            <div className="menu-wrap main-menu">
                                <nav className="menu-nav py-lg-3 py-md-2">
                                    <div className="navbar-wrap push-menu main-menu d-none d-lg-flex">
                                        {/* <ul className="navigation">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/nft-marketplace">Explore</Link></li>
                                            <li><Link to="/collections">Collection</Link></li>
                                            <li className="menu-item-has-children"><a href="/#">Pages</a>
                                                <ul className="submenu">
                                                    <li><Link to="/activity">Activity</Link></li>
                                                    <li><Link to="/category">Category</Link></li>
                                                    <li><Link to="/ranking">Ranking</Link></li>
                                                    <li><Link to="/creators">Creators</Link></li>
                                                    <li><Link to="/market-single">Market Single</Link></li>
                                                    <li><Link to="/nft-live-bidding">Live Bidding</Link></li>
                                                    <li><Link to="/create-item">Create Item</Link></li>
                                                    <li><Link to="/author-profile">Author Profile</Link></li>
                                                    <li><Link to="/login-register">Login &amp; Register</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><Link to="/#">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/blog">Our Blog</Link></li>
                                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </div>
                                    <div className="header-action d-none d-sm-none d-lg-block">
                                        <ul>
                                            {
                                                user && (
                                                    <>
                                                        <li>
                                                            <DefaultButton title='Premios' to="#" src="/assets/img/icons/gift-icon.svg" />
                                                        </li>
                                                        <li>
                                                            <DefaultButton title='Notificacoes' to="#" src="/assets/img/icons/notification-icon.svg" />
                                                        </li>
                                                        <li>
                                                            <DefaultButton title='Carteira' to="#" src="/assets/img/icons/wallet-icon.svg" />
                                                        </li>
                                                    </>
                                                )
                                            }
                                            <li>
                                                <DefaultButton title='Whitepaper' to="#" src="/assets/img/icons/open-link-icon.svg" />
                                            </li>
                                            <li>
                                                <DefaultButton title='Idioma' to="#" src="/assets/img/icons/browser-icon.svg" />
                                            </li>
                                            <li>
                                                <LoginButton />
                                            </li>
                                        </ul>
                                    </div>

                                </nav>
                            </div>
                            {/* Mobile Menu  */}

                            <div className="mobile-menu">
                                <nav className="menu-box">
                                    <div className="close-btn"><i className="fas fa-times" /></div>
                                    <div className="nav-logo"><a href="/#"><img src="assets/img/logo/logo.png" alt="" title="true" /></a>
                                    </div>
                                    <div className="menu-outer">

                                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                                    </div>
                                    <div className="social-links">
                                        <ul className="clearfix">
                                            <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                                            <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                                            <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                                            <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                                            <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-backdrop" />
                            {/* End Mobile Menu */}
                        </div>
                    </div>
                </div>

            </div>

        </header>

    )
}

export default Header
