import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
const LatihanCrud = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const apiData = 'http://localhost:5000/kontak'

  const getData = async () => {
    await axios.get(apiData)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.error("ini eror ya ", err))
  }
  useEffect(() => {
    getData()
  }, [])

  const handleDelete = (id) => {
    const conf = window.confirm("tindakan anda akan menghapus")
    if (conf) {
      axios.delete(`http://localhost:5000/kontak/`+id)
        .then((ress) => {
          console.log("data", ress)
          navigate('/')
        }).catch((error) => console.error((error)))
    }
  }
  return (
    <div className="mt-5">
      <Container>
        <h1>Daftar Kontak</h1>
        <Button><Link to='/create' className='text-light text-decoration-none mb-4'>Tambah Data</Link></Button>
        <Table striped bordered hover variant="dark" className="mt-5">
          <thead>
            <tr>
              <th>no</th>
              <th>Name</th>
              <th>Telepon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d) =>
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.telp}</td>
                  <th>
                    <Link to={`/edit/${d.id}`} className="text-light bg-success tombol text-decoration-none">Edit</Link>
                    <Button onClick={e => handleDelete(d.id)}>Hapus</Button>
                  </th>
                </tr>
              )
            }

          </tbody>
        </Table>
      </Container>
    </div>
  )
  
}

export default LatihanCrud