import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate()
    const [name, setName] = useState({
        name: "",
        telp: ""
    })

    const handleSumbit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:5000/kontak/`, name)
            .then((res) => {
                alert("data berhasil di tambahkan")
                console.log(res.data)
                navigate('/')
            }).catch((err) => console.error(err))
    }

    return (
        <Row className="tambah">
            <Col xs={6} >
                <Container className="card" >
                <h3 className='update'>Tambah Data</h3>
                    <Form onSubmit={handleSumbit} className="formcreate">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama</Form.Label>
                            <InputGroup size="sm"
                                className="mb-3"
                                name='name'
                                onChange={e => setName({ ...name, name: e.target.value })}
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
                                onChange={e => setName({ ...name, telp: e.target.value })}
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
            </Col>
        </Row>

    );
}

export default Create;