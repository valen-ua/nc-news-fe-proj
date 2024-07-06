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
<ul>
       
{topics.map((topic, i) => (
      <li key={i}>
        <Link to={`/${topic.slug}`}>{topic.slug}</Link>
      </li>
    ))}
   </ul>
</section>
    )
    
    
}