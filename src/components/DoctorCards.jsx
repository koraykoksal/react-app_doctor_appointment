import React from 'react'
import "../sass/Doctors.scss"
import { Modal } from 'react-bootstrap'
import { useState } from 'react'

export const DoctorCards = ({id,name,dep,img}) => {

    const [show, setShow] = useState(false)
    
    const handleShowModal=()=>{
        setShow(true)
    }

    const handleCloseModal=()=>{
        setShow(false)
    }

  return (

    <>
   
        <div onClick={handleShowModal}>

            <div class="card drCards text-center m-auto">
                <img src={img} alt={name} />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{dep}</p>
                </div>
            </div>
        </div>

        <Modal show={show} setShow={setShow} className='mdl'>
            <Modal.Body>
                <div className='row text-center m-auto'>
                    <h4>{name}</h4>
                    <img src={img} alt={name} />
                    <input type="text" placeholder='Name Surname' />
                    <input type="datetime-local" />
                </div>


            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleCloseModal} className='btn btn-secondary' type='submit'>Close</button>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </Modal.Footer>
        </Modal>
    </>

  )
}
