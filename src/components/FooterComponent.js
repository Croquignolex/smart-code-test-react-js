import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright">
                            <p>
                                © Copyright 2021
                                <a href="https://croquignolex.mboacutz.com/" target="_blank" rel="noreferrer">
                                    Croquignolex
                                </a>,
                                All rights reserved.</p>
                        </div>
                        <div className="back">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="back-top">
                                <i className="fa fa-arrow-up" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo(FooterComponent);
