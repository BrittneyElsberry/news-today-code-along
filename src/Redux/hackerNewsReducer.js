import axios from 'axios'


const initialState = {

    loading: false,
    articles: []
}

//declare action type

const REQUEST_ARTICLES = "REQUEST_ARTICLES"

export function requestArticles(){
    
    let articles = axios.get('/api/hacker-news').then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
  
}

//only need to use making an axios call inside a reducer using redux middleware
export default function (state=initialState, action) {
    switch(action.type){
        case REQUEST_ARTICLES + "_PENDING":
        return {...state, loading: true }
        case REQUEST_ARTICLES + "_FULLFILLED":
            return {...state, loading: false, articles: action.payload} //.data after payload maybe?
            case REQUEST_ARTICLES + "_REJECTED":
            return {...state, loading: false}
            default:
                return state
    }
}