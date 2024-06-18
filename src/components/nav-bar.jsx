import { useEffect, useState } from "react"
import { fetchTopics } from "../../api"

export const Topics = () => {
  const [topics, setTopics] = useState([])  

  useEffect(() => {
    fetchTopics().then((topics) =>{
        setTopics(topics)
    })
  }, [])
    return (
<div className="topnav">
  {topics.map((topic, i) => {
    return (
        <a key={i}>{topic.slug} </a>
    )
  })}
</div>
    )
    
    
}