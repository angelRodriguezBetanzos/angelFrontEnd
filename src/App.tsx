import React from 'react'
import { Login } from './pages/Login'
import { Hotels } from './pages/Hotels'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    // <Hotels />
    <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/' Component={Hotels}></Route>
    </Routes>
  )
}

export default App
