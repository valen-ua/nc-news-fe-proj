import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-mm90.onrender.com/api"
})
export const fetchTopics = () => {
    return ncNewsApi.get("/topics").then(({data}) => {
        return data.topics
    })    
}

export const fetchArticles = () => {
    return ncNewsApi.get("/articles").then(({data}) => {
        return data.articles
    })
}