import React from 'react';

import LoaderComponent from "./LoaderComponent";
import ArticleComponent from "./ArticleComponent";
import ErrorAlertComponent from "./ErrorAlertComponent";
import ArticlesService from "../services/ArticlesService";

const BodyComponent = () => {

    const {articles, error, loader, pages, setActivePage} = ArticlesService();

    return (
        <section className="section masonry-layout pt-45">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Error alert */}
                        {error.status && <ErrorAlertComponent message={error.message}/>}
                        {/* Loader or data */}
                        {loader
                            ? <LoaderComponent />
                            : (
                                <div className="card-columns">
                                    {articles.map((article, key) => (
                                            <div key={key}>
                                                <ArticleComponent article={article} />
                                            </div>
                                        )
                                    )}
                                </div>
                            )
                        }
                        {/* Start Pagination */}
                        <div className="pagination mt-30">
                            <ul className="list-inline">
                                {pages.map((page, key) => (
                                        <li className={`${page.active && 'active'} page`} key={key}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#" onClick={() => setActivePage(page.label)}>
                                                {page.label.toString()}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* End Pagination */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(BodyComponent);
