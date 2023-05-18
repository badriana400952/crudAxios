import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './latihanDua/Home'
import Tambah from './latihanDua/Tambah'
import Ubah from './latihanDua/Ubah'

const LatihanDua = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="tambah" element={<Tambah/>} />
        <Route path="ubah/:id" element={<Ubah/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default LatihanDua