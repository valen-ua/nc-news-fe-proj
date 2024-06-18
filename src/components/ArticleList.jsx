import { fetchArticles } from "../../api";
import { useState, useEffect } from "react";
import { ArticleCard } from "./ArticleCard";

export const AllArticles = () => {
    const [allArticles, setAllArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect (() => {
fetchArticles().then((allArticles) => {
    setAllArticles(allArticles)
    setIsLoading(false)
})
    }, [])

    if (isLoading) {
        return <p className="all-articles">Loading...</p>
    }
    return (
        <section className="all-articles">
            {allArticles.map((article, i) => {
                return (
               <ArticleCard key={article.title} article={article}/>
                )
            })}
        </section>
    )

    

}