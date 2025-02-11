
import './App.css'
import './index.css'
import Main_page from './Main_page'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Login_Page from './Login_Page'
import Signup_Page from './Signup_Page'
import Contact from '../components/contact'
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/login" element={<Login_Page />} />
        <Route path="/signup" element={<Signup_Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
