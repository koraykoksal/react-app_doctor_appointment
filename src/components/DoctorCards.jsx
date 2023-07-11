import React from 'react'
// import { useState } from 'react'
export const DoctorCards = ({id,name,dep,img}) => {

    

  return (
    <div>

        <div class="card">
            <img src={img} alt={name} />
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{dep}</p>
        </div>
        </div>

    </div>
  )
}
