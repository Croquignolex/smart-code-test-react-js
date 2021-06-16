import {useState, useEffect} from 'react';

import {API_URL} from "../constants/apiContants";
import {apiGetRequest} from "../functions/ajaxFunction";

const ArticlesService = () => {
    const [loader, setLoader] = useState(false);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState({status: false, message: ''});

    useEffect(() => {
        // Show loader and hide error message
        setLoader(true);
        setError({status: false, message: ''});
        // API call
        /*apiGetRequest(API_URL)
            .then(data => {
                // Fill data, hide loader and error message
                setArticles(data.articles);
                setLoader(false);
                setError({status: false, message: ''});
            })
            .catch((message) => {
                // Hide loader ans show error message
                setArticles([]);
                setLoader(false);
                setError({status: true, message});
            });*/
        // eslint-disable-next-line
    }, []);

    return {articles, error, loader};
}

export default ArticlesService;
