import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Create = () => {


    const navigate = useNavigate()
    const [data, setData] = useState({
        name: ""
    })



    const handleSumbit = (event) => {
        event.preventDefault()

        axios.post(`http://localhost:5000/data`, data)
            .then((res) => {
                alert("data berhasil di tambahkan")
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
                        <input type="name" name='name' onChange={e => setData({ ...data, [e.target.name]: e.target.value })} placeholder="Enter email" />
                      
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Create
