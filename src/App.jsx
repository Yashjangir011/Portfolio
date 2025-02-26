import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './nav_bar.jsx'
import About from './About.jsx'
import Project from './project.jsx'

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
