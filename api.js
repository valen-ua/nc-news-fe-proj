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

export const fetchIndividualArticle = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then(({data}) => {
        return data
    })
}

export const fetchCommentsForArticle = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments
    })
}

export const voteOnIndividualArticle = (article_id) => {
    const patchBody = {
        inc_votes: 1, }
    return ncNewsApi.patch(`/articles/${article_id}`, patchBody).then(({data}) => {
        return data.votes
    })
} 