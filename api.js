import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-mm90.onrender.com/api"
})
export const fetchTopics = () => {
    return ncNewsApi.get("/topics").then(({data}) => {
        console.log(data.topics)
        return data.topics
    })    
}