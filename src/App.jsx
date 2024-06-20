import { useState } from 'react'
import '../src/App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Topics } from './components/Nav'
import { AllArticles } from './components/ArticleList'
import { IndividualArticle } from './components/IndividualArticle'
import { CommentsForArticle } from './components/CommentsForArticle'

function App() {
  

  return (
    <>
     <Header />
     <Topics />
     <Routes>
      <Route path="/" element={<AllArticles/>}/>
      <Route path="/articles/:article_id" element={<IndividualArticle />} />
     </Routes>
       
      
    </>
  )
}

export default App
