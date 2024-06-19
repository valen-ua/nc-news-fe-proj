import { Link } from "react-router-dom"

export const ArticleCard = ({article}) => {

    return (
        <section className="article-card">
<Link to={`/articles/${article.article_id}`}>
<h3>{article.title}</h3>
</Link>
<img src={article.article_img_url} alt="article image" />
        </section>
    )
}