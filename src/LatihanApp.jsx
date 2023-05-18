import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './latihan/Create'
import LatihanCrud from './latihan/LatihanCrud'
import Edit from './latihan/Edit'

const LatihanApp = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LatihanCrud/>} />
      <Route path='create' element={<Create/>} />
      <Route path='edit/:id' element={<Edit/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default LatihanApp