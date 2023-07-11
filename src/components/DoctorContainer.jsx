import React from 'react'
import "../sass/Doctors.scss";
import { useState } from 'react';
import {doctorData} from "../assets/data"
import { DoctorCards } from './DoctorCards';

export const DoctorContainer = () => {


    const [search, setSearch] = useState("")
    // const [drSelect, setdrSelect] = useState("")

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const handlePres=(e)=>{
      if(e.keyCode >= 48 && e.keyCode <= 57){
        console.log(e.keyCode);
        e.preventDefault()
      }
        
    }

    // const handledrSelect=(e)=>{
    //   setdrSelect(e.target.value)
    //   console.log(drSelect);
    // }

  return (
    <>
      
      <div className='container m-auto text-center mt-5 doctorSearch'>
        <div className='row'>
          
          <div className='col-sm-6 col-md-6 p-4'>
            <h5>Doktor Ara</h5>
            <input type="text" placeholder='Doktor ara' onChange={handleChange} onKeyDown={handlePres}/>
          </div>

          <div className='col-sm-6 col-md-6 p-4'>
            <h5>Tıbbi Birim</h5>
            <select name="" id="">
              <option value="">Tıbbi Birimler</option>
              {
                  doctorData.map((item,i)=>{

                    return(
                      <option key={i} value={item.dep}>{item.dep}</option>
                    )
                  })
              }
            </select>
          </div>

        </div>

        <div className='doctors'>
            {
              doctorData.filter((item)=>(item.name.toLowerCase().includes(search.toLowerCase()))).map((item,i)=>(

                <DoctorCards key={i} {...item}/>
                    
              ))
              
            }
        </div>
      </div>
      


    </>
  )
}
