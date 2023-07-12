import React from 'react'
import "../sass/Appointment.scss"


export const Appointment = ({item}) => {

  return (

    <>


        <h3 className='text-center text-danger'>Appointment List</h3>
          <div class="card mb-5 mt-4">
          <div class="card-body">

            <div className='bd1'>

              <div>
              <h5 class="card-title text-danger">{item.patient}</h5>
              </div>
              <div>
              <h5 className='text-secondary'>{item.drname}</h5>
              </div>
              <div>
              <h5 className='text-secondary'>{item.day}</h5>
              </div>
              
              
            </div>

            <div className='bd2'>
              <button>Delete</button>
            </div>
            
          </div>
        </div>

    </>

  )
}
