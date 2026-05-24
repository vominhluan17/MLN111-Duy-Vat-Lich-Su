import { useState } from 'react'
import AcademicLayout from './pages/AcademicLayout'
import Content from './pages/Content'
import Game from './pages/Game'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <AcademicLayout setCurrentPage={setCurrentPage} />
      case 'content':
        return <Content setCurrentPage={setCurrentPage} />
      case 'game':
        return <Game setCurrentPage={setCurrentPage} />
      default:
        return <AcademicLayout setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App
