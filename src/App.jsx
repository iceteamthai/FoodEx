import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '/Components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomePage from './Pages/HomePage.jsx'
import Products from './Pages/Products'
import AboutMe from './Pages/AboutMe'
import NotFound from './Pages/NotFound'
import CardDetail from './Pages/CardDetail'


const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header />

          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Products' element={<Products />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/card_detail/:id' element={<CardDetail/>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App