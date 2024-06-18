import { useState } from 'react'
import '../src/App.css'
import { Header } from './components/header'
import { Topics } from './components/nav-bar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Topics />
        
      
    </>
  )
}

export default App
