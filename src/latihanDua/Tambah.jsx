import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tambah = () => {
    const navigate = useNavigate()
    const [tambah, setTambah] = useState({
        name: "",
        telp: ""
    })

    const handleSumbit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:5000/kontak/`, tambah)
            .then((response) => {
                console.log('ini tambah', response.data)
                alert('data berhasil di tambah')
                navigate("/")
            }).catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="mt-5">
            <Container>
                <Form onSubmit={handleSumbit} className="formcreate">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama</Form.Label>
                        <InputGroup size="sm"
                            className="mb-3"
                            name='name'
                            onChange={e => setTambah({ ...tambah, name: e.target.value })}
                        >
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Telepon</Form.Label>
                        <InputGroup size="sm" className="mb-3"
                            onChange={e => setTambah({ ...tambah, telp: e.target.value })}
                            name='telp'
                        >

                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Tambah