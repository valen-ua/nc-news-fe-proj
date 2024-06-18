

export const ArticleCard = ({article}) => {
    return (
        <section className="article-card">
<h3>{article.title}</h3>
<img src={article.article_img_url} alt="article image" />
        </section>
    )
}