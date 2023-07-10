import React from 'react'
import "../sass/Doctors.scss";

export const Doctors = () => {
  return (
    <>
      
      <div className='container m-auto text-center mt-5 doctorSearch'>
        <div className='row'>
          
          <div className='col-sm-6 col-md-6'>
            <input type="text" placeholder='Doktor ara' />
          </div>

          <div className='col-sm-6 col-md-6'>
            <select name="" id="">
              <option value="">Tıbbi Birimler</option>
            </select>
          </div>

        </div>
      </div>
      


    </>
  )
}
