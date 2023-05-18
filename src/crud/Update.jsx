import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [update, setUpdate] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/data/`+ id)
            .then(response => {
                setUpdate(response.data)
                console.log(response.data);
            })
            .catch((err) => console.erroer(err.response.data))
    },[])


    const handleSumbit = (event) => {
        event.preventDefault()

        axios.put(`http://localhost:5000/data/`+id, update)
            .then((res) => {
                alert("data berhasil di edit")
                console.log(res.data)
                navigate('/')

            }).catch((err) => {
                console.error(err.response.data)
            })

    }

    return (
        <div className='mt-5'>
            <Container>
                <Form onSubmit={handleSumbit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input type="name" name='name' required value={update.id} onChange={e => setUpdate({ ...update, [e.target.name]: e.target.value })} placeholder="Enter email" />
                        <input type="name" 
                        name='name' 
                        value={update.name} 
                        onChange={e => setUpdate({ ...update, [e.target.name]: e.target.value })} 
                        placeholder="Enter email" />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>

    )
}

export default Update