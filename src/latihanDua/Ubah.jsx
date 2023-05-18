import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Ubah = () => {

    const [ubah, setUbah] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/kontak/`+ id)
            .then((response) => {
                setUbah(response.data)
            }).catch((error) => {
                console.error(error)
            })
    }, [id])

    const handleSumbit = (event) => {
        event.preventDefault()

        axios.put(`http://localhost:5000/kontak/` + id, ubah)
            .then((response) => {
                alert('data berhasil di tambahkan')
                console.log(response.data)
                navigate("/")
            }).catch((error) => {
                alert('data gagal di tambahkan')
                console.error(error)
            })
    }
    return (
        <div className="mt-5">
            <Container>
                <Form onSubmit={handleSumbit}>
                    <input
                        value={ubah.name}
                        name='name'
                        onChange={e => setUbah({ ...ubah, [e.target.name]: e.target.value })} />
                    <input
                        value={ubah.telp}
                        name='telp'
                        onChange={e => setUbah({ ...ubah, [e.target.name]: e.target.value })} />
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Ubah
