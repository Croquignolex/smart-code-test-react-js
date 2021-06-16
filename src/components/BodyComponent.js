import React from 'react';
import PropTypes from 'prop-types';

import ArticleComponent from "./ArticleComponent";

const BodyComponent = ({articles}) => {
    return (
        <section className="section masonry-layout pt-45">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-columns">
                            {articles.map(article => <ArticleComponent article={article} />)}
                        </div>
                        {/* Start Pagination */}
                        <div className="pagination mt-30">
                            <ul className="list-inline">
                                <li className="active page" data-page="1">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#">1</a>
                                </li>
                                <li className="page" data-page="2">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#">2</a>
                                </li>
                            </ul>
                        </div>
                        {/* End Pagination */}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Prop types to ensure destroyed props data type
BodyComponent.propTypes = {
    articles: PropTypes.array.isRequired,
};

export default React.memo(BodyComponent);
