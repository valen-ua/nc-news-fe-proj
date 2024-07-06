import { fetchCommentsForArticle } from "../../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CommentCard } from "./CommentCard"


export const CommentsForArticle = () => {
    const [commentsForArticle, setCommentsForArticle] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        fetchCommentsForArticle(article_id).then
        ((commentsForArticle) => {
            setCommentsForArticle(commentsForArticle)
         
        })
    }, [article_id])

    return (
        <section className="comments-for-article">
           <h2>COMMENTS</h2>
            <h4>Have a look what others think about this article</h4>
            <ul>
               
            {commentsForArticle.map((comment, i) => {
                 
                return (
                    
                <li key={comment.comment_id}>
            
                <CommentCard />
                 <p></p>
                
                 <h4  >{comment.author} says:</h4>
                  <p>{comment.body}</p>
                  <p>Votes: {comment.votes}</p>  
                  </li>  
                )
                
            })}
            </ul> 
        </section>
    )
}