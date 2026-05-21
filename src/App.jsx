import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Content from './pages/Content'
import Game from './pages/Game'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'content':
        return <Content setCurrentPage={setCurrentPage} />
      case 'game':
        return <Game setCurrentPage={setCurrentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App
