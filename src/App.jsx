import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './nav_bar'
import About from './About'
import Project from './project'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Project />
    </BrowserRouter>
  )
}

export default App
