import React from 'react'
import "../sass/Appointment.scss"


export const Appointment = ({item}) => {

  return (

    <>


        
          <div class="card mb-5 mt-4 appCard">

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

            <div className='bd2'>
            <button type="button" class="btn btn-outline-danger">Del</button>
            </div>
            
          </div>
        </div>

    </>

  )
}
