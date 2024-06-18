import { useState } from 'react'
import '../src/App.css'
import { Header } from './components/header'
import { Topics } from './components/Nav'
import { AllArticles } from './components/ArticleList'


function App() {
  

  return (
    <>
     <Header />
     <Topics />
     <AllArticles />   
      
    </>
  )
}

export default App
