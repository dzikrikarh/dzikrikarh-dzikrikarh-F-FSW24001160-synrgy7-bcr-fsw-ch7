import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Search from './pages/Search.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Protected from './components/Protected.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={
            <Protected>
              <App/>
            </Protected>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/search' element={<Search/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
