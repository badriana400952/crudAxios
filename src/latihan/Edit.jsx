import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css'


const Edit = () => {
    const navigate = useNavigate()
    const [edit, setEdit] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/kontak/` + id)
            .then((response) => {
                setEdit(response.data)
                console.log(response.data)
            }).catch((err) => console.erroer(err.response.data))
    }, [])

    const handleSumbit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:5000/kontak/` + id, edit)
            .then((res) => {
                alert("data berhasil di edit")
                console.log(res.data)
                navigate('/')
            }).catch((err) => {
                alert("data gagal di tambahkan")
                console.error(err)
            })
    }

    return (
        <Row className='tambah'>
            <Col xs={8} >
                <Container className="card">
                <h3 className='update'>Update</h3>
                    <Form onSubmit={handleSumbit}>
                        <Form.Group className="mb-3 fromss" controlId="formBasicEmail">
                            <input
                            className='input_1'
                                type="name"
                                value={edit.name}
                                name='name'
                                onChange={e => setEdit({ ...edit, [e.target.name]: e.target.value })} placeholder="Name" />
                            <br/><input  
                            className='input_1'
                                type="name"
                                value={edit.telp}
                                name='telp'
                                onChange={e => setEdit({ ...edit, [e.target.name]: e.target.value })} placeholder="telp" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    )
}

export default Edit