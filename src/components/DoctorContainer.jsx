import React from 'react'
import "../sass/Doctors.scss";
import { useState } from 'react';
import {doctorData} from "../assets/data"
import { DoctorCards } from './DoctorCards';
import { Appointment } from './Appointment'

export const DoctorContainer = () => {

    const [app, setApp] = useState([])
    const [search, setSearch] = useState("")
    const [unit, setUnit] = useState("")

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const handlePres=(e)=>{
      if(e.keyCode >= 48 && e.keyCode <= 57){
        console.log(e.keyCode);
        e.preventDefault()
      }
        
    }

    const handledrSelect=(e)=>{
      setUnit(e.target.value)
    }


  return (
    <>
      
      <div className='container m-auto text-center mt-5 mb-5 doctorSearch'>
        <div className='row'>
          
          <div className='col-sm-6 col-md-6 p-4'>
            <h5>Doctor Search</h5>
            <input type="text" placeholder='Doctor Search' onChange={handleChange} onKeyDown={handlePres}/>
          </div>

          <div className='col-sm-6 col-md-6 p-4'>
            <h5>Medical Units</h5>
            <select name="" id="" onChange={handledrSelect}>
              <option value="">Medical Units</option>
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
              
              doctorData.filter((item)=>(item.name.toLowerCase().includes(search.toLowerCase()))).filter((item)=>(item.dep.toLowerCase().includes(unit.toLowerCase()))).map((item,i)=>(

                <DoctorCards key={i} {...item} app={app} setApp={setApp}/>
                    
              ))

            }
        </div>
      </div>
      
      <div className="container">
      <h3 className='text-center text-danger mb-2'>Appointment List</h3>
            {app.map((item) => (
            <Appointment item={item}/>
            ))}
        </div>


    </>
  )
}
