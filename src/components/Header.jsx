import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header id="ori-header" className="ori-header-section header-style-one">
        <div className="ori-header-content-area">
          <div className="ori-header-content d-flex align-items-center justify-content-between">
            <div className="brand-logo">
              <Link to="/"><img src="assets/img/logo/logo1.png" alt="" /></Link>
            </div>
            <div className="ori-main-navigation-area">
              <nav className="ori-main-navigation clearfix ul-li">
                <ul id="main-nav" className="nav navbar-nav clearfix">
                  <li className="dropdown ori-megamenu">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="">
                    <Link to="/service">Services</Link>
                  </li>
                  <li><Link to="/about">About US</Link></li>
                  <li className="!">
                    <Link to="/mission">MISSION</Link>
                    <ul className="dropdown-menu clearfix">
                      <li><Link to="/service">Services</Link></li>
                      <li className="dropdown">
                        <Link to="/service-single">Services Details</Link>
                        {/* Sub-menu items for services details can go here if needed */}
                      </li>
                      <li><Link to="/team">Team Page</Link></li>
                      <li><Link to="/team-single">Team Details</Link></li>
                      <li><Link to="/faq">FAQ Page</Link></li>
                      <li><Link to="/pricing">Pricing Page</Link></li>
                      <li><Link to="/contact">Contact Page</Link></li>
                      <li><Link to="/mission">Mission Page</Link></li>
                    </ul>
                  </li>
                  <li className="">
                    <Link className="" to="/portfolio">PORTFOLIO</Link>
                  </li>
                  <li className="!">
                    <Link to="/contact">contact us</Link>
                    <ul className="dropdown-menu clearfix">
                      <li><Link to="/portfolio">Portfolio </Link></li>
                      <li><Link to="/portfolio-single">Portfolio Details</Link></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ori-header-sidebar-search d-flex align-items-center">
              <div className="ori-search-btn">
                <button className="search-box-outer"><i className="fal fa-search"></i></button>
              </div>
              <div className="ori-sidenav-btn navSidebar-button">
                <button><i className="fal fa-bars"></i></button>
              </div>
            </div>
          </div>
          <div className="mobile_menu position-relative">
            <div className="mobile_menu_button open_mobile_menu">
              <i className="fal fa-bars"></i>
            </div>
            <div className="mobile_menu_wrap">
              <div className="mobile_menu_overlay open_mobile_menu"></div>
              <div className="mobile_menu_content">
                <div className="mobile_menu_close open_mobile_menu">
                  <i className="fal fa-times"></i>
                </div>
                <div className="m-brand-logo">
                  <Link to="/"><img src="assets/img/logo/logo1.png" alt="" /></Link>
                </div>
                <nav className="mobile-main-navigation clearfix ul-li">
                  <ul id="m-main-nav" className="nav navbar-nav clearfix">
                    <li className="">
                      <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About us</Link></li>
                    <li className="">
                      <Link to="/service">services</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/mission">Mission</Link>
                    </li>
                    <li className="">
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="">
                      <Link to="/contact">contact us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search PopUp */}
      <div className="search-popup">
        <button className="close-search style-two"><span className="fal fa-times"></span></button>
        <button className="close-search"><span className="fa fa-arrow-up"></span></button>
        <form method="post" action="#">
          <div className="form-group">
            <input type="search" name="search-field" placeholder="Search Here" required="" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </div>
        </form>
      </div>

      {/* Sidebar sidebar Item */}
      <div className="xs-sidebar-group info-group">
        <div className="xs-overlay xs-bg-black">
          <div className="row loader-area">
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
          </div>
        </div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                X
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents headline pera-content">
                <div className="content-inner">
                  <div className="logo">
                    <Link to="/"><img src="assets/img/logo/logo1.png" alt="" /></Link>
                  </div>
                  <div className="content-box">
                    <h5>About Us</h5>
                    <p className="text">Sankofa Vault is a creative initiative that blends cultural heritage with modern technology to inspire, educate, and empower. Rooted in the Sankofa principle—looking back to retrieve what is valuable—the project uses multimedia tools such as digital storytelling and video to preserve tradition while embracing innovation. It seeks to amplify voices, celebrate history, and build a legacy for future generations. More than a brand, Sankofa Moments is a movement inviting creatives to use today’s technology to tell timeless stories and shape a meaningful future.</p>
                  </div>
                  <div className="content-box">
                    <h5>Socials</h5>
                    <ul className="social-box">
                      <li><a href="https://www.facebook.com/" className="fab fa-facebook-f"></a></li>
                      <li><a href="https://www.twitter.com/" className="fab fa-instagram"></a></li>
                      <li><a href="https://dribbble.com/" className="fab fa-tiktok"></a></li>
                      <li><a href="https://www.linkedin.com/" className="fab fa-youtube"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
