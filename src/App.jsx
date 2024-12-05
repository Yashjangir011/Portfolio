
import './App.css'
import './index.css'
import Main_page from './Main_page'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Login_Page from './login_page'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/login" element={<Login_Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
