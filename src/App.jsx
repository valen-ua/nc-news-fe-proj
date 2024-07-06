import { useState } from 'react'
import '../src/App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Topics } from './components/Nav'
import { AllArticles } from './components/ArticleList'
import { IndividualArticle } from './components/IndividualArticle'


function App() {
  

  return (
    <body>
     <Header />
     <Topics />
     <Routes>
      <Route path="/" element={<AllArticles/>}/>
      <Route path="/articles/:article_id" element={<IndividualArticle />} />
     </Routes>
       
      
    </body>
  )
}

export default App
