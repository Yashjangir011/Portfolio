
import './App.css'
import Main_page from './Main_page'
import login_page from './login_page'
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route path='/mainpage' element={<Main_page/>}/>
       <Route path='/loginpage' element={< login_page />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
