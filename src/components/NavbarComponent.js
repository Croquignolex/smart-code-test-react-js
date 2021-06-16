import React from 'react';

const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                {/* Start Menu */}
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav ml-auto mr-auto">
                        {/* Home */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        {/* Blog */}
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">
                                Blog
                                <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-menu fade-up">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> Blog grid</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> Blog masonry </a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item " href="#"> Blog list </a></li>
                            </ul>
                        </li>
                        {/* Posts */}
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">
                                Posts Features
                                <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-menu fade-up">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> post default</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> post video</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> post audio</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> post gallery</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> post no sidebar </a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> post left sidebar </a></li>
                            </ul>
                        </li>
                        {/* Pages */}
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">
                                Pages
                                <i className="fa fa-angle-down" />
                            </a>
                            <ul className="dropdown-menu fade-up">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> About </a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> author </a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item" href="#"> Login </a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item " href="#"> Sign up </a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li><a className="dropdown-item " href="#"> Page 404 </a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Contact </a>
                        </li>
                    </ul>
                </div>
                {/* End Menu */}
                {/* Start Social Icons */}
                <div className="navbar-right ml-auto">
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input type="checkbox" id="checkbox"/>
                            <div className="slider round" />
                        </label>
                    </div>
                    <div className="social-icones">
                        <ul className="list-inline">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-youtube" /></a></li>
                        </ul>
                    </div>
                    <div className="search-icon">
                        <i className="fa fa-search" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                {/* End Social Icons */}
            </div>
        </nav>
    );
}

export default React.memo(NavBarComponent);
