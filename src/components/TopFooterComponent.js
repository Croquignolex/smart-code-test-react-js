import React from 'react';

function TopFooterComponent() {
    return (
        <section className="newslettre">
            <div className="container-fluid">
                <div className="newslettre-width text-center">
                    <div className="newslettre-info">
                        <h5>Subscribe to our Newslatter</h5>
                        <p> Sign up for free and be the first to get notified about new posts. </p>
                    </div>
                    <form action="#" className="newslettre-form">
                        <div className="form-flex">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your email adress" required="required" />
                            </div>
                            <button className="submit-btn" type="submit">Subscribe</button>
                        </div>
                    </form>
                    <div className="social-icones">
                        <ul className="list-inline">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-facebook-f" />Facebook</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-twitter" />Twitter</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-instagram" />Instagram</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#"><i className="fab fa-youtube" />Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(TopFooterComponent);
