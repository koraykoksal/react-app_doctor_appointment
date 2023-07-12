import React from 'react'
import "../sass/Appointment.scss"
import resim from "../assets/img/ok.png"
import { useState } from 'react'

export const Appointment = ({item}) => {

  const [showImage, setShowImage] = useState(true)

  const handleClick=()=>{
      
      setShowImage(!showImage)
  }


  const handleDelete=(e)=>{

    if(e.target.classList.value === "btn btn-outline-danger"){
      e.target.closest(".container").remove()
    }

  }

  return (

    <>

      {
        showImage?(

          <div class="card mb-5 mt-4 appCard" onClick={handleClick}>

          <div class="card-body appCardBody">

            <div className='bd1'>

              <div>
              <h5 class="card-title text-secondary">Patient Name : {item.patient}</h5>
              </div>
              <div>
              <h5 className='text-secondary'>Dr Name : {item.drname}</h5>
              </div>
              <div>
              <h5 className='text-secondary'>Time : {item.day}</h5>
              </div>
            </div>

            <div className='danisildi'>
            <img src={resim} alt="" />
            </div>

            <div className='bd2'>
            <button type="button" class="btn btn-outline-danger">Del</button>
            </div>
            
          </div>
        </div>


        ):(

          <div class="card mb-5 mt-4 appCard" onClick={handleClick}>

          <div class="card-body appCardBody">

            <div className='bd1'>

              <div>
              <h5 class="card-title text-secondary">Patient Name : {item.patient}</h5>
              </div>
              <div>
              <h5 className='text-secondary'>Dr Name : {item.drname}</h5>
              </div>
              <div>
              <h5 className='text-secondary'>Time : {item.day}</h5>
              </div>
            </div>

            <div>
            <button type="button" class="btn btn-info" onClick={handleClick}>Consulted</button>
            </div>

            <div className='bd2'>
            <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>Del</button>
            </div>
            
          </div>
        </div>



        )
      }


    </>
  )
}

