import React from 'react'
import logo from "../assets/img/tcSaglikBakanligi_logo.png";
import "../sass/Header.scss";

export const Header = () => {
  return (
    <>
      
      
      <div className="container mt-4 headerTop">
        <div className='row'>
        <div className='col-sm-2 col-md-2 text-center m-auto'>
          <img src={logo} alt="logo" />
        </div>
        
        <div className='col-sm-10 col-md-10 text-center m-auto'>
          <h3>Hızlı Randevu Sistemi</h3>
        </div>
        </div>
      </div>




    </>
  )
}
