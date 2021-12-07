// PAGES
import Home from './pages/Home'
import UnisPage from './pages/UnisPage.js'
import Profile from './pages/Profile.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/university/:id' element={<UnisPage />} />
                    <Route path='/' element={<Home />} exact />
                </Routes>
            </div>
        </Router>
    )
}

export default App
