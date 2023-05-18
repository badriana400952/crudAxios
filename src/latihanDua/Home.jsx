import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([])

    const GetApi = async () => {
        await axios.get(`http://localhost:5000/kontak/`)
            .then((response) => {
                console.log("ini data", response.data)
                setData(response.data)
            }).catch((err) => {
                console.error(err)
            })
    }
    useEffect(() => {
        GetApi()
    }, [])

    const handleDelete=(id)=>{
        const conf = window.confirm('yakin')
        if(conf) {
            axios.delete(`http://localhost:5000/kontak/`+id)
            .then((response)=>{
                alert('berhasil di hapus',response)
            }).catch((error)=>{
                console.error(error)
                alert('gagal menghapus')
            })
        }
     }
    
    return (
        <div className="mt-5">
            <Container>
                <Button><Link to={'/tambah'} 
                className="text-light text-decoration-none">Tambah Data</Link></Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Telepon</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((d) =>
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.telp}</td>
                                    <td>
                                        <Link to={`/ubah/${d.id}`}>Edit</Link>
                                        <Button onClick={e => handleDelete(d.id)}>hapus</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Home