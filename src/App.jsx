import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import XozTovar from './pages/XozTovar'
import Banka from './pages/Banka'
import Product from './pages/Product'
import Svet from './pages/Svet'
import Issiq from './pages/Issiq'
import Sovuq from './pages/Sovuq'
import { SimpleRegistrationForm } from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<SimpleRegistrationForm />} />
        <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='xozTovar' element={<XozTovar />} />
            <Route path='product' element={<Product />} />
            <Route path='banka' element={<Banka />} />
            <Route path='svet' element={<Svet />} />
            <Route path='issiq' element={<Issiq />} />
            <Route path='sovuq' element={<Sovuq />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App