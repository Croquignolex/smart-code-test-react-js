import {useState, useEffect} from 'react';

import {API_URL} from "../constants/apiContants";
import {apiGetRequest} from "../functions/ajaxFunction";

const ArticlesService = () => {
    const [loader, setLoader] = useState(false);
    const [articles, setArticles] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pages, setPages] = useState([{label: 1, active: true}]);
    const [error, setError] = useState({status: false, message: ''});

    useEffect(() => {
        // Show loader and hide error message
        setLoader(true);
        setError({status: false, message: ''});
        // API call
        apiGetRequest(API_URL + '&page=' + activePage)
            .then(data => {
                // Fill data, hide loader and error message
                setArticles(data.articles);

                // Update pages
                const results = (Math.ceil(data.totalResults / 20));
                const pagesTemp = [];
                for(let i = 1; i <= results; i++) {
                    pagesTemp.push({label: i, active: (activePage === i)});
                }
                setPages(pagesTemp);

                setLoader(false);
                setError({status: false, message: ''});
            })
            .catch((message) => {
                // Hide loader ans show error message
                setArticles([]);
                setLoader(false);
                setError({status: true, message});
            });
        // eslint-disable-next-line
    }, [activePage]);

    return {articles, error, loader, pages, setActivePage};
}

export default ArticlesService;
