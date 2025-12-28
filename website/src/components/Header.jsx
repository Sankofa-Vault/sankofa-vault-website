import React from 'react';
import { Link } from 'react-router-dom';
import { useCommonData } from '../hooks/useContentData';
import LoadingSpinner from './LoadingSpinner';

const Header = () => {
  const { data, loading, error } = useCommonData();

  if (loading) return <LoadingSpinner message="Loading header..." />;
  if (error) return null; // Gracefully fail - header will be empty

  const { header } = data;

  return (
    <>
      <header id="ori-header" className="ori-header-section header-style-one">
        <div className="ori-header-content-area">
          <div className="ori-header-content d-flex align-items-center justify-content-between">
            <div className="brand-logo">
              <Link to="/"><img src={header.logo} alt="Sankofa Vault" /></Link>
            </div>
            <div className="ori-main-navigation-area">
              <nav className="ori-main-navigation clearfix ul-li">
                <ul id="main-nav" className="nav navbar-nav clearfix">
                  {header.navigation.map((item, index) => (
                    <li key={index} className={item.dropdown ? '!' : ''}>
                      <Link to={item.path}>{item.label}</Link>
                      {item.dropdown && (
                        <ul className="dropdown-menu clearfix">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.path}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
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
                  <Link to="/"><img src={header.logo} alt="Sankofa Vault" /></Link>
                </div>
                <nav className="mobile-main-navigation clearfix ul-li">
                  <ul id="m-main-nav" className="nav navbar-nav clearfix">
                    {header.mobileNavigation.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path}>{item.label}</Link>
                      </li>
                    ))}
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
                    <Link to="/"><img src={header.logo} alt="Sankofa Vault" /></Link>
                  </div>
                  <div className="content-box">
                    <h5>{header.sidebar.title}</h5>
                    <p className="text">{header.sidebar.description}</p>
                  </div>
                  <div className="content-box">
                    <h5>Socials</h5>
                    <ul className="social-box">
                      {header.sidebar.socials.map((social, index) => (
                        <li key={index}>
                          <a href={social.url} className={social.icon}></a>
                        </li>
                      ))}
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
