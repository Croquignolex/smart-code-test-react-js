import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import author from "../assets/img/author.png";

const ArticleComponent = ({article}) => {
    return (
        <div className="card">
            <div className="post-card">
                <div className="post-card-image">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">
                        <img src={article.urlToImage} alt="" />
                    </a>
                </div>
                <div className="post-card-content">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="categorie">
                        {article.source.name}
                    </a>
                    <h5>
                        <a href={article.url}>
                            {article.title}
                        </a>
                    </h5>
                    <p>
                        {article.description}
                    </p>
                    <div className="post-card-info">
                        <ul className="list-inline">
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">
                                    <img src={author} alt="" />
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">
                                    {article.source.name}
                                </a>
                            </li>
                            <li className="dot" />
                            <li>
                                {article.publishedAt && moment(article.publishedAt).format('DD/MM/YYYY HH:mm')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Prop types to ensure destroyed props data type
ArticleComponent.propTypes = {
    article: PropTypes.object.isRequired,
};

export default React.memo(ArticleComponent);
