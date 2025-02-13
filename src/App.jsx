import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './nav_bar'
import About from './About'
import Project from './project'

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Project />
    </div>
      
  )
}

export default App
