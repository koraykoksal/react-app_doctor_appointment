import React from 'react'
import "../sass/Doctors.scss"
// import { Form, FormControl, Modal } from 'react-bootstrap'
import { useState } from 'react'
// import Button from "react-bootstrap/Button";
// import { Appointment } from './Appointment'
import { Modal } from 'react-bootstrap'


export const DoctorCards = ({id,name,dep,img,app,setApp}) => {

    const [show, setShow] = useState(false)
    
    const [inputs, setInputs] = useState({});

    //showmodal
    const handleShowModal=()=>{
        setShow(true)
    }
    //closeModal
    const handleCloseModal=()=>{
        setShow(false)
    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value,"drname":name}))
    }

    const handleSubmit=(e)=>{

        setApp([...app,inputs])
        //setApp((app)=>[...app,inputs])
        handleCloseModal()
    }

    console.log(inputs);
    console.log(app);

  return (

    <>
   
   

        <div onClick={handleShowModal} >

            <div class="card drCards m-auto text-center">
            
            <img src={img} alt={name} />

            <div class="card-body">
                <div className='text-center m-auto'>
                <h6 class="card-title">{name}</h6>
                <p class="card-title">{dep}</p>
                </div>
                
            </div>
            </div>

        </div>


        {/* modal */}
        <Modal show={show} setShow={setShow} className='mdl'>
            <Modal.Body>

                <div className='row text-center m-auto'>

                    <h4>{name}</h4>
                    <img src={img} alt={name} />
                    <input type="text" placeholder='Patient Name' name='patient' value={inputs.name}  onChange={handleChange} required />
                    <input type="datetime-local" onChange={handleChange} name='day' value={inputs.day || ""} required />
                   
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleCloseModal} className='btn btn-secondary' type='submit'>Close</button>
                <button className='btn btn-primary' type='submit' onClick={handleSubmit}>Submit</button>
            </Modal.Footer>
        </Modal>
        
        
    </>

  )
}
