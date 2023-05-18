// import React from 'react'
// import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// const Listcom = ({ data, handleEdit, handleHapus }) => {
//     return (
//         <div>
//             {data.map((kontak ,index) => {
//                 return (
//                     <Card style={{ width: '20rem' }} className="mt-2">
//                         <Card.Body key={index}>
//                             <Card.Title>{kontak.nama}</Card.Title>
//                             <Card.Text>
//                                 {kontak.telp}
//                             </Card.Text>
//                             <Button className='m-2' onClick={() => handleEdit(kontak.id)}>Edit</Button>
//                             <Button onClick={() => handleHapus(kontak.id)}>Hapus</Button>
//                         </Card.Body>
//                     </Card>
//                 )
//             })}

//         </div>
//     )
// }

// export default Listcom