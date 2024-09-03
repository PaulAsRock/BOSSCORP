import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/styles/style.scss'

import { Home } from './pages/Home'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { TableIndex } from './pages/TableIndex'
import { UserMsg } from './cmps/UserMsg'

export function App() {
  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <div className='main-container'>
          <div className='main layout'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/table' element={<TableIndex />} />
            </Routes>
          </div>
        </div>
        <AppFooter />
        <UserMsg />
      </div>
    </Router>
  )
}

export default App
