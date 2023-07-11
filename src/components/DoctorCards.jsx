import React from 'react'
import "../sass/Doctors.scss"
export const DoctorCards = ({id,name,dep,img}) => {


    const handleClick=()=>{

    }

  return (
    <div onClick={handleClick}>

        <div class="card drCards text-center m-auto">
            <img src={img} alt={name} />
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{dep}</p>
        </div>
        </div>

    </div>
  )
}
