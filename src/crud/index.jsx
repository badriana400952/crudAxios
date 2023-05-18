import React from 'react'
import { useState, useEffect } from 'react'
import getNames from './Api'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
// import Loading from './Loading';
// import FromData from './FromData';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Crud = () => {


    const [names, setNames] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getNames()
            .then((response) => {
                console.log(response.data)
                setNames(response.data)

            })

    }, [])
    const handleDelete = (id) => {
        const konfig = window.confirm('yakin ingin mengahpus?')
        if (konfig) {
          
            axios.delete(`http://localhost:5000/data/${id}`)
                .then(response => {
                    alert(response,"data berhasil di hapus")
                    navigate('/')
                    console.log('User deleted successfully');
                })
                .catch(error => {
                    alert("data GAGAL dihapus")
                    console.error('Error deleting user:', error);
                });
        }

    }

    return (
        <div className="mt-5">
            <Container>

                <Button><Link to="/create" className="text-light">Add +</Link> </Button>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            names.map((n) =>
                                <tr key={n.id}>
                                    <td>{n.name}</td>
                                    <td>
                                        <Link to={`/update/${n.id}`} className='text-decoration-none p-2'>update</Link>
                                        <Button onClick={e => handleDelete(n.id)}>delete</Button>
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

export default Crud