import { GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR} from './articleConstants'

export function getArticles() {
    return (dispatch) => {
        
        fetch('https://localhost:44342/api/article')
            .then((response) => {
		        return response.json();
	        }).then((data) => {
                dispatch({ type: GET_ARTICLES_SUCCESS, payload: data });
            }).catch((ex) => {
                dispatch({ type: GET_ARTICLES_ERROR, payload: ex });
            });
    }
}



