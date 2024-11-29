
import './App.css'
import './index.css'
import Main_page from './Main_page'
import Login_Page from './Login_Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

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
