import { fetchIndividualArticle } from "../../api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const IndividualArticle = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [individualArticle, setIndividualArticle] = useState()
    const {article_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetchIndividualArticle(article_id).then((individualArticle) => {
            setIndividualArticle(individualArticle.article)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading) {
        return <p className="Loading">Loading...</p>
    }



    return (
        <section className="individual-article">
            <h2>{individualArticle.title}</h2>
            <p>{individualArticle.body}</p>
            <img src={individualArticle.article_img_url} alt="" />
            <h4>Votes: {individualArticle.votes}</h4>
            <h3 className="author-name"> Author: {individualArticle.author}</h3>
        </section>
    )
}