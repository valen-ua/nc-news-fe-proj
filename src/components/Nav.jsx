import { useEffect, useState } from "react"
import { fetchTopics } from "../../api"
import { Link } from "react-router-dom"
export const Topics = () => {
  const [topics, setTopics] = useState([])  

  useEffect(() => {
    fetchTopics().then((topics) =>{
        setTopics(topics)
    })
  }, [])
    return (
<section className="topnav">
  {topics.map((topic, i) => {
    return (
        <Link key={i}>{topic.slug}  </Link>
    )
  })}
</section>
    )
    
    
}