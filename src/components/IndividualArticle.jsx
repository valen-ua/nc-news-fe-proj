import { fetchIndividualArticle } from "../../api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CommentsForArticle } from "./CommentsForArticle"
import { voteOnIndividualArticle } from "../../api"
export const IndividualArticle = () => {
    const [individualArticle, setIndividualArticle] = useState({})
    const {article_id} = useParams()
    const [votes, setVotes] = useState(0)

    useEffect(() => {
        fetchIndividualArticle(article_id).then((individualArticle) => {
            setIndividualArticle(individualArticle.article)
            setVotes(individualArticle.article.votes)   
                     
        })
    }, [article_id])

    const handleVoteClick = (change) => {
    const newVotes = votes + change
    setVotes(newVotes) 
    setIndividualArticle(previous => ({
        ...previous,
        votes: newVotes
    })) 
    }

    return (
        <section className="individual-article">
            <h2>{individualArticle.title}</h2>
            <p>{individualArticle.body}</p>
            <img src={individualArticle.article_img_url} alt="" />
            <h4>Votes: {individualArticle.votes}</h4>
            <button onClick={() => handleVoteClick(1)}>Vote</button>
            <h3 className="author-name"> Author: {individualArticle.author}</h3>
            <CommentsForArticle />
        </section>
    )
}